---
category: Git
title: 기본 명령어
---


## Git 시작하기

### 저장소 복제
```bash
git clone https://github.com/akaiv/style.git style
```
https://github.com/akaiv/style.git을 style 디렉토리에 클론한다.

### 새 저장소 시작하기
```bash
git init
```
현재 디렉토리에 새 저장소를 만든다.


## Commit, Push and Pull

### 설명
* 원격저장소에 쓰기 권한이 있을때만 가능하다.
* 만약 여러명이 클론해왔고, 그 중 누군가가 이미 변경내용을 푸쉬했다면 나는 푸쉬할 수 없다.
* 내가 푸쉬하려면, 다른 사람의 작업내용을 가져와 머지한 다음에 가능하다.

### 규칙
* 푸쉬하기 전에 코드를 깨끗하게 정리한다.
* 필요한 경우 릴리즈 노트를 `README.md`에 작성한다.

### 첫 커밋 및 푸쉬
```bash
touch README.md
git add README.md
git commit -m 'first commit'
git push origin master
```

### 명령어
```bash
git status                      # 상태를 확인한다.

git add filename                # Staging Area에 파일을 올린다.
git add -r dir_added/

git rm filename_removed
git rm -r dir_removed/

git commit -m "comments"        # Staging Area의 스냅샷을 커밋한다.
git commit -a -m "comments"     # add, rm 하지 않아도, tracked files들을 자동으로 Staging Area 추가한다.

git push                        # origin의 현재 브랜치와 같은 이름의 브랜치에 푸쉬한다.
git push origin master          # origin 원격저장소의 master 브랜치에 커밋을 푸쉬한다.
git push origin branch1         # 내 로컬에만 있고 원격에 없는 branch1이라면, 정확히 이처럼 명령해야한다.
git push origin --dry-run       # 변경사항을 확인할 수 있다.

git pull origin branch1         # origin 원격저장소의 branch1 브랜치를 가져온다.
```

### 태그
* 커밋한 것이 의미있는 업데이트였다면, 태그를 붙인다.
* 로컬에서 태그를 달았을 경우에 기본적으로 태그는 푸쉬하지 않는다. 태그들은 수동으로 푸쉬하거나 풀해야한다.

```bash
git tag 1.0.0
git push --tags                 # 이 명령은 태그들만 푸쉬한다. 커밋 자체를 푸쉬하지 않는다.
git push origin branch1 --tags  # 태그와 함께 푸쉬
git push origin --tags

git pull --tags
git pull origin branch1 --tags  # 태그와 함께 풀
```


## Fetch, Merge

### 설명
```bash
git fetch                        # 로컬에 없으나 원격저장소에 있는 모든 데이터를 로컬로 가져온다.
git merge                        # fetch는 merge를 하지 않는다. merge는 수동으로 해야 한다.
git pull                         # fetch + merge
git pull remote1 branch1         # 원격저장소 remote1의 branch1를 가져온다.
```

### 명령어
```bash
git fetch
git fetch origin
git log -p HEAD..FETCH_HEAD      # fetch로 가져온 변경사항과 내 지금 HEAD를 비교한다.
git merge --no-ff origin/branch1 # fetch로 가져온 branch1에 있는 변경 내용을 현재 브랜치에 병합한다.
                                 # --no-ff로 히스토리를 명시한다.

git checkout -b brnach1 origin/branch1
git checkout -t origin           # local에 없었던 브랜치를 가져온다.

git fetch bob                    # 협업자 bob의 저장소를 가져온다.
git log -p master..bob/master    # 내 master와 bob의 master를 비교한다.
git merge bob/master             # bob의 master를 내 master에 merge한다.
```


## Branch

```bash
git branch feature_x          # 현재 브랜치를 유지하며 "feature_x"라는 이름의 새로운 브랜치 만든다.
git push origin branchname    # 새로 만든 브랜치를 원격 저장소로 전송한다. 이전까지는 다른 사람들이 접근할 수 없다.
```
```bash
git branch                    # 로컬저장소의 브랜치 목록을 본다.
git branch -r                 # 원격저장소의 브랜치 목록을 본다.
git branch -a                 # 모든 브랜치 목록을 본다.
git branch -d feature_x       # 브랜치를 삭제한다.
git branch -m branch1 branch2 # 존재하는 브랜치 branch1를 새로운 브랜치 branch2로 변경한다.
git branch -M branch1 branch2 # 위와 같으나 이미 있는 브랜치의 경우에도 에러 없이 덮어쓴다.
```


## Checkout

```bash
git checkout master           # master 브랜치로 돌아온다.
git checkout branch1          # 해당 브랜치로 작업트리를 변경한다.
git checkout tag1             # 해당 태그로 작업트리를 변경한다.
git checkout origin/branch1   # origin의 branch1로 갈아탄다. 이 때 detached HEAD 상태가 된다.
                              # 소스를 변경할 수 있지만 저장되지 않고, 다른 브랜치로 체크아웃시 사라지므로 잠시 확인하는 용도로만 사용한다.
git checkout -b feature_x     # "feature_x"라는 이름의 브랜치를 만들고 갈아탄다.
git checkout -b my_branch origin/branch1
                              # origin/branch를 track하는 my_branch를 만들고 체크아웃한다.
                              # 이후 my_branch 상태에서 git pull을 한다면, origin의 branch1로부터 fetch와 merge하는 셈이다.
                              # 즉 이때의 git pull은, 실제로는 git pull origin branch1과 같다.
git checkout -t origin/branch # 위와 같으나 브랜치이름을 원격과 같게 한다.
git checkout HEAD~1           # 1단계 이전 커밋으로 돌아간다.
git checkout HEAD~10          # 10단계 이전 커밋으로 돌아간다.
git checkout hashvalue        # 특정 커밋으로 돌아간다.
```


## Merge, Rebase

### 설명
* merge와 rebase는 결과물이 같으나, 어떤 commit을 parent로 두느냐가 다르다.
* merge로 합치면 양쪽 모두를 parent로 두고 바라본다.
* rebase로 합치면 목표 브랜치의 commit을 parent로 삼는다.
* [참고 링크](http://dogfeet.github.io/articles/2012/git-merge-rebase.html)

### 명령어
```bash
git merge branch1             # branch1의 브랜치를 현재 브랜치로 합친다. (태그는 유지한다.)
git merge --squash branch1    # branch1의 브랜치를 현재 브랜치로 합치고, 모든 커밋을 하나의 커밋으로 만든다. (태그는 유지되지 않는다.)
git rebase branch1            # branch1의 변경사항을 현재 브랜치에 적용한다.
git cherry-pick commit1       # commit1의 특정 커밋을 선택해 현재 브랜치의 커밋으로 만든다.
git cherry-pick -n commit1    # 작업트리에만 합치고, 커밋은 하지 않는다. (여러개의 커밋을 합치는 용도로 쓴다.)
```


## Stash

### 설명
예를들어, 소스를 수정하는 중이다. 아직 완성되지 않았는데, 다른 일이 생각나서 다른 작업을 한다. 이때, 완성되지 않은 소스를 '일단 커밋하는 방법'은 좋지않다. `stash`가 이럴때 유용하다. 브랜치를 생성해서 임시로 커밋하는 방법도 있지만, 아직 완성되지 않은 소스이므로 커밋하고 싶지 않으면 `stash`를 쓰도록 한다. commit까지 했다면, `git stash`로는 원래상태로 못돌아간다.

### 명령어
```bash
git stash                   # working directory의 unstaged files를 백업하고, working directory를 HEAD로 깨끗하게 만든다.
git stash list              # 백업한 stash 목록을 조회한다.
git stash show stash_name   # 특정 stash의 자세한 내용을 본다.
git stash pop               # 백업한 stash를 working directory에 적용하고 list에서 제거한다.
git stash apply             # 백업한 stash를 working directory에 적용하고 list에서 제거하지 않는다.
```


## Reset, Revert

### 설명
* `reset`과 `revert`는 둘 다 '되돌리기(복원)'을 위한 명령어이다.
* `reset`은 커밋을 취소한다.
* `reset`은 해당 커밋의 상태로 되돌리는 명령이다.
  - `reset` 뒤에 커밋 아이디를 지정하면 해당 커밋이 취소되는 것이 아니라, 해당 커밋 이후의 변경점이 취소되는 것이다.
  - 로컬에서 작업할때 사용한다. 원격저장소에 push할때 쓰지 않는다.
* `revert`는 '이 커밋을 취소한다'라는 새로운 커밋을 추가한다.
* `revert`는 선택한 커밋이 취소되는 것이 아니라, "해당 커밋을 취소하는 커밋"이 추가되는 것이다.
  - 원격저장소에 push할때는 이것을 쓴다.

```bash
reset         # 스테이징이나 커밋을 취소할 때 사용됨, 커밋되지 않음.
revert        # 이미 commit된 상태를 특정한 시점으로 복원한다. 복원된 내용을 새로운 커밋으로 발행함
checkout      # 브랜치를 변경하고, 특정 브랜치의 내용으로 현재 브랜치의 파일을 변경함
```

### 명령어
```bash
git reset --hard HEAD           # 마지막 commit 이후의 작업내용을 모두 삭제한다.
git reset --hard HEAD^1         # 가장 최근의 commit을 삭제한다.
git reset --soft HEAD^1         # 가장 최근의 commit을 삭제하지만, 수정 사항은 staged 상태로 놔둔다.
git reset --hard origin/master  # 로컬에 있는 모든 변경 내용과 확정본을 포기한다.

git clean -xdf                  # reset hard로 되돌려도 남아있는 untracked file을 지운다
# -x: untracked file
# -d: untracked directory
# -f: config의 clean.requireForce가 true로 되어 있어도 git celan을 강제로 사용
```

### 옵션
```bash
--soft        # staging area 보존, working directory 보존 (모두 보존)
--mixed       # staging area 취소, working directory 보존 (기본 옵션)
--hard        # staging area 취소, working directory 취소 (모두 취소)
```

`--amend` 옵션으로 마지막 커밋을 다시 작성할 수도 있다.

```bash
git commit --amend
```

### Staging Area에 추가한 사실만 되돌리기
```bash
git reset HEAD <file>
```
예를 들어 파일을 두 개 수정했는데 따로따로 커밋하려고 했지만, 실수로 `git add *` 라고 실행해 버렸다. 두 파일 모두 Staging Area에 들어 있다. 이제 둘 중 하나를 어떻게 꺼낼까?

```bash
git add . # 실수로 모두 add한다.
git status

# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       modified:   README.txt
#       modified:   benchmarks.rb
#

git reset HEAD benchmarks.rb # HEAD에서 benchmarks.rb를 reset한다.
git status

# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       modified:   README.txt
#
# Changed but not updated:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   benchmarks.rb
#
```

### 파일 자체를 되돌리기
```bash
git checkout -- benchmarks.rb
```
* 별로 좋지 않다. 수정내용이 모두 사라지므로, 정말 맘에 안들때만 사용한다.
* 별로 좋지 않은 이유: 커밋한 것은 되돌릴 수 있지만, 커밋하지 않은건 되돌릴 수 없기 때문.
* 차라리 Stash, Branch를 이용하라

```bash
git revert commit1          # 기존의 커밋에서 변경한 내용을 취소하는 새로운 커밋을 만든다.
git revert -n commit1       # 바로 커밋하지 않는다. revert를 여러번한 다음에 커밋할 수 있다.
git reset commit1           # 이전 커밋을 수정한다.
git reset HEAD^             # 최근 1개의 커밋을 취소한다.

git rebase -i 커밋범위        # 커밋 순서 변경 및 합치는 등의 작업을 할 수 있다.
```


## Tag

### 설명
* 태그는 단지 commit에 대한 포인터일 뿐이다.
* 태그는 변경이 안된다. 수정하려면 태그를 지우고 다시 생성해야 한다.

### 명령어
```bash
git tag                            # 태그 목록을 본다.
git tag -l 'v1.4.2.*'              # 해당 패턴을 포함한 태그만 표시한다.
git show <tag>                     # 해당 태그의 주석과 정보를 표시한다.

git tag 1.0.0                      # 현재 커밋에 태그를 붙인다.
git tag 1.0.0 1b2e1d63ff           # git log를 통해 알아낸 식별자로, 과거의 커밋에 태그를 붙인다.
git tag 1.0.0 branch1              # branch1의 현재시점에 1.0.0을 태그한다.
git tag -a <tag>                   # HEAD에 태그를 설정한다.
git tag -a <tag> -m <tag comments> # HEAD에 태그를 설정하고, 주석까지 함께 설정한다. 태그에 여러가지 정보를 저장한다.

git push origin v1.0.0             # 브랜치 공유와 비슷한 방법이다.
git push origin --tags             # git push는 원격서버에 태그를 푸쉬하지 않는다.

git tag -d <tag>                   # 태그를 삭제한다.
```


## Log

### 명령어
```bash
git log
git log -p                 # 각 커밋의 diff를 본다.
git log -p -2              # 최근 두 커밋의 diff를 본다.

git log --stat             # 통계정보를 본다. 어떤파일이 수정됐는지 본다.
git log --pretty=oneline
git log --pretty=format:"[ %h %an : '%s'  # %ar ]"
git log --pretty=format:"%h - %an, %ar : %s"
git log --pretty=format:"%h %s" --graph

git log commit1            # 해당 커밋명까지의 로그를 본다.
git log commit1..commit2   # commit1부터 commit2까지의 로그를 본다.
git log HEAD^              # 최신 커밋의 바로 이전 커밋을 본다. HEAD^^^처럼 쓸 수도 있다.
git log HEAD~3             # HEAD의 3개 이전의 커밋을 본다.
```
```bash
git log filename            # 해당 파일이 변경된 커밋만 조회
git log --author="name"     # 해당 저자의 커밋만 조회
git log --all --grep="word" # 해당 단어가 커밋 메시지에 포함된 커밋만 조회
```

### 옵션들
```bash
-p                # diff도 같이 보여준다
--since="5 hours"
--before="5 hours"
--stat            # 각 커밋에서 수정된 파일의 통계정보를 보여준다.
--shortstat       # '--stat' 명령의 결과 중에서 수정한 파일, 추가된 줄, 삭제된 줄만 보여준다.
--name-only       # 커밋 정보중에서 수정된 파일의 목록만 보여준다.
--name-status     # 수정된 파일의 목록을 보여줄 뿐만 아니라 추가/수정/삭제 여부도 보여준다.
--abbrev-commit   # 40자 짜리 SHA-1 체크섬을 전부 보여주는 것이 아니라 처음 몇 자만 보여준다.
--relative-date   # 정확한 시간을 보여주는 것이 아니라 `2 주전`처럼 상대적인 형식으로 보여준다.
--graph           # 브랜치와 머지 히스토리 정보까지 아스키 그래프로 보여준다.
--pretty          # 지정한 형식으로 보여준다.
                  # 이 옵션에는 oneline, short, full, fuller, format이 있다.
                  # format은 원하는 형식으로 출력하고자 할 때 사용한다.
```
```bash
%H  # Commit hash
%h  # Abbreviated commit hash
%T  # Tree hash
%t  # Abbreviated tree hash
%P  # Parent hashes
%p  # Abbreviated parent hashes
%an # Author name
%ae # Author e-mail
%ad # Author date (format respects the –date= option)
%ar # Author date, relative
%cn # Committer name
%ce # Committer email
%cd # Committer date
%cr # Committer date, relative
%s  # Subject
```


## Diff
```bash
git diff                         # 수정했으나 staged되지 않은것의 차이를 보여준다.
                                 # 작업내용을 staged area에 넣었으면 아무것도 출력하지 않는다.
git diff --staged                # 스테이징영역과 저장소의 차이점을 본다.
git diff HEAD                    # 저장소, 스테이징영역, 작업트리의 모든 차이점을 본다.
git diff --stat                  # 변경사항 통계를 본다.
git diff bd976f4 59d60f9 my-file
```


## Remote
```bash
git remote                        # 추가한 원격저장소의 목록을 확인한다. (이름만)
git remote -v                     # 추가한 원격저장소의 목록을 확인한다. (이름과 주소)
git remote add remote1 address1   # 새 원격 저장소를 추가한다.
git remote show remote1           # 해당 원격저장소의 정보를 본다.
git remote rm remote1             # remote1라는 이름의 원격 저장소를 제거한다.
git remote rename remote1 remote2 # remote1 원격저장소를 remote2라는 이름으로 변경한다.
```


## File management
```bash
git rm filename             # filename을 Staging Area에서 지우고 실제로도 지운다.
git mv filename new_file    # 다음 세가지를 자동으로 수핸한다: mv filenam new_file && git rm filename && git add new_file
git checkout -- filename    # 아직 스테이징이나 커밋을 하지 않은 filename의 변경내용을 취소하고 이전 커밋상태로 되돌린다.
```


## Blame
```bash
git blame filename          # 커밋명과 커밋한 사람등의 정보를 본다.
git blame -L 10,15 filename # 10줄부터 15줄로 범위를 지정해서 볼수 있고, 15대신 +5와 같이 사용 가능하다.
```
