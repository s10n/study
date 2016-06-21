---
category: WordPress
title: 워드프레스로 프로젝트 진행하기
---


## MAMP 설치
* MAMP 다운로드: [http://mamp.info](http://mamp.info)
* 작업공간으로 사용할 폴더 생성: 예를들어 `~/www`
* MAMP의 Apache 설정을 해당 작업공간으로 변경


## 워드프레스 프로젝트 시작하기

### 파일 준비
* 워드프레스 다운로드 및 압축해제

  ```bash
  wget http://ko.wordpress.org/wordpress-3.9.2-ko_KR.zip # 워드프레스 다운로드
  unzip wordpress-3.9.2-ko_KR.zip                        # 압축해제
  mv wordpress project_name                              # 디렉토리 이름 변경
  ```

### 테마 설치
* `wp-content/theme` 하위에 테마 설치
* 처음 테마 프로젝트를 시작하는 경우
  - 템플릿 복제 `wget https://github.com/akaiv/theme/archive/master.zip`
* 기존 테마 프로젝트가 있을 경우
  - Git clone

### DB 생성
* `utf8_general_ci`
* 로컬: ID: root / PW: root 사용

### wp-config.php
* `wp-config-sample.php`로부터 `wp-config.php` 파일 생성

  ```bash
  cp wp-config-sample.php wp-config.php
  ```

* `wp-config.php` 설정

  ```bash
  vi wp-config.php
  ```

### 퍼미션 설정
* 다음 스니핏을 이용한다:

  ```bash
  find . -type d -exec chmod 770 {} +
  find . -type f -exec chmod 660 {} +
  find wp-content -type d -exec chmod 775 {} +
  find wp-content -type f -exec chmod 664 {} +
  chmod 600 wp-config.php
  ```

### nginx 설정
* 로컬: MAMP가 스스로 설정하므로 필요없음
* 서버: `sudo vi /etc/nginx/sites-enabled/file_name`

### 워드프레스 설정
* 최초 접속
* 설정 - 고유주소: 글 이름 선택
* 설정 - 미디어: 월/별 분류 체크해제
* 설정 - 토론: 댓글 체크해제
* 설정 - 쓰기: 이모티콘 그래픽 체크 해제
* 설정 - 일반: 태그라인 삭제
* 사용자 - 당신의 프로필: 색상 '한밤중' 선택
* 페이지: '샘플페이지' 삭제 및 휴지통 비우기
* 글: '안녕하세요' 삭제 및 휴지통 비우기
* 도구 - 가져오기
* 외모 - 테마: 설정
* 외모 - 메뉴: 설정


## 워드프레스 프로젝트 출시
여기서는 (XML을 이용하지 않고) DB 전체를 백업하여 출시하는 방법을 다룬다.

### 원본 서버
* DB 덤프

  ```bash
  mysqldump -u$DB_USER -p$DB_PASSWORD $DB_NAME > $DB_NAME.sql
  ```

* 문자열 찾아바꾸기: 도메인 및 경로

### 대상 서버
* 워드프레스 프로젝트 시작하기 실행
* uploads 폴더 복사 및 권한 설정

  ```bash
  sudo chown -R www-data:www-data uploads/
  ```

* 덤프한 sql 파일로 DB 덮어쓰기

  ```bash
  mysql -u$DB_USER -p$DB_PASSWORD $DB_NAME < $DB_NAME.sql
  ```

* 플러그인 설정
