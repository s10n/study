---
category: JavaScript
title: 자바스크립트 1 - 기초
---


* 객체에 함수를 담을 수 있다.
* `for (key in object)` 형태로 특정 객체의 키에 접근 가능하다.
* 정규표현식 빌더 [regexr.com](regexr.com)
* 불가피하게 전역변수를 사용해야 한다면, 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다.
* 함수는 값이기 때문에 다른 함수의 인자로 전달 될수도 있다.

  ```javascript
  function cal(func, num){
      return func(num)
  }
  function increase(num){
      return num+1
  }
  function decrease(num){
      return num-1
  }
  cal(increase, 1)
  ```

* 함수는 함수의 리턴 값으로도 사용할 수 있다.

  ```javascript
  function cal(mode){
      var funcs = {
          'plus' : function(left, right){return left + right},
          'minus' : function(left, right){return left - right}
      }
      return funcs[mode]
  }
  cal('plus')(2,1)
  cal('minus')(2,1)
  ```

* 클로저(closure): 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다. 클로저는 자바스크립트를 이용한 고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다. (자세한 활용법은 [youtu.be/J0Qb2wjm-ik](https://youtu.be/J0Qb2wjm-ik?t=290) `get, set` 내용 참조)
* 함수에는 `arguments`라는 변수가 있다. 전달받은 인자들이 배열처럼 담긴다. 함수 이름의 `length`는 함수에 정의된 인자의 수이고, `arguments.length`는 실제로 전달받은 인자의 수이다.
* `함수.apply(객체)`는 해당 함수를 객체의 메소드인 것처럼 함수를 호출한다. 하지만 `for (key in this)`문에 포함되지는 않는다. 따라서 `for (key in this) if (typeof this[key] !== function)`을 작성하지 않아도 된다.
