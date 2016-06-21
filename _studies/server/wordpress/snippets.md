---
category: WordPress
title: 스니핏
---


## `include`와 `require`의 차이
* PHP에서
`include`와 `require`는 같은 기능이다. 하지만 에러가 발생했을때 다르다.
`include`는 warning을 만들지만 스크립트를 계속 실행한다.
`require`는 fatal error를 만들고 스크립트가 멈춘다.
* `require_once`는 `require`와 같지만, 파일을 이미 불러왔다면 다시 불러오지 않는다.
코드 작성시 `require_once`를 대부분 사용하는 것이 권고된다.


## nginx 환경에서 WP Super Cache 플러그인 사용하기
* nginx 설정
  1. [http://codex.wordpress.org/Nginx#WP_Super_Cache_Rules](http://codex.wordpress.org/Nginx#WP_Super_Cache_Rules) 코드를 복사해서 `/etc/nginx/wp-super-cache.conf` 등의 파일로 생성한다.
  2. 웹사이트 nginx 설정 작성시 `include wp-super-cache.conf;`를 추가로 작성한다.
  3. `location / { try_files $uri $uri/ =404; }` 행은 제거한다.
  4. 서버를 재시작한다. `sudo service nginx restart`
* wp-config.php 설정
`define( 'WPCACHEHOME', dirname( __FILE__ ) . '/wp-content/plugins/wp-super-cache/' );`
* 플러그인 활성화
