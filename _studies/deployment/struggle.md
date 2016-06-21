---
category: Deployment
title: 시행착오
---


## 개요

아래는 uWSGI 설정 중 일어난 시행착오에 대해 다룬다.

## 처음 설정 파일
* [uWSGI Options](https://uwsgi-docs.readthedocs.io/en/latest/Options.html)
* [Configuring uWSGI](https://uwsgi.readthedocs.io/en/latest/Configuration.html)
* [How to use Django with uWSGI](https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/uwsgi/)

```ini
[uwsgi]

# Socket
## bind to the specified UNIX/TCP socket using default protocol
socket = ../run/site.sock
## enable the stats server on the specified address
stats = ../run/site-stats.sock
## chmod-socket
chmod-socket = 666
## set the socket listen queue size
listen = 128

# Process
## enable master process
master = true
## spawn the specified number of workers/processes
processes = 2

# Threads
## enable threads
enable-threads = true
## run each worker in prethreaded mode with the specified number of threads
threads = 4

# Requests
## reload workers after the specified amount of managed requests
max-requests = 2000

# Module
## load a WSGI module
module = app
## set default WSGI callable name
callable = app
## set PYTHONHOME/virtualenv
virtualenv = ../env
```


## 현상
위 파일로 `uwsgi --ini uwsgi.ini` 명령을 수행하면, 다음과 같은 에러 메시지를 출력한다.

```
no internal routing support, rebuild with pcre support
```


## 시도들
* uWSGI의 각 옵션에 대해 정확히 파악하면 해결 가능할 것으로 추측했다.
  - 옵션의 양이 방대하여 어떤게 필요한지 판단하기 어렵다.
  - 설명을 읽어도 정확한 이해가 어렵다.

* 나오는 에러메시지를 구글링해봤다.
  - [스택오버플로우 답변](http://stackoverflow.com/a/22645915): `apt-get install libpcre3 libpcre3-dev` 설치 후 pip, apt-get에서 uwsgi를 지우고 새로 설치하라는 내용이지만 해결되지 않았다.
  - 나머지 답변들도 비슷한 내용이고 별다른 수확이 없었다.

* .ini 파일 없이 `uwsgi --http :8000 --module main_project/wsgi.py`로 켜면, 외부에서 접속은 가능하지만 internal server error라고 출력한다.
  - 외부에서 접속이 가능함을 확인했다는 데에만 의의를 두었다.
  - 그런데 여기서도 위의 pcre 관련 에러메시지가 뜨지만 서버가 켜지는 것으로 보아, 저 메시지는 현재 상태에 영향을 주는 건 아닌 것으로 보인다.

* 다른 에러메시지를 해결해보기로 했다.
  - `Listen queue size is greater than the system max net.core.somaxconn (128).`

* 기존 `listen = 8192`를 `listen = 128`로 변경
  - 이번엔 서버가 켜지지만 역시 브라우저는 Internal Server Error를 출력한다.
  - 로그를 살펴보면 `ImportError: No module named app`가 보이는데, 이 부분을 해결하면 될 것이라고 가설을 세웠다.

* 이전 프로젝트로부터 복사해온 .ini 파일인데, 이전 프로젝트는 구동이 가능하다. 왜일까?
  - 이전 프로젝트의 `supervisord.conf`를 살펴보면 다음과 같은 코드가 있다.

    ```config
    command = %(here)s/runinenv.sh %(here)s/daemons/<project>/env uwsgi --module main_project.wsgi -s ../run/site.sock --umask 000
    ```

  - `find` 명령으로 찾아보건데 `main_project.wsgi`라는 파일은 어디에도 없다.
  - 무시하고 해당 명령어를 참고해서 다음처럼 명령을 내려보니, 브라우저로 접속이 가능하며 Django Application 컨텐츠가 표시된다.

    ```bash
    uwsgi --module main_project.wsgi -s ../run/site.sock --umask 000
    ```

* 끝.


## 더 알아보기
* `internal routing` 그리고 `pcre`는 도대체 뭘 의미하는가?

* 이전 프로젝트에서도 .ini 파일을 작성해놓곤 결국 사용하지 않은 것인가?
  - 맞다면 왜?
  - 아니라면 어떤 형태로 .ini 파일에 적힌 옵션들을 불러왔을까?

* 각 옵션들은 정확히 무엇을 의미하는가?
  - 특히 umask

* `main_project.wsgi`와 `site.sock`은 생성하지도 않았는데, 원래 미리 생성하는게 아닌 파일인가?
