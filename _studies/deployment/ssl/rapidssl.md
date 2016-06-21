---
category: SSL
title: RapidSSL에서 SSL 인증서 발급 및 설치
---


## CSR 생성
> 참조: [Certificate Signing Request (CSR) Generation Instructions for Nginx Server](https://knowledge.rapidssl.com/support/ssl-certificate-support/index?page=content&actpl=CROSSLINK&id=SO17540)

RapidSSL에서 인증서를 구매하기 전에 CSR 파일을 준비해야한다.
서버에서 다음을 수행한다.

```bash
openssl genrsa -out private-key-file.key 2048
openssl req -new -key private-key-file.key -out CSR-file.txt
```

이때에 옵션은 다음을 따라 작성한다.

* Country Name (C): KR
* State or Province (S): Seongdong-gu
* Locality or City (L): Seoul
* Organization (O): akaiv
* Organizational Unit (OU): dev
* Common Name (CN): akaiv.link
* 이메일 주소, 비밀번호, 추가 회사 이름 등은 입력하지 않는다.


## 인증서 구매
인증서를 구매하면서 `CSR-File.txt`의 내용을 제출한다.

## 인증서 다운로드
[인증서를 다운로드](https://security-center.rapidssl.com/process/trust/console_login?application_locale=RAPIDSSL_US)한다.
이 때, X509 옵션을 선택한다.

## 인증서 설치
> 참조: [Installation Instructions for Nginx Server](https://knowledge.rapidssl.com/support/ssl-certificate-support/index?page=content&actpl=CROSSLINK&id=SO17664)

다음을 수행한다:

```bash
mv ssl_certificate.cer SSL.crt
mv IntermediateCA.cer intermediate.crt
cat intermediate.crt >> SSL.crt
mv SSL.crt              /etc/ssl/akaiv-link.crt
mv private-key-file.key /etc/ssl/akaiv-link.key
```

## NGINX 설정
```nginx
server {
  listen 443;

  ssl on;
  ssl_certificate /etc/ssl/your_SSL.crt;
  ssl_certificate_key /etc/ssl/your_domain_name.key;

  server_name your.domain.com;
  access_log /var/log/nginx/nginx.vhost.access.log;
  error_log /var/log/nginx/nginx.vhost.error.log;

  location / {
    root /home/www/public_html/your.domain.com/public/;
    index index.html;
  }
}
```

```bash
sudo /etc/init.d/nginx restart
```

## 확인
[RapidSSL Installation Checker](https://knowledge.rapidssl.com/support/ssl-certificate-support/index?page=content&actp=CROSSLINK&id=SO9556)
