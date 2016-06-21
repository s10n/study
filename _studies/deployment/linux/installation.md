---
category: Linux
title: 설치하기
---


## 더 읽어보기
[My First 10 Minutes On a Server - Primer for Securing Ubuntu](http://www.codelitt.com/blog/my-first-10-minutes-on-a-server-primer-for-securing-ubuntu/)


## 설치USB 만들기
* 다운로드: [http://www.ubuntu.com/download/server](http://www.ubuntu.com/download/server)

* 컨버트

  ```bash
  hdiutil convert -format UDRW -o ~/Downloads/ubuntu-14.04-desktop-i386 ~/Downloads/ubuntu-14.04-desktop-i386.iso
  ```

* USB 정보 확인: USB를 꽂기 전과 후에 다음의 명령을 실행해본다.

  ```bash
  diskutil list
  ```

* USB 마운트 해제: 위에서 확인한 USB 정보에 따라 다음 명령의 마지막 숫자를 변경한다.

  ```bash
  diskutil unmountDisk /dev/disk2
  ```

* 생성

  ```bash
  sudo dd if=/Users/simcheolhwan/Downloads/ubuntu-14.04-desktop-i386.img.dmg of=/dev/rdisk2 bs=1m
  ```

* USB 제거: '디스크를 이 컴퓨터에서 읽을 수 없다'는 경고가 나오면 아무것도 누르지 않는다. 모든게 `transferred`됐다고 터미널에 표시되면 다음의 명령어로 Eject한 후, 다이얼로그의 '무시'버튼을 누른다.

  ```bash
  diskutil eject /dev/disk2
  ```


## 서버 선택

### VM
* VirtualBox 네트워크 설정
  - 네트워크 > 호스트 전용 네트워크 > 추가

* VM 새로 만들기
  - 메모리 1024MB
  - VDI 동적 할당 가상 디스크 만들기

* VM 설정
  - 저장소 > IDE(비어있음) > 광학 드라이브 > 마운트: 우분투 파일
  - 네트워크 > 어댑터 2 > 사용하기(체크) > 호스트 전용 어댑터

* VM 시작

### AWS
* 회원가입 및 카드정보 입력
* 우측 상단의 Region을 Seoul로 변경
* EC2 인스턴스 생성
* 인스턴스 우클릭 후 Connect 클릭하여 SSH 접속 방법 확인


## 우분투 설치
* 언어: English
* 키보드 detect: No, English (US, international with dead keys)
* 홈 디렉토리 암호화: No
* 파티션: Guided, 물리적인 하드디스크가 없으면 LVM은 필요하지 않고, 내부 서버면 암호화가 필요하지 않다.
* HTTP 프록시 정보: (blank)
* 자동 업데이트: 무관, 불필요


## 프로비저닝
[bootstrap.sh](https://github.com/s10n/vagrant-base/blob/master/bootstrap.sh) 참조


## 패키지 추가
```bash
sudo apt-get upgrade
sudo apt-get install -y openssh-server
sudo apt-get install -y samba
sudo apt-get install -y php5-fpm
sudo apt-get install -y php5-mysql
```


## VM 설정

### 네트워크 설정
```bash
sudo -s
vi /etc/network/interfaces
```
```
auto eth0
iface eth0 inet dhcp
```
부분을 복사·붙여넣기 후 `0`을 `1`로 변경한다.

```bash
ifup eth1
exit
sudo poweroff
```

* 이후부터 SSH로 접속할 수 있으므로 헤드리스 시작 가능

### 로컬호스트에서 호스트네임 설정

```bash
sudo vi /etc/hosts
```


## 버추얼박스 폴더 공유
참조: [https://help.ubuntu.com/community/VirtualBox/SharedFolders](https://help.ubuntu.com/community/VirtualBox/SharedFolders)

단, 이 방법으로 `virtualenv` 수행 시, 서로 다른 OS의 파일 시스템이 원인으로 추측되는 오류로 인해 수행이 불가능하다.

### 준비: Guest Additions
참조: [https://help.ubuntu.com/community/VirtualBox/GuestAdditions](https://help.ubuntu.com/community/VirtualBox/GuestAdditions)

가상머신(Ubuntu)에서 다음을 수행한다:

```bash
sudo apt-get install virtualbox-guest-additions-iso
sudo mkdir /media/iso
sudo mount -o loop /usr/share/virtualbox/VBoxGuestAdditions.iso /media/iso
cd /media/iso
sudo sh ./VBoxLinuxAdditions.run
cd ~ && sudo umount /media/iso && rmdir /media/iso
sudo reboot
```

### 공유 폴더 설정
1. 호스트에서 공유할 폴더를 생성
1. 버추얼박스에서 게스트 운영체제 부팅
1. 가상 머신 선택 후 설정 > 공유 폴더
1. 공유할 폴더 추가
1. 게스트에서 다음 명령어 입력

```bash
sudo usermod -aG vboxsf $(whoami)
sudo mount -t vboxsf -o uid=$UID,gid=$(id -g) vm ~/works/host
```
