---
category: SCSS
title: 좌측 사이드바
---


## 개요
좌측 사이드바를 만드는 최소한의 CSS

## 코드

### HTML
```html
<nav class="site-sidebar">
  ...
</nav>

<div class="site-content">
  ...
</div>
```

### CSS
```scss
.site-sidebar {
  position: fixed;
  top: $navbar-height;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: $sidebar-width;
  z-index: 1000;
}

.site-content {
  margin-left: $sidebar-width;
}
```
