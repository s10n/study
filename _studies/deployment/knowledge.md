---
category: Deployment
title: 지식 및 자료
---


## 전체 구조

### 이미지
(이미지 준비 중)


## 개념

### uWSGI
NGINX는 정적인 파일을 서브한다. Django 애플리케이션을 직접 서브하지 않는다.
Django 애플리케이션은 WSGI(Web Server Gateway Interface)가 필요하다.
이것은 파이썬의 표준이다.
uWSGI는 WSGI구현체 중 하나이다.

uWSGI는 `requirements-production.txt`에 있어야 한다.

### Fabric
[Fabric](http://www.fabfile.org/): 파이썬 앱 배포 및 관리 태스크를 위한 SSH 스트림라이닝 커맨드라인 도구


## 작업

### 인스턴스에 새 계정 만들기
```bash
sudo adduser <username> # sudoer 권한은 주지 않는다.
sudo cp -r .ssh /home/<username> && sudo chown <username>:<username> /home/<username>/.ssh/*
git clone <supervisor>
```
```bash
fab ...
```


## AWS 서비스

### 시큐리티 그룹
* default: 인스턴스 내부용(EC2와 RDS)
  - All / All
* lb: 로드밸런서용
  - Inbound: HTTP, HTTPS
  - Outbound: All
* db: db 외부접속용
  - Inbound: MySQL (3306) MyIP
  - Outbound: All
* ssh: ssh 접속용
  - outbound는 무관

### ACM
* 인증서를 생성한다.
* 아래 과정에서 로드밸런서의 리스너로 쓰이게 된다.

### Load Balancer
* 리스너를 추가한다
  - 80 → 8001
  - 443 → 8001
  - HTTPS, SSL Cert를 ACM으로 잡아준다.
* 이 로드밸런서의 DNS name을 복사해, Route53의 도메인 CNAME으로 지정한다.
  - IP는 고정되지 않고, DNS name은 고정된다.
* Health Check: :80 / 5 seconds / 10 seconds / 2 / 2
  - 인스턴스와 연결된 시큐리티 그룹에 80포트를 열어서 확인시킨다.

### RDS
* Free Tier: MySQL Dev
* Multi-AZ Deployment: No. (Yes 선택시 돈이 두배로 든다.)
* Storage Type: 5GB 뿐이면 마그네틱이 더 나을수도 있다.
* Security Group: Default(내부용), DB(외부용)
* Workbench로 endpoint 주소를 통해 접속할 수 있다.

### Databases
* New Scheme
  - `utf8_general_ci`
* Add Account
  - Standard
  - FromHost를 localhost가 아닌 `%`인 이유는 외부에서 접근해야하기 때문이다.
  - Schema Priviledges > Add Entry > Select all


## APPENDIX

### Vagrant
* [vagrant-aws](https://github.com/mitchellh/vagrant-aws)

### SSH
* [깃헙 Deploy Keys](https://developer.github.com/guides/managing-deploy-keys/)
* [깃헙 SSH 설명](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
* [아틀라시안 SSH 설명](https://confluence.atlassian.com/bitbucket/configure-multiple-ssh-identities-for-gitbash-mac-osx-linux-271943168.html)
* [Vagrant AWS](https://github.com/mitchellh/vagrant-aws)
* [Vagrant Examples](https://github.com/patrickdlee/vagrant-examples)

### NGINX
* [기본 환경설정](https://opentutorials.org/module/384/4526)
* [권장 환경설정](https://opentutorials.org/module/384/4530)
* [가상 호스트 - server 블록](https://opentutorials.org/module/384/4529)
* [변수](https://opentutorials.org/module/384/4508)

### uWSGI
* [Django + NGINX + uWSGI (uWSGI 공식)](http://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html)
* [Django + NGINX + uWSGI (한글)](http://tuwlab.com/ece/26607)
* [Django + NGINX + uWSGI (디지털오션)](https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-uwsgi-and-nginx-on-ubuntu-14-04)

### Django
* [Django documentation \| Managing static files](https://docs.djangoproject.com/en/1.8/howto/static-files/)
* [Django documentation \| Deploying static files](https://docs.djangoproject.com/en/1.8/howto/static-files/deployment/)
* [Django documentation \| How to deploy with WSGI](https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/)
* [Django documentation \| How to use Django with uWSGI](https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/uwsgi/)
* [Django documentation \| Deployment checklist](https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/)

### Git flow
* [git flow](http://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)
* [브랜칭 전략](http://nvie.com/posts/a-successful-git-branching-model/)

### ETC
* 레거시 프로젝트의 서버 매뉴얼 및 기존 프로젝트의 서버 설정들
