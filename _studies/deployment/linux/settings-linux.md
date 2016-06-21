---
category: Linux
title: 설정하기 (리눅스)
---


## 필수 설정

### 비밀번호 입력 없이 `sudo` 사용하기
```bash
sudo visudo -f /etc/sudoers.d/simcheolhwan
```
```
simcheolhwan ALL=(ALL) NOPASSWD:ALL
```

### SSH
```bash
ssh-keygen
touch ~/.ssh/authorized_keys
chmod 644 ~/.ssh/authorized_keys
```

### SSH Key를 서버에 접속하지 않고 서버로 복사
단, 아래의 방법은 서버에 `~/.ssh` 디렉토리가 이미 있을 때에만 동작함

```bash
cat ~/.ssh/id_rsa.pub | ssh user@hostname 'cat >> .ssh/authorized_keys'
```


## 추가 설정

### 사용자 그룹
* a ↔ www-data
* a → sudo

### vim의 주석 색상 변경
```bash
vi ~/.vimrc
```
`highlight Comment term=bold cterm=bold ctermfg=4`

### vim의 탭 사이즈 변경
```bash
vi ~/.vimrc
```
```config
" size of a hard tabstop
set tabstop=4

" size of an "indent"
set shiftwidth=4

" a combination of spaces and tabs are used to simulate tab stops at a width
" other than the (hard)tabstop
set softtabstop=4

" make "tab" insert indents instead of tabs at the beginning of a line
set smarttab

" always uses spaces instead of tab characters
set expandtab
```

### 폴더 색상 변경 (Debian)
```bash
echo $LS_COLORS # 전체를 선택 복사
vi ~/.bashrc
LS_COLORS='di=01;33'
export LS_COLORS
```

### 폴더 색상 변경 (CentOS)
```bash
cp /etc/DIR_COLORS /etc/DIR_COLORS.default
sed -i 's/DIR 00;34/DIR 00;36/g' /etc/DIR_COLORS
diff /etc/DIR_COLORS.default /etc/DIR_COLORS
```
혹은 해당 파일을 편집하고 DIR을 찾아 색상을 바꿔준다

```bash
01;33 # 노란색
01;32 # 연두색
00;36 # 청록색

30 40 # black
31 41 # red
32 42 # green
33 43 # yellow
34 44 # blue
35 45 # magenta
36 46 # sky
37 47 # white
```
