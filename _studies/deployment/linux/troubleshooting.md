---
category: Linux
title: 문제 해결
---


## 구글컴퓨트엔진

### 워드프레스에서 플러그인 설치를 위해 FTP 선언하기
아래 내용을 `wp-config.php`에 추가한다.

```php
define('FTP_HOST', 'localhost');
define('FTP_USER', '****');
define('FTP_PASS', '************');
```


## LESSC 컴파일러가 레일즈 것을 사용하고 있을 때
```bash
vi ~/.bashrc
```

`alias lessc=/usr/local/bin/lessc` 추가

```bash
source ~/.bashrc
```


## links 앱이 동작하지 않을 경우
```bash
source ../.rvm/scripts/rvm
thin restart -p 3000 -e production -d
```


## phpMyAdmin 동작하지 않을 경우
`/var/lib/php/session`이 `root:nginx`로 되어있어야 정상작동함


## Virtual Box -백업한 VM 복구 방법
* `.ova` 파일 더블클릭으로 가져오기 자동실행
* 기본값 복원 한번 클릭, MAC 초기화는 체크해제 그대로 놔둠
