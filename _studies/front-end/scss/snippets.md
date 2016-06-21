---
category: SCSS
title: 스니핏
---



## 자주 쓰지 않지만 유용한 속성
```scss
outline: 0;
cursor: pointer;
```
```scss
user-select: none;
pointer-events: none;
hyphens: auto;              // word-wrap: break-word;와 함께 쓴다.
touch-action: manipulation; // 300ms의 클릭 딜레이 제거
```
```scss
flex: 1;
column-count: 3;
```


## 텍스트의 공백 및 줄바꿈
```scss
white-space: normal;     // 연속 공백을 하나의 공백으로 콜랩스한다.
white-space: nowrap;     // 연속 공백을 하나의 공백으로 콜랩스한다. <br> 태그를 만날 때 까지 줄바꿈하지 않는다.
white-space: pre;        // 모든 공백을 보존한다. <pre> 태그처럼 동작한다. line break에서만 줄바꿈한다.
white-space: pre-wrap;   // 모든 공백을 보존한다. 필요할 때 줄바꿈한다.
white-space: pre-line;   // 연속 공백을 하나의 공백으로 콜랩스한다. 필요할 때 줄바꿈한다.
```
```scss
word-break: normal;      // 줄바꿈에서 단어를 유지한다.
word-break: keep-all;    // 줄바꿈에서 단어를 유지한다. (CJK)
word-break: break-all;   // 줄바꿈에서 단어를 자르고 강제로 줄바꿈한다.
```
```scss
word-wrap: normal;       // 허용된 지점에서만 단어를 자른다.
word-wrap: break-word;   // 단어 자르는 것을 허용한다. (word-break: break-all;과 같다.)
```
```scss
text-overflow: clip;     // 엘리먼트 테두리에 맞춰 글자를 자른다.
text-overflow: ellipsis; // 엘리먼트 테두리에 맞춰 글자를 자르고 '...'을 추가한다.
```


## `user-select` 예제
```scss
$body-user-select:       none;
$divisions-user-select:  text;
$divisions:              "nav, main, section, figure, figcaption, details, summary, time, mark";

body {
  user-select: $body-user-select;
}
#{$divisions} {
  user-select: $divisions-user-select;
}
```


## 부트스트랩 커스터마이징 기법

### 폰트 변경
```scss
$web-font-family:       "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
$web-font-family-serif: "Noto Serif", Georgia, "Times New Roman", Times, serif;
$web-font-breakpoint:   map-get($grid-breakpoints, md);

// 글꼴: 데스크톱에서는 웹폰트 사용
body {
  @media (min-width: $web-font-breakpoint) {
    font-family: $web-font-family;
  }
}

// 글꼴: 세리프
.serif {
  font-family: $font-family-serif;
  @media (min-width: $web-font-breakpoint) {
    font-family: $web-font-family-serif;
  }
}
```

### 부트스트랩3(LESS): 480px부터 767px 사이에도 그리드 시스템을 만드는 방법
```less
@media (min-width: @screen-xs-min) and (max-width: @screen-xs-max) {
  .make-grid(ms);
  .container { width: @screen-xs }
}
```
