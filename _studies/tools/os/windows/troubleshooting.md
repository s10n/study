---
category: Windows
title: 문제 해결
---


## 아이콘 오류
* 작업관리자 실행
* explorer 종료
* `cmd`

  ```
  cd C:\Users\akaiv\AppData\Local
  attrib -H IconCache.db
  del IconCache.db
  ```

* explorer 재 실행


## 필요없는 파일
* `pagefile.sys`: 시스템 속성 - 고급 - 성능에서 가상 메모리 해제
* `hiberfil.sys`: 최대절전모드 끄기
  - 관리자 모드로 `cmd` 실행
  - `powercfg -h off`
* `System Volume Information`
  - 시스템 보호에서 시스템 보호를 해제하고 디스크 공간을 최소화
* 주기적으로 디스크정리 실행
  - 시스템파일과 다른 탭에서 '복원지점' 삭제까지 수행
* `AppData > Local > Temp` 삭제


## cmd를 폴더에서 바로 열기
```
Add_Cmd_UAC.reg
----------------------------------------------------------------
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\shell\runas]
@="여기에서 cmd 창 열기(&X)"
"HasLUAShield"=""

[HKEY_CLASSES_ROOT\Directory\shell\runas\command]
@="cmd.exe /s /k pushd \"%V\""

[HKEY_CLASSES_ROOT\Directory\Background\shell\runas]
@="여기에서 cmd 창 열기(&X)"
"HasLUAShield"=""

[HKEY_CLASSES_ROOT\Directory\Background\shell\runas\command]
@="cmd.exe /s /k pushd \"%V\""
```


## TEMP 경로 수정
* `D:\TEMP` 생성
* 시스템 > 고급 > 환경변수에서 `TEMP`와 `TMP`를 위 경로로 지정
  - 시스템 변수는 문제 발생할 수 있으므로 하지 않음
* 재부팅
* `%appdata%\Local`의 `Temp` 삭제
* `Ctrl`+`Shift`+`Alt`, 포토샵에서 `Ctrl+K`, 퍼포먼스 - 스크래치 디스크를 하드디스크로 변경
