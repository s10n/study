---
category: MySQL
title: 쿼리 기초
---


## 접속
```bash
mysql -u username -p dbname
```


## DB 생성 및 삭제
```sql
create database name default character set='utf8';
grant all privileges on dbname.* to dbuser@localhost identified by 'dbpassword' with grant option;
flush privileges;
drop database db_name;
```


## DB 목록 보기
```sql
show databases;
```


## DB 백업 및 복구
```bash
mysqldump -u username -p dbname > file.sql       # DB 백업
mysqldump -u root -p dbname tablename > file.sql # DB의 특정 테이블 백업
mysql -uusername -p dbname < file.sql            # 백업한 DB를 복구
```


## MySQL 사용자 전체 쿼리
```sql
SELECT Host, User FROM mysql.user;
```


## 쿼리 예제
```sql
SELECT * FROM `wp_posts` WHERE `post_type` = 'revision' LIMIT 200;
SELECT * FROM `wp_posts` WHERE `post_type` != 'page' AND `post_type` != 'revision' LIMIT 200;
SELECT `ID`, `post_content`, `post_type` FROM `wp_posts` WHERE `post_type` = 'post' OR `post_type` = 'revision' LIMIT 1000;
```
```sql
SELECT `ID`,`post_title`,`post_type`
FROM `wp_posts`
ORDER BY `wp_posts`.`post_type` ASC, `wp_posts`.`ID` ASC
LIMIT 0, 100
```

### 'blog_public'을 0에서 1로 변경하는 스크립트
```bash
MYSQL=`which mysql`
Q1="UPDATE \`wp_options\` SET \`option_value\`=1 where \`option_name\`='blog_public';"
SQL="${Q1}"
echo "$(tput setaf 3)검색엔진 차단을 해제하기 위해 MySQL 비밀번호를 입력하세요.$(tput sgr0)"
echo "-------------------------------------------------------------------------"
$MYSQL -uroot -p -e "$SQL"
```
