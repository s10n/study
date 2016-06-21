---
category: UI
title: 애니메이션
---

## 개요
메시지를 보여주고 3초 후 숨긴 후, 다시 2초 후 완전히 제거하는 스타일시트와 스크립트


## 코드

### CSS
```css
@-webkit-keyframes fade {
  0% { opacity: 0; }
  100% { opacity: 1; display: block; }
}

.is-visible {
  opacity: 1;
  animation: fade 2s;
}

.is-hidden {
  opacity: 0;
  animation: fade 2s reverse;
}

.is-removed {
  display: none;
}
```

### JS
```js
function showMessage (s) {
  var el = document.getElementById('message');
  el.innerHTML = s;

  el.className = 'is-visible';
  setTimeout(function(){
    el.className = 'is-hidden';
    setTimeout(function(){
      el.className = 'is-removed';
    }, 2000);
  }, 3000);
}
```
