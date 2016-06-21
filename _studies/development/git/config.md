---
category: Git
title: 설정하기
---


## 설치하기
참조: [소스코드로 설치하기](https://git-scm.com/book/ko/v2/시작하기-Git-설치#소스코드로-설치하기)


## 설정 파일 위치
```bash
vi ~/.gitconfig
```


## 기본 설정
참조: [https://bitbucket.org/s10n/.dotfiles/src](https://bitbucket.org/s10n/.dotfiles/src)


## 자동완성
```bash
git clone https://github.com/git/git.git
cp git/contrib/completion/git-completion.bash ~
cd ~
mv git-completion.bash .git-completion.sh
vi .bashrc # 추가: source ~/.git-completion.sh
source .bashrc
```

### 모든 사용자가 사용할 수 있게 설정하기
* 리눅스: 이 스크립트를 `/etc/bash_completion.d/`에 복사한다.
* 맥: 이 스크립트를 `/opt/local/etc/bash_completion.d` 디렉토리에 복사한다.
  - 이 디렉토리는 Bash가 자동완성을 지원하기 위해 사용하는 디렉토리다.


## Git의 커밋 메시지를 Sublime에서 작성하기
```bash
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
git config --global core.editor "subl -n -w"
```


## GPG 서명
```bash
gpg --list-secret-keys                       # GPG key 목록 조회
gpg --gen-key                                # GPG key 생성
git config --global user.signingkey A8F99211 # 퍼블릭 키를 설정
git config --global commit.gpgsign true      # 커밋마다 서명하도록 설정
gpg --armor --export A8F99211                # GPG key를 복사해서 깃헙 계정에 추가
git log --pretty="format:%h %G? %aN %s"      # %G? 포맷을 통해 서명 정보 확인
```

GPG key를 생성할 때 [이 링크](https://help.github.com/articles/generating-a-new-gpg-key/)를 참조하라.

## GPG 복사
```bash
gpg --export-secret-keys -a A8F99211 > private_key.asc
gpg --export -a A8F99211 > public_key.asc
```
```bash
gpg --import private_key.asc
gpg --import public_key.asc
gpg --edit-key foo@bar.com
> trust
> 5 = I trust ultimately
> quit
```
