---
category: Jekyll
title: 기본 사용법
---


## 설치
```bash
gem install jekyll
```


## 시작하기
```bash
jekyll new myblog
cd myblog
jekyll serve
```
이제 브라우저에 `localhost:4000`를 입력한다.


## 서버
> 참조
>
> [Configuration](https://jekyllrb.com/docs/configuration/)

* 서버의 호스트나 포트를 바꿀 수 있다.

  ```bash
  jekyll serve --host 0.0.0.0
  jekyll serve --port 4001
  ```

* 서버를 켜는 동시에 브라우저에서 열 수 있다.

  ```bash
  jekyll serve -o
  ```


## 빌드
* HTML 산출물로 빌드할 수 있다.

  ```bash
  jekyll build
  jekyll build --destination ~/path/to
  ```
