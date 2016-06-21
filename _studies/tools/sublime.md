---
category: Tool
title: Sublime Text
---


## 드롭박스 설정 동기화
참고 [https://sublime.wbond.net/docs/syncing](https://sublime.wbond.net/docs/syncing)


## Find in folder 기능에서 특정 경로를 제외하는 방법
```
/Users/s10n/path,-*/node_modules/*
```


## 서브라임 텍스트 단축키 (Mac)

### 셀렉션
* 스코프로 선택 확장 `Cmd + Shift + Space`
* 괄호로 선택 확장 `Ctrl + Shift + M`
* 줄로 선택 나누기 `Cmd + Shift + L`
* 두 줄 합치기 `Cmd + J`

### 붙여넣기
* 붙여넣고 들여쓰기 `Cmd + Shift + V`
* 히스토리로부터 붙여넣기 `Cmd + Alt + V`

### 브래킷
* 매칭 브래킷으로 바로 가기 `Ctrl + M`
* 같은 들여쓰기 선택 `Cmd + Shift + J`
* 같은 태그 선택 `Cmd + Shift + A`

### 폴딩
* 코드 접기 `Cmd + Shift + [ or ]`
* 들여쓰기 2단계까지 접기 `Cmd + K, 2`
* 태그 속성 접기 `Cmd + K, T`
* 모두 펴기 `Cmd + K, 0`

### 북마크
* 북마크 설정 `Cmd + F2`
* 다음 북마크로 이동 `F2`
* 모든 북마크 해제 `Cmd + Shift + F2`

### 기능
* 정렬 `F5`
* 맞춤법 검사 켜기/끄기 `F6`
* 블록 주석 `Cmd + Alt + /`
* 스크롤 `Ctrl + Alt + Up/Down`
* 가운데로 스크롤 `Ctrl + L`
* 사이드바에 포커스 `Ctrl + 0`
* Pane 나누고 현재 파일을 새 pane으로 이동 `Cmd + K, Up`


## 서브라임 텍스트 단축키 (Windows)
```
Shift + 우클릭          // 네모 선택
Shift + Alt + 우클릭    // 네모 빼기
```


## 서브라임 및 콘솔에서 나눔고딕코딩 보기 (Windows)
* `cmd` - `regedit`
* `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\FontLink\SystemLink`
* 다중 문자열 값 생성

  ```
  나눔고딕코딩.ttf,나눔고딕코딩
  malgun.ttf,Malgun Gothic (혹은 NanumBarunGothic.ttf,NanumBarunGothic)
  gulim.ttc,gulim
  MSGOTHIC.TTC,MS UI Gothic
  SimSun.TTC,SimSun
  mingliu.ttc,PMingLiU
  ```

* "Consolas" 입력
* 재시작
