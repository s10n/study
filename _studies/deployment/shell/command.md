---
category: Shell
title: 명령어
---


## 파일 및 디렉토리

### 삭제
```bash
rm file    # file 삭제
rm -r dir  # dir 삭제
rm -rf dir # dir 강제 삭제
```

### 복사
```bash
cp file1 file2    # 복사할파일 복사될파일 (-a: 권한 유지 옵션)
cp file1 dir/file # 복사할파일 복사될경로
scp -r user@server:dir1/file dir2 # 해당 경로의 파일을 dir2로 복사 (-p:퍼미션 보존)
ln -s dir name    # 경로에 대한 바로가기 만들기
```

### 이동
`mv`는 rename과 move를 동시에 수행한다.

```bash
rename file1 file2 # 변경할파일 변경될파일
mv file dir/file   # 이동할파일 이동될경로
```

### 디렉토리 생성 및 삭제
```bash
mkdir dir # dir 디렉토리 생성
rmdir dir # dir 디렉토리 삭제 (단, 디렉토리 안에 파일이 없는 경우에만 삭제 가능)
```

### 목록
```bash
ls     # 파일정보 확인
ls -al # 모두 보기
```

### 찾기
```bash
sudo find directory_name -type f -name '\.DS_Store' -print -delete
```

### 문자열 치환
```bash
sed -i 's/WORD/NEW_WORD/g' filename.sql
```

### 권한
```bash
chmod 644 file          # 권한 변경
chmod 755 dir -R        # 디렉토리 하위의 폴더 및 파일까지 전부 변경
chmod g+w dir -R
chown user:group file   # 소유권 변경
chown user:group dir -R
```

### 절대경로 위치
```bash
pwd # 현재 경로의 절대경로 위치
```

### 압축
```bash
tar cvzfp file.tgz dir  # dir 전체를 file.tgz 파일로 퍼미션 보존 압축
tar xvzfp file.tgz      # file.tgz 파일을 압축해제
# c:생성 / x:압축해제 / v:자세히 / z:압축 / p:권한 보존
unzip file.zip
```

### 용량
```bash
du -sh # 용량을 Mbyte 단위로 출력
df -h  # 서버의 각 디렉토리 사용량을 Mbyte단위로 확인
du dir # 디렉토리 내 모든 파일의 용량 표시
# -s: 요약 / -h: human_readable 단위
# ~[username]
```

### 감시
```bash
tail -f error.log              # 마지막 10줄을 출력하고, 파일을 감시한다. 새 줄들이 추가될 때 실시간으로 업데이트한다.
tail /var/log/nginx/error.log  # NGINX 에러 로그 위치
```


## 사용자

### 접속
```bash
ssh user@server # SSH 접속
su username     # 서브 쉘 생성
sudo su         # Root 계정
sudo su -       # Root 계정, /root 디렉토리로 이동
sudo -s         # Root 계정, $HOME 디렉토리를 유지하고, root가 아닌 기존의 config 파일들을 사용한다.
```

### 사용자 관리
```bash
adduser username
sudo adduser username group # 사용자를 그룹에 추가하기
groups                      # 사용자가 속한 그룹 보기
userdel                     # 사용자 삭제 (CentOS)
passwd username             # 패스워드 변경
who                         # 현재 접속중인 사용자 보기
sudo usermod -G group <username> # CentOS에서 그룹에 계정 추가
sudo usermod -aG sudo <username> # 우분투에서 sudo에 계정 추가
```


## 네트워크

### 포트 변경하기
포트 80으로 접근하면 8080으로 보내기:

```bash
sudo ipfw add 100 fwd 127.0.0.1,8080 tcp from any to any 80 in
```

해제:

```bash
sudo ipfw delete 100
```


## 시스템

### 시스템 확인
```bash
cat /etc/issue             # 리눅스 버전 확인
getconf WORD_BIT           # 운영체제 커널 비트
cat /proc/cpuinfo, meminfo # CPU 및 메모리 정보 확인
uname -a
```

### 시스템 재시작 및 종료
```bash
sudo reboot
sudo shutdown -hP now
```

### 실행
```bash
sudo service nginx restart # 엔진엑스 재시작
aptitude                   # 패키지 관리자
```

### 기타
```bash
clear               # 화면 지우기
vi ~/.bash_history  # 히스토리 확인
whois domain.com    # 도메인의 정보 확인
ping domain.com     # 도메인의 상태 확인
```


## tmux

### Basic
* 시작: `tmux`
* 세션 만들고 시작: `tmux new -s session-name`
* 세션 목록: `tmux ls`
* 세션 죽이기: `tmux kill-session -t session-name`
* 어태치: `tmux a` 혹은 `tmux a #` 혹은 `tmux a -t session-name`

### Basic (tmux)
* 명령 시작: `Ctrl + B`
* 세션 만들기: `:new`
* 세션 이름 변경: `$`
* 세션 목록: `S`
* 디태치: `D`

### Windows
* `C`: 창 만들기
* `,`: 창 이름 변경
* `w`: 창 목록
* `&`: 창 죽이기
* `N`/`P`: 다음/이전 창으로 이동
* `0`, `1`, `2`, ...: 해당 창으로 이동

### Panes
* `%`: 오른쪽에 생성
* `"`: 아래쪽에 생성
* `O`, `화살표 키`: 이동
* `Q`: 숫자 확인 및 이동
* `X`: 죽이기
* `space`: 레이아웃 토글
* `Ctrl + B` 누른채 `화살표 키`: 크기 변경
* `[`, `Up` 혹은 `PgUp`: 스크롤, `q`로 스크롤 종료
