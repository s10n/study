---
category: React
title: 기초
---


## 개념
* 리액트를 사용하는 이유: 컴포넌트 단위, 빠른 버추얼 돔, 단방향 데이터 플로우
* 페이스북에서 여러개의 채팅창을 띄워놓고 있을 때, 특정 채팅을 읽어도 채팅 노티피케이션이 없어지지 않는 등의 오류가 있었다. 이를 해결하려다가 잘 되지 않자 MVC를 버리고 flux 개념을 도입한 것이다. 어떤 액션이 일어나면, 디스패쳐가 스토어를 조작하고, 스토어가 바뀌면 뷰를 업데이트하는데, 뷰는 스토어를 직접 건드리지 않고 디스패쳐로 액션을 보낸다. 디스패쳐는 액션들을 쌓아놓고 통제한다.


## 기초 지식
* prop는 불변, state는 가변 (단, constructor에서 설정해야 한다. 수정은 `setState()` 메서드를 통해 한다.)
* `this.props.children`은 텍스트노드
* `onClick` 이벤트 등은 컴포넌트에 적용되지 않고, 네이티브 DOM에만 적용 된다.
* 리액트로 작성한 함수는 비동기이다. 따라서, 어떤 값을 토글하는 함수에 토글된 값을 얻으려고 `console.log`로 찍어보면 기대한 것과 반대되는 값이 나올 수 있다. 비동기적으로 `console.log`를 먼저 실행해버린 경우이다.


## 패턴

### 스타일링
* `styleObj = { camelCase: 'value' }` 작성 후 `style={styleObj}`

### Object
* `JSON.stringify(object, null, 2)`
  - 로컬 스토리지에 넣을 때는 `stringify()`, 뺄때는 `parse()`를 사용한다.
* `splice()`는 원래 배열에 접근한다. 이를 피하려면 `slice()`를 쓴다.
* `.map()`([MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map))


## ETC
* hot loader가 컨스트럭터 변화는 감지하지 못하므로, 컨스트럭터를 고친 후에는 새로고침이 필요하다.
