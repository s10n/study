---
category: MongoDB
title: 덤프
---


## 덤프 명령어
```bash
$ mongodump —db dbname
```


## 복구 명령어
```bash
$ mongo
```
```
mongo> use dbname
mongo> db.dropDatabase()
mongo> ^C
```
```bash
$ mongorestore
```
