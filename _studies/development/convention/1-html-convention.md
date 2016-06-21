---
category: Convention
title: HTML 컨벤션
reference:
  title: General Rules
  url: ../0-general-rules
---


## Document Type
* HTML5를 사용하라.

  ```html
  <!DOCTYPE html>
  ```


## Semantics
* HTML을 목적에 맞게 사용하라.

  ```html
  <header class="site-header">
    <h1 class="site-title">Site title</h1>
  </header>
  ```

  > [w3schools](http://www.w3schools.com/html/html5_semantic_elements.asp)

* '태그'가 아닌 '요소(element)'이다.


## Multimedia Fallback
* 멀티미디어의 대체 컨텐츠를 제공하라.

  ```html
  <img src="spreadsheet.png" alt="Spreadsheet screenshot.">
  ```


## Entity References
* 사용하지 마라.
  - 모두 같은 인코딩(UTF-8)을 사용한다면 `&mdash;`, `&rdquo;`, `&#x263a;`처럼 쓸 필요가 없다.
  - 예외: `<`와 `&`처럼 HTML에서 특수한 의미를 갖는 문자나 보이지 않는 문자는 예외로 한다.


## Optional Tags
* 다음 태그를 사용하라: `<html>`, `<body>`
* 다음 태그는 누락하는 것을 권장한다: `<head>`
* 닫는 태그를 사용하라: `</li>`, `</th>`, `</td>`, `</dt>`, `</dd`>

  > [HTML5 specification](https://whatwg.org/specs/web-apps/current-work/multipage/syntax.html#syntax-tag-omission)에서 어떤 태그를 누락해도 되는지 명시하고 있다. (예: `</li>`, `</body>`)
  >
  > [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.xml?showone=Optional_Tags#Optional_Tags)에서는 파일 크기 최적화를 위해 optional tags를 누락하는 것을 고려하라고 한다.


## HTML Quotation Marks
* 쌍 따옴표를 사용하라.


## Attribute Order
* `class`를 맨 앞에 적어라.
  - 클래스는 재사용 가능한 컴포넌트를 위한 것이기 때문이다.
* 다음의 순서로 속성을 적어라.
  - `class`
  - `id` `name`
  - `data`
  - `src` `for` `type` `href` `value`
  - `title` `alt`
  - `role` `aria`

  > [Code Guide by @mdo](http://codeguide.co/#html-attribute-order)


## Boolean Attributes
* 부울 속성은 값을 선언하지 마라.
  - 해당 속성의 존재로 참 값임을 표현하라.
  - 해당 속성의 부재로 거짓 값임을 표현하라.

  > [Code Guide by @mdo](http://codeguide.co/#html-boolean-attributes)


## Code Formatting
* 요소 안에 속성이 많은 경우 요소 안에서도 속성마다 줄바꿈을 허용한다.
  - 이는 행 단위 diff 도구를 사용할 때의 가독성을 높인다.

  ```html
  <!-- Example -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog"
       aria-labelledby="myModalLabel" aria-hidden="true">
    ...
  </div>
  ```
