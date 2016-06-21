---
category: Vagrant
title: 스냅샷
reference:
  title: Snapshot
  url: https://www.vagrantup.com/docs/cli/snapshot.html
---


## 개요
스냅샷 기능은 머신의 특정한 상태를 기록했다가 다시 복구할 수 있게 한다. 이로인해 무언가를 시도했다가 빠르게 되돌아올 수 있게 된다.


## PUSH
```bash
vagrant snapshot push
```

스냅샷 스택에 스냅샷을 만든다.

이는 이름을 명시할 필요가 없을 때 `vagrant snapshot save`의 shorthand이다. `vagrant snapshot pop`로 돌아온다.

주의: `push`와 `pop`을 이용할 때에는 `save`와 `restore`를 섞어쓰면 안전하지 않다.


## POP
```bash
vagrant snapshot pop
```

푸시한 상태를 복구한다.

### 옵션
* `--[no-]provision`: 프로비저너를 실행하거나 실행하지 않는다.
* `--no-delete`: 복구 후 스냅샷을 삭제하지 않는다.


## SAVE
```bash
vagrant snapshot save NAME
```

이름이 있는 스냅샷을 저장한다.


## RESTORE
```bash
vagrant snapshot restore NAME
```

이름이 있는 스냅샷을 복구한다.

### 옵션
* `--[no-]provision`: 프로비저너를 실행하거나 실행하지 않는다.


## LIST
```bash
vagrant snapshot list
```

스냅샷 목록을 본다.


## DELETE
```bash
vagrant snapshot delete NAME
```

이름이 있는 스냅샷을 지운다.
