---
category: Mac OS
title: 설정하기
---


## 스크린캡쳐 그림자 제거 및 경로 변경
```bash
defaults write com.apple.screencapture disable-shadow -bool true; killall SystemUIServer
defaults write com.apple.screencapture location ~/Downloads; killall SystemUIServer
```


## 파일 저장 상자를 언제나 확장 상태로 열기
```bash
defaults write -g NSNavPanelExpandedStateForSaveMode -boolean true
```


## 호스트 변경
```bash
sudo vi /etc/hosts      # 127.0.0.1에 domain.com을 추가
dscacheutil -flushcache # 내 로컬의 DNS를 다시 읽음 (즉, 호스트를 갱신)
```


## 맥 인터넷 속도 향상시키기
```bash
networksetup -setv6off "Wi-Fi"
networksetup -setv6off "Thunderbolt Ethernet"
```


## 파인더에서 폴더 이름 한글화
* 터미널에서 root 활성화하고 root로 로그인

  ```bash
  dsenableroot
  su
  ```

* 내용 입력
  - 파인더에서 `/System/Library/CoreServices/SystemFolderLocalizations/ko.lproj`
  - `SystemFolderLocalizations.strings` 파일을 TextWrangler로 열기
  - 원하는 key와 string 추가 후 저장

* 다시 원래 계정으로 로그인하고 터미널에서 root를 비활성화

  ```bash
  exit
  dsenableroot -d
  ```

* 터미널에서 해당 폴더안에 .localized 파일을 하나 만든다.

  ```bash
  touch .localized
  ```


## bash_profile

### 색상표
```bash
0;30 # Black
1;30 # Dark Gray
0;31 # Red
1;31 # Dark Red
0;32 # Green
1;32 # Dark Green
0;33 # Brown
1;33 # Yellow
0;34 # Blue
1;34 # Dark Blue
0;35 # Magenta
1;35 # Dark Magenta
```

### 색상표 (LSCOLORS)
`export LSCOLORS=exfxcxdxbxegedabagacad` (기본값)

```bash
# 1. directory
# 2. symbolic link
# 3. socket
# 4. pipe
# 5. executable
# 6. block special
# 7. character special
# 8. executable with setuid bit set
# 9. executable with setgid bit set
# 10. directory writable to others, with sticky bit
# 11. directory writable to others, without sticky bit

a     # black
b     # red
c     # green
d     # brown
e     # blue
f     # magenta
g     # cyan
h     # light grey
A     # bold black, usually shows up as dark grey
B     # bold red
C     # bold green
D     # bold brown, usually shows up as yellow
E     # bold blue
F     # bold magenta
G     # bold cyan
H     # bold light grey
x     # bdefault foreground or background
```
