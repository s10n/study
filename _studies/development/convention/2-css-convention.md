---
category: Convention
title: CSS 컨벤션
reference:
  title: General Rules
  url: ../0-general-rules
---


## Note
* 이 문서는 CSS, LESS, SCSS 코드 작성의 일반적인 규칙을 다룹니다.
* 그 중 SCSS를 우선으로 합니다.


## References
* 이 문서에서 다루지 않는 규칙은 다음의 순서로 따릅니다.
  - [.scss-lint.yml](https://github.com/twbs/bootstrap/blob/v4-dev/scss/.scss-lint.yml)
  - [Code Guide by @mdo](http://codeguide.co/)
  - [Sass Guidelines](https://sass-guidelin.es)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml)


## 0 and Units
* 0 뒤에 단위를 절대로 쓰지 마라.

  ```css
  .selector { margin: 0; }
  ```


## Leading 0s
* 값의 맨 앞에 0을 쓰지 마라.

  ```scss
  $font-size-sm: .875rem;
  ```


## Name Delimiters
* 클래스, ID, 변수, 믹스인의 이름에서 단어를 하이픈으로 구분하라.

  ```scss
  .container-fluid {
    // ...
  }
  ```

  - BEM, OOCSS, SMACSS 등을 사용한다면 언더스코어를 허용한다.


## ID Selectors
* ID를 선택자로 사용하지 마라.
  - ID는 재사용성이 없다.


## Selector and Declaration Separation
* 선택자끼리는 줄을 분리하라.
  - 단, 관련된 선택자는 같은 줄에 적는 것은 허용한다.

  ```css
  h1,
  h2,
  h3 {
    font-weight: normal;
    line-height: 1.2;
  }
  ```
  ```css
  a:focus, a:active {
    position: relative;
    top: 1px;
  }
  ```

* 의미있게 사용하는 경우 선언들 사이의 빈 줄을 허용한다.


## Rule Separation
* 규칙들 사이에 빈 줄을 넣어라.

  ```css
  html {
    background: #fff;
  }

  body {
    margin: auto;
    width: 50%;
  }
  ```


## CSS Quotation Marks
* 쌍 따옴표를 사용하라.
  - CSS에서 문자열은 따옴표로 둘러싸일 필요가 없지만, 일관성을 위해 따옴표를 사용하라.

  ```scss
  @charset "utf-8";

  input[type="text"] {
    $icon: "data:image/svg+xml;base64,...";

    background-image: url($icon);
  }
  ```


## Color
* HSL 표기법을 우선으로 사용하라.
* 콤마 뒤에 공백을 넣어라.

  ```css
  .selector {
    color: hsl(0, 100%, 50%);
  }
  ```


## Operators
* 최상위 숫자 계산은 언제나 괄호로 감싸라.
* 연산자의 양 옆에 띄어쓰기를 하라.

  ```scss
  width: (100% / 3);
  ```


## Magic Number
* 충분한 주석을 달아라.

  > [Sass Guidelines](https://sass-guidelin.es/ko/#section-23)


## Declarations Order
* 지역 변수는 가장 먼저 선언하며, 빈 줄로 다른 선언들과 간격을 만들어라.
* 인자가 없는 믹스인 호출 다음에 인자가 있는 믹스인을 호출하라.
* Nested selector는 언제나 빈 줄 후에 적어라.
* 닫는 중괄호(`}`) 앞에는 빈 줄을 넣지 마라.

  ```scss
  .selector {
    $length: 42em;

    @include ellipsis;
    @include size($length);
    display: block;
    overflow: hidden;
    margin: 0 auto;

    &:hover {
      color: red;
    }

    @include respond-to('small') {
      overflow: visible;
    }
  }
  ```

* SCSS에서는 특정한 순서를 강요하지 않는다.
  - 유형별로 정렬하는 동시에 알파벳 순으로 정렬하라.

  > [Sass Guidelines](https://sass-guidelin.es/ko/#section-35)

* [CSS Comb](https://github.com/csscomb/csscomb.js)를 이용해 정렬하라.
  - CSS Comb 규칙 파일은 [부트스트랩의 .csscomb.json 파일](https://github.com/twbs/bootstrap/blob/master/less/.csscomb.json)을 따른다.


## Lists and Maps
* 리스트는 다음을 따른다: [Sass Guidelines](https://sass-guidelin.es/ko/#section-30)
* 맵은 다음을 따른다: [Sass Guidelines](https://sass-guidelin.es/ko/#section-32)


## Selector Nesting
* 남용하지 마라.
  - 예외: 가상 클래스와 가상 요소, 상태에 관한 클래스

* 3단계 이상 깊어진다면 작성중인 CSS는 다음과 같다는 뜻이다:
  - HTML에 강하게 결합됐거나
  - 지나치게 구체적이거나
  - 재사용성이 없음


## Comments
* 주석을 작성하라.

  > [Sass Guidelines](https://sass-guidelin.es/ko/#section-46)
  >
  > [Code Guide by @mdo](http://codeguide.co/#css-comments)


## Single Declarations
* 하나의 선언만 있는 규칙의 가독성을 위해 줄바꿈을 제거하는 것은 허용한다.
  - 세미콜론을 제거하는 것도 허용한다.

  ```css
  .span1 { width: 60px }
  .span2 { width: 140px }
  .span3 { width: 220px }
  ```


## Class names
* 기능을 위해서만 사용하는 클래스는 `.js-` 프리픽스를 붙여라.
