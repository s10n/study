---
category: Ruby
title: 루비 온 레일즈
---


## 시작하기

### 클론 혹은 머지 이후: 마이그레이션
* Mac의 경우 `brew install mysql`로 mysql을 먼저 설치한다.
* 이후 mysql에서 DB 및 사용자를 생성하고, `database.yml`의 `localhost`를 `127.0.0.1`로 변경한다.

```bash
bundle install          # 패키지 설치(새 패키지가 설치된 경우)
rvmsudo bundle install  # Mac이 아닌 경우 root 권한 필요
rake db:create          # 최초에
rake db:migrate         # 최초가 아닐때
RAILS_ENV=production rake db:migrate # 프로덕션 모드일때에만 입력
```

### 레일즈 서버 켜기
```bash
rails server -p 30xx -d                  # p:port, d:demon
rails server -p 30xx -e development -d   # -e development: 생략 가능
rails server -p 30xx -e production -d    # 프로덕션은 생략 불가
```

### 레일즈 서버 끄기
```bash
ps -ef | grep rails      # process id 확인
sudo kill -9 p.id        # 해당 프로세스를 kill.
```

### Thin 서버 켜기
```bash
thin start -p 4200 -d
thin start -p 4200 -e production -d
```
