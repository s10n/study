---
category: JavaScript
title: 스니핏
---


## 기초 개념
* `bind`, `call`, `apply`, `this`, `callback`, `closure`, `object`, `prototype`


## User agent를 파악하는 코드 스니핏
참고: IE 11 및 Edge 버전은 Agent의 문자열이 `MSIE`에서 `Trident/`로 변경됐다. 따라서 아래의 코드로는 찾을 수 없다.

```javascript
function getInternetExplorerVersion() {
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
    if (re.exec(ua) != null)
      rv = parseFloat(RegExp.$1);
  }
  return rv;
}

function checkVersion() {
  var ver = getInternetExplorerVersion();
  var msg = '';
  /*
  if (ver > -1)
    msg = 'You are using Internet Explorer ' + ver;
  else
    msg = 'You are not using Internet Explorer';
  alert(msg);
  */
  if (ver > -1 && ver < 10) {
    msg = 'You are using Internet Explorer ' + ver;
    alert(msg);
    location.href = 'http://whatbrowser.org';
  }
}

checkVersion();
```


## `.on()`
자바스크립트에서 생성한 DOM `$('.item')`을 클릭하면 지우게끔 구현할 때, `$('.item').click(function() { $(this).remove(); });` 형태는 작동하지 않을 것이다. 왜냐하면, `$(document)`가 `ready()`되는 시점에 아직 어떤 `.item`도 만들어지지 않았기 때문이다. 그래서 general한 이벤트 핸들러인 `.on()`이 있고, 이것을 `$(document)`에 직접 걸어준다.


## `.closest(selector)`
DOM Tree를 거슬러 올라가며 가장 가까운 selector를 찾는다.
중첩된 `.parent()`의 형태로 특정 DOM을 찾아야 하는 상황인 경우 `.closest(selector)`를 사용하는게 더 좋다.
`parent()`는 마크업의 DOM 깊이만 바뀌면 즉시 오동작하기 때문이다.
[참조](https://api.jquery.com/closest/)


## 토막상식
* 링크의 `disabled` 상태를 CSS의 `pointer-events: none`으로 선언해도 키보드로는 여전히 조작할 수 있다. 마우스와 키보드의 입력은 다르기 때문이다. JS로 막아야 한다.
