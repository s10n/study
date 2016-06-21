---
category: SCSS
title: 수직 가운데
---


## 개요
[부트스트랩](http://getbootstrap.com/)의 예제 중 하나인 커스텀 컴포넌트 [Cover](http://getbootstrap.com/examples/cover/) 페이지를 살펴보았다.
해당 페이지는 본문에 해당하는 HTML 요소를 수직 가운데에 위치시켰다.
CSS만 사용해 HTML 요소를 수직 가운데에 위치시키려면 일반적으로 다음 기법을 활용한다.


## 코드

### HTML
```html
<div class="site-wrapper">
  <div class="site-wrapper-inner">
    <!-- 본문 내용 -->
  </div>
</div>
```

### CSS
```css
html,
body {
  height: 100%;
}
.site-wrapper {
  display: table;
  width: 100%;
  height: 100%;
  min-height: 100%;
}
.site-wrapper-inner {
  display: table-cell;
  vertical-align: middle;
}
```


## 설명
* 수평 가운데 정렬 방법은 다음처럼 간단하고 직관적이다.
  - 인라인 요소: ```.element { text-align: center; }```
  - 블록 요소: ```.element { margin-left: auto; margin-right: auto; }```
* 하지만 애초에 수직 가운데 정렬은 CSS에서 고려되지 않았기 때문에, 우회적인 방법을 사용해야 한다.
  - 우선 wrapper를 만들어 ```display: table;```로 선언하고, 그 높이를 브라우저에 꽉 차도록 한다.
  - 그리고 바로 안쪽 inner를 ```display: table-cell;```로 선언한 다음, 수직 가운데 정렬하도록 한다.
* 테이블의 각 셀은 테이블 안 쪽에서 수직 가운데에 위치할 수 있다는 사양을 활용한 기법이다.
