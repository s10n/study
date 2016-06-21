---
category: Linux
title: 설정하기 (패키지)
---

## Git
[Git 기본 설정](../../git/config)


## Django
```bash
sudo apt-get install python-setuptools
sudo easy_install pip
sudo pip install virtualenv
sudo pip install uwsgi
```

## Ruby on Rails
```bash
sudo apt-get install ruby2.0.0
wget http://production.cf.rubygems.org/rubygems/rubygems-2.0.4.tgz
sudo ruby setup.rb # 이후 디렉토리 삭제
sudo gem install rails --version "4.0.0"
sudo apt-get install libsqlite3-dev
```

## MariaDB
```bash
sudo apt-get install python-software-properties
sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 0xcbcb082a1bb943db
sudo add-apt-repository 'deb http://ftp.kaist.ac.kr/mariadb/repo/10.0/debian wheezy main'
sudo apt-get update
sudo apt-get install mariadb-server libmariadbclient-dev
```

## nginx
```bash
sudo adduser www-data username
sudo vi /etc/nginx/sites-enabled/default
sudo service nginx restart
```

## Samba
```bash
sudo apt-get install samba
sudo smbpasswd -a username
sudo vi /etc/samba/smb.conf
```
```config
# == share Definitions ==를 찾아 모두 주석처리한다.
# [Profiles]를 찾아 복사한다.
[virtual]
  comment = Virtual
  path = /home/a
  guest ok = no
  browseable = no
  create mask = 0664
  directory mask = 0775
  read only = no
```
```bash
sudo service samba restart # Debian
sudo service smbd restart  # Ubuntu
sudo service nmbd restart  # Ubuntu
```

이후 Mac에서 `Cmd + K` 입력 후, `smb://hostname/virtual` 형태로 접근할 수 있다.

## cron

### 내용 추가하기
크론탭에 날짜, 시간을 명시해서 새로 한 줄 추가

```bash
vi /etc/crontab
```

위에서 추가한 .sh를 만들기
- `backup.sh` 참조

```bash
sudo vi /root/backup.sh
```

권한 설정: 위에서 만든 파일의 권한 설정

```bash
sudo chmod 775 /root/new.sh
```


크론 재시작

```bash
sudo service cron restart
```

현재 백업중인 내용 확인: `/media/backup`에서 확인


## vsftpd
```config
local_enable=YES # 주석 삭제
write_enable=YES
local_umask=022
```
```bash
sudo service vsftpd restart
10.0.2.15
```
