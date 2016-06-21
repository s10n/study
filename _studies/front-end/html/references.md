---
category: HTML
title: 레퍼런스
---


## `<select>`
* 이 요소 자체와 이 요소를 클릭했을 때 나오는 드롭다운의 모양은 커스터마이징하기가 매우 어렵습니다. ([참조](https://css-tricks.com/dropdown-default-styling/))
  - 가장 좋은 방법은 (1)꾸미지 않거나 (2)사용하지 않는 것입니다.
  - 혹은 (3)요소 자체를 시야에서 숨기고 가짜 요소를 만들어 통제하는 방법이 있습니다.
* 이 요소는 다음의 속성을 가질 수 있습니다: `autofocus`(HTML5), `form`(HTML5), `size` ([참고](https://developer.mozilla.org/ko/docs/Web/HTML/Element/select))
* 이 요소 하위의 `<option>`들을 `<optgroup>`으로 묶을 수 있습니다.


## `<input>`
* 이 요소의 `type` 속성이 가질 수 있는 값의 목록을 확인하십시오. ([링크](http://www.w3schools.com/tags/att_input_type.asp))
* `type`이 `number`일 때, `min`, `max`, `step` 속성을 가질 수 있습니다.
* `type`이 `range`, `date`일 때, 운영체제에 따른 고유한 모양이 있습니다.


## `<a>`
* 이 요소는 다음의 속성을 가질 수 있습니다: `download`(HTML5)
  - 만약 사용자가 파일을 다운로드하도록 하는 링크라면 다음처럼 표현합니다.

  ```html
  <a href="file.csv" download>
  ```
