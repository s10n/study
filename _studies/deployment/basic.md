---
category: Deployment
title: 서버 구축
---

## 개요
* 요약: 파이썬 프로젝트 협업을 위한 개발 서버를 구축한다.
* 작성 시기: 2016년 7월


## 서버 구축

### AWS 서비스
* [Security Groups][SG]
* [Key Pairs][KP]
* [ACM][CM]
* [EC2][EC]
* [Load Balancer][LB]
* [Route53][R5]
* [RDS][DB]
* [S3][S3]
* [CloudFront][CF]

[SG]: https://ap-northeast-2.console.aws.amazon.com/ec2#SecurityGroups:
[CM]: https://ap-northeast-2.console.aws.amazon.com/acm
[R5]: https://console.aws.amazon.com/route53/home?region=ap-northeast-2
[KP]: https://ap-northeast-2.console.aws.amazon.com/ec2#KeyPairs:
[LB]: https://ap-northeast-2.console.aws.amazon.com/ec2#LoadBalancers:
[EC]: https://ap-northeast-2.console.aws.amazon.com/ec2
[S3]: https://console.aws.amazon.com/s3/home?region=ap-northeast-2
[CF]: https://console.aws.amazon.com/cloudfront/home?region=ap-northeast-2
[DB]: https://ap-northeast-2.console.aws.amazon.com/rds

## 서버 시작

### 배포 키 만들기
```bash
ssh-keygen -f ~/.ssh/id_rsa -t rsa -b 4096 -C "team@example.com"
```

### 리눅스 프로비저닝
```bash
vagrant up
fab <environment> provision
```


## 파일 구조

### 설명서
* `README.md`

### 서버 구축
* `Vagrantfile`

### 프로젝트 설치 및 구동
* `fabfile.py`
* `requirements.txt` (Django)
* `local_settigns.py.default` (Django)
* `uWSGI.ini` (Django)
* `supervisord.conf` (daemon)
* `project.conf` (nginx)

### 빌드 및 테스트
* `generate_test_data.py` (Django)
* `test.py` (Django)
* `Gruntfile` (Front-end)


## 배포할 대상 서버의 종류

서버 | 사용자 | 브랜치
---- | ---- | ----
Production | 사용자 | `master`
Staging | 기획자, QA | `master`
Development | 다른 개발자 | `develop`
Local | 개발자 본인 | `feature/`
