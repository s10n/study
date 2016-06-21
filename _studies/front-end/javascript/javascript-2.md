---
category: JavaScript
title: 자바스크립트 2 - 객체지향
---


* 객체: 객체는 변수와 메소드를 그루핑한 것이다.
* 추상화: 지하철을 타기 위해 현실의 모든 정보(건물의 모양, 역 사이의 거리 등)를 알아야 할 필요는 없다. 지하철 노선도는 우리가 관심을 가지는 것만 추상화해둔 것이다.
* 전역객체: 사실 모든 변수와 함수는 `window`라는 전역객체의 프로퍼티다.
* `this`: 함수 안에서의 `this`는 그 함수가 속해있는 객체이다.
* 함수 리터럴: 함수도 `Function`이라는 이름의 객체이다. `new Function()`보다 편하게 `function ...` 형태로 만들 수 있게 문법적으로 제공하는 것이다. 마찬가지로 `new Object()`보다 편하게 `var o = {}` 형태로 만들 수 있도록 문법적으로 제공한다. 이런 것을 리터럴이라 부른다.
* 프로토타입: 생성자를 통해서 객체가 만들어질 때 `prototype`이라는 프로퍼티에 저장된 속성들이 그 객체에 연결된다.
* 표준 내장 객체: `Object`, `Function`, `Array`, `String`, `Boolean`, `Number`, `Math`, `Date`, `RegExp`
* 표준 내장 객체의 `prototype`에 새 함수를 직접 정의할 수 있다. 그래서 마치 해당 객체에 내장된 메소드처럼 사용할 수 있다.
* MDN: `prototype`으로 정의된 메소드는, 상속받은 모든 객체가 사용할 수 있다.
* `hasOwnProperty`: `Object` 객체를 확장하면, 모든 객체의 프로퍼티에 추가되는 영향을 주므로 바람직하지 않다. `hasOwnProperty`로 프로퍼티가 해당 객체 소속인지 확인할 수 있다.
* 복제와 참조: 원시 데이터 타입(`Number`, `String`, `Boolean`, `null`, `undefined`)은 복제하지만, 객체는 참조한다.
* `console.dir`과 `console.group` 활용
* `element.setAttribute('href', 'https://google.com')`
