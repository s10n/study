---
category: Git
title: 고급 명령어
---


## .gitignore

### 참고
[https://github.com/github/gitignore](https://github.com/github/gitignore)

### .gitignore 설정
```config
dir/         # dir 무시
**/dir2      # dir1/dir2/dir3일때, dir2이하를 무시
**/dir2/dir3 # 위와 같을때, dir3이하를 무시

*.a          # .a 파일들을 무시한다.
!lib.a       # 위에서 .a 파일들을 무시했지만 lib.a는 추적한다.
/TODO        # 루트의 TODO 파일만 무시하고, subdir/TODO는 무시하지 않는다.
build/       # build/ 경로의 모든 파일을 무시한다.
doc/*.txt    # doc/notes.txt를 무시하지만 doc/server/arch.txt는 무시하지 않는다.
```

### .gitignore 설정 후
.gitignore 설정 후에 항상 Tracking file이나 cache를 삭제해준다.

```bash
git rm -r --cached     # 현재 repository의 cache 삭제
git add .              # 다시 tracking
git commit -m "Updated .gitignore"
```

### Global .gitignore
```bash
git config --global core.excludesfile ~/.gitignore_global
```


## Git 서브모듈

### 새 서브모듈 추가하기
```bash
git submodule add https://github.com/akaiv/style.git style
git commit -m 'first commit with submodule akaiv-style'
```

### 서브모듈이 있는 프로젝트를 클론했을 때
```bash
git submodule init    # 서브모듈을 초기화한다.
git submodule update  # 서브모듈의 파일을 가져온다.
```

### 서브모듈 수동 삭제
```bash
rm -rf submodule_path
git rm --cached submodule_path
git rm .gitmodules
vi .git/config # 서브모듈 관련 라인 삭제
rm -rf .git/modules/submodule_path
```

### 서브모듈 자동 삭제
```bash
git submodule deinit submodule_path
git rm submodule_path
git commit
```

### 서브모듈 자동 삭제 (모든 서브모듈)
```bash
git submoduel deinit .
git rm submodule_path
git commit
```


## 히스토리 단장하기
참고: [http://git-scm.com/book/ko/Git-도구-히스토리-단장하기](http://git-scm.com/book/ko/Git-도구-히스토리-단장하기)

```bash
git rebase -i HEAD~3
```

커밋 작성자를 변경하려면:

```bash
git commit --amend --author="s10n <a@akaiv.com>"
```


## 내보내기
```bash
git archive --format zip --output ~/Downloads/project.zip develop
```


## 최적화
```bash
git gc                # 최적화. 즉, 모든 파일을 Packfile안에 넣는다.
git count-objects -v  # 용량 확인 (size-pack은 Packfile의 크기, KB단위)
```


## 원격 브랜치/태그 삭제
```bash
git push origin :branch_name   # 원격 서버의 브랜치 삭제
git push origin :tag_name      # 원격 서버의 태그 삭제
```


## Git 서버
```bash
mkdir my_project.git
cd my_project.git
git init --bare # --bare 옵션은 파일을 드러내지 않는다.
```

### 강제 푸쉬 막기
```bash
sudo git config --system receive.denyNonFastForwards true
```


## Re-normailizing a repository
참고: [https://help.github.com/articles/dealing-with-line-endings](https://help.github.com/articles/dealing-with-line-endings)

After you've set the `core.autocrlf` option and committed a `.gitattributes` file, you may find that git wants to commit files that you've not modified. This is because git wants to normalize the line endings for you. The best way to do this is wipe out your working tree (all the files except the .git directory) and then restore them. Make sure you've committed any work before you do this, or it will be lost.

```bash
git rm --cached -r .
git reset --hard
git add .
git commit -m "Normalize line endings"
```
