---
category: JavaScript
title: 자바스크립트 3 - 이벤트
---


* `addEventListener`는 이벤트를 등록하는 가장 권장되는 방식이다.

  ```javascript
  var t = document.getElementById('target')
  t.addEventListener('click', function(event) {
    alert(event.target.value)
  })
  ```
