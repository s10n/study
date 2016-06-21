---
title: Sublime Text에서 ESLint 및 jscs
category: Convention
---


## 목표
이 문서에서는 다음 두 가지 목표를 이루려고 합니다.

1. 자바스크립트 오류 검사: `eslint`
2. 자바스크립트 컨벤션 검사: `jscs`


## 개요
기본적으로 위 두가지는 Grunt를 통해서 이루어집니다.

* `grunt watch` 상태로 작업하면, 자바스크립트 파일이 변경될 때마다 `eslint`, `jscs`를 순서대로 수행한 후 자바스크립트를 빌드합니다.
* 다만, 매번 터미널에서 오류 내역을 확인하는 것은 매우 성가시므로, 서브라임 텍스트 사용자에 한해 편집기에서 실시간으로 `eslint`및 `jscs` 오류 표시가 이루어지도록 하고자 합니다.
* 단지 오류를 표시하는 플러그인을 설치하는 것이므로, 다른 편집기를 사용하더라도 비슷한 환경 구성이 가능할 것이라고 추측합니다.


## 준비
로컬에 `eslint`와 `jscs`를 미리 설치해야합니다.

```bash
npm install -g eslint
npm install -g jscs
```


## SublimeLinter 설치
서브라임텍스트에서 실시간으로 코드를 검사하는 것은 [SublimeLinter](http://www.sublimelinter.com/)를 이용합니다.

(참고: 2016년 기준 [패키지 컨트롤](https://packagecontrol.io/browse/popular) 설치 횟수 3위인 플러그인입니다.)

1. 서브라임텍스트를 열고 `cmd + shift + p`
1. Package Control: Install Package
1. SublimeLinter 설치
1. SublimeLinter-contrib-eslint 설치
1. SublimeLinter-contrib-jscs 설치
- 여기서 `Tools > SublimeLinter`를 통해 여러가지 설정을 바꿀 수도 있습니다.
1. 완료. 이제 오류가 있는 코드는 빨간색/노란색 테두리가 그려지며, 해당 행에 포커스된 상태에서는 하단 상태표시줄에 어떤 오류가 있는지 표시합니다.


> 참조
>
> [https://github.com/roadhump/SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)

> 참조
>
> [https://github.com/SublimeLinter/SublimeLinter-jscs](https://github.com/SublimeLinter/SublimeLinter-jscs)


## 더 알아보기
* 프로젝트 경로에 `.eslintrc`, `.jscsrc` 파일이 필요합니다.
* 이 플러그인들은 표시만 할 뿐, 빌드는 여전히 `grunt`를 통해서 수행합니다.
* `cmd + ctrl + t`를 이용해 Linter를 enable/disable할 수 있습니다.
* 자주 사용하는 `/* eslint-disable no-console */`을 매크로로 만들어두는 것은 꽤 도움이 됩니다.
* 만약 특정 경로의 파일들은 오류 표시가 불필요하다면, 아래 내용으로 `.sublimelinterrc`를 작성합니다.
  - 단, 이 파일은 `~/.gitignore_global`에 포함해야합니다.

  ```json
  {
      "linters": {
          "eslint": {
              "excludes": [
                  "**/_scripts/dist/**"
              ]
          },
          "jscs": {
              "excludes": [
                  "**/_scripts/dist/**"
              ]
          }
      }
  }
  ```
