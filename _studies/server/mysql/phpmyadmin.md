---
category: MySQL
title: phpMyAdmin
---


## 설치 (Debian)
```bash
sudo apt-get install phpmyadmin
```

### 설치 중 선택 옵션
* 웹서버: apache와 lighthttpd만 있으므로 (nginx일 경우) 아무것도 선택하지 않는다.
* 데이터베이스: Configure database for phpmyadmin with dbconfig-common? No를 선택한다.

### 엔진엑스 설정
```bash
cd /etc/nginx/sites-available
```

```nginx
server {
  listen  80;
  server_name     pma.akaiv.com;
  location /phpmyadmin {
    root /usr/share/;
    index index.php index.html index.htm;
    location ~ ^/phpmyadmin/(.+\.php)$ {
      try_files $uri =404;
      root /usr/share/;
      fastcgi_pass 127.0.0.1:9000;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include /etc/nginx/fastcgi_params;
    }
    location ~* ^/phpmyadmin/(.+\.(jpg|jpeg|gif|css|png|js|ico|html|xml|txt))$ {
       root /usr/share/;
    }
  }
  location /phpMyAdmin {
    rewrite ^/* /phpmyadmin last;
  }
}
```

### 엔진엑스 재시작
```bash
sudo /etc/init.d/nginx reload
sudo /etc/init.d/nginx restart
```

### 오류 해결
만약 mycrypt 에러가 나온다면 php5-mycrypt를 설치해야한다.

```bash
sudo apt-get install php5-mcrypt
sudo /etc/init.d/php5-fpm restart
```


## 설치 (CentOS)
```bash
sudo yum install phpmyadmin
```

최신 버전을 받으려면 아래를 따른다.

```bash
sudo rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
sudo yum --enablerepo=remi install phpmyadmin
```

### nginx 설정
```bash
sudo vi /etc/nginx/sites-available/phpMyAdmin
```

```nginx
server {
  listen   80;
  server_name      pma.domain.com;
  access_log /var/log/nginx/phpmyadmin/access.log;
  error_log /var/log/nginx/phpmyadmin/error.log;
  root /usr/share/phpMyAdmin;

  location / {
    index  index.php;
  }

  ## Images and static content is treated different
  location ~* ^.+.(jpg|jpeg|gif|css|png|js|ico|xml)$ {
    access_log        off;
    expires           360d;
  }

  location ~ /\.ht {
    deny  all;
  }

  location ~ /(libraries|setup/frames|setup/libs) {
    deny all;
    return 404;
  }

  location ~ \.php$ {
    include /etc/nginx/fastcgi_params;
    fastcgi_pass 127.0.0.1:9000;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME /usr/share/phpMyAdmin$fastcgi_script_name;
  }
}
```

### 마무리
```bash
mkdir -p /var/log/nginx/phpmyadmin
cd /etc/nginx/sites-enabled
ln -s /etc/nginx/sites-available/phpMyAdmin
```

### nginx 재시작
```bash
sudo service nginx restart
```
