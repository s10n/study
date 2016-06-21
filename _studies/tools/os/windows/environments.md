---
category: Windows
title: 개발 환경
---


## WAMP

### 설치 순서
* [http://www.wampserver.com/en](http://www.wampserver.com/en/) 접속 및 다운로드
* 워드프레스 다운로드 및 압축해제 (혹은 git 클론)
* MySQL 암호 만들기

  ```
  cmd
  cd C:\wamp\bin\mysql\mysql5.6.12\bin
  mysql -u root mysql
  SET PASSWORD FOR root@localhost=PASSWORD('************');
  exit
  ```

* phpmyadmin에서 DB 만들기
* 여러 워드프레스 프로젝트 작업 하기
  - WAMP 트레이아이콘 > Apache > Apache modules > rewrite_module
  - WAMP 서버 재시작


## Putty

### 기본 설정
* Windows - scrollback : 727379968
* Windows - Appearance - Font : Consolas, 12pt
* Windows - Appearance - Translation : UTF-8

### SSH Key
* puttygen으로 Key생성
* 프라이빗 Key는 저장
* 퍼블릭 Key를 복사해서 `.ssh/authorized_keys`에 붙여넣기 (폴더 700, auth_keys 600)
* Putty에서 Load하고 Connection > Data에 아이디, SSH > Auth에 프라이빗 Key 불러오고 저장


## Git Extension

### 설치하기
* Git 그래픽 도구
  - git extensions를 설치한다.
  - 설정에서 `Home`의 위치를 `wamp\www` 등으로 변경

* Git 콘솔 도구
  - msysgit을 설치하고, git bash의 시작 위치 변경 및 관리자 권한 설정.
  - ```C:\Program Files (x86)\Git\etc\profile```을 관리자 권한으로 편집하여. User's home directory의 모든 조건문을 없애고 ```HOME=C:/wamp/www```로 변경한다.
  - 이 방법을 통해 git extensions와 gitconfig을 일치시킬 수 있다.

* Git 콘솔 도구 커스터마이징
  - `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont`
  - 위 레지스트리에서 949를 ```*나눔고딕코딩```으로 입력.
  - 현재 git log의 commiter가 나오지 않는 문제도 있음: gitconfig에서 로그 포맷 (yellow)대신 (bold) 사용

### 오류 해결
* `git-credential-winstore.exe\" get: -c: line 0: syntax error near unexpected token '('`
  - 해결방법: `.gitconfig`의 `\\\`를 `\`로 변경


## 버추얼 박스

### 설치 순서
* 버추얼 박스 및 확장 설치
* 가상머신 만들기

  항목 | 설정
  ---- | ----
  메모리 | 1GB (칩셋: ICH9, 확장: I/O, UTC)
  프로세서 | CPU 1개 (실행제한 100%, 확장 해제)
  가속 | 모두 체크
  디스플레이 | 비디오 12MB, 모니터 1, 확장 해제
  원격 및 비디오 | 해제
  저장소 | SATA (SSD해제) 4GB혹은8GB, 동적 확장 저장소 일반VMDK
  오디오 | 사용 (무관)
  네트워크어댑터 | NAT + 호스트전용
  직렬 | 해제
  USB | 사용 (EHCI 해제)

* 데비안 설치 파일 다운
  - [i386](http://ftp.nl.debian.org/debian/dists/wheezy/main/installer-i386/current/images/netboot/)
  - [md64](http://ftp.nl.debian.org/debian/dists/wheezy/main/installer-amd64/current/images/netboot/)
  - `mini.iso`
* 가상머신 켜고 데비안 마운트
* 데비안 설치

### 설정

* Virtual 호스트 이름 등록
  - `c:\Windows\System32\drivers\etc\` 디렉토리의 `hosts` 파일을 관리자 권한으로 열고 편집

* SSH 연결 오류시 해결방법
  - NAT (인터넷 연결 가능, 호스트 접속 불가) + 호스트전용어댑터 (인터넷 연결 불가, 호스트 접속 가능)

  ```bash
  sudo vi /etc/network/interfaces
  auto eth0
  iface eth0 inet dhcp
  auto eth1
  iface eth1 inet dhcp
  sudo service networking restart
  ```


## 윈도우 및 인터넷 익스플로러 8 설치
* 원문: [https://medium.com/korean-medium-post/d54e557a4f08](https://medium.com/korean-medium-post/d54e557a4f08)
* User Name: IEUser / Password: Passw0rd!

### 준비하기
* [https://www.modern.ie/en-us/virtualization-tools#downloads](https://www.modern.ie/en-us/virtualization-tools#downloads) 방문하여, IE8-Win7 조합으로 모두 다운로드
* exe를 실행하고 VM 폴더 안에 압축 풀기 (ova파일 생성됨)

### 버추얼 박스
* 버추얼 박스에서 해당 VM 가져오기
* 램 1024MB, 비디오 128MB 설정
* 실행하기 전에 스냅샷

### VM 시작
* Windows Update
  - IE9-11 마우스 우클릭하여 Hide
  - 한국어 언어팩 설치
  - 업데이트 및 재시작
* Control Panel(제어판)의 Region and Language에서 한국어 설정
* 작업표시줄 설정
* 보안 프로그램 설치 (AVG등)

### IE 설정
* 팝업차단 끄기
* 시작페이지 변경

### 문제해결
* 자동 액티베이션 안되면 `slmgr /ato`
* 인터넷 안되면 NAT 사용

### 연장
* `slmgr /ato` 90일을 얻을 수 있음 (admin CMD)
* `slmgr /rearm` 기간 연장 가능 (몇 회 가능, 더이상 안되면, 스냅샷 새로 시작)
