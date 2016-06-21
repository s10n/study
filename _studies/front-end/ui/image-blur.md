---
category: UI
title: 스크롤에 따라 점점 흐려지는 이미지
---


## 개요
[Medium.com](https://medium.com/)의 [한국 Medium 사용자들의 글](https://medium.com/korean-medium-post) 페이지를 조사했다.
스크롤을 내리면, 콘텐트 영역의 또렷했던 이미지에 서서히 blur 효과가 적용된다.
글자가 많은 영역에서는 blur 효과가 적용된 배경이 글자 읽기를 편하게 만든다.


## 코드

### html
```html
<div class="screen-content">
	<div class="image-full-bleed">
		<div class="image-src picker-target" style="background-image: url('원본 이미지')"></div>
		<div class="image-src image-blur picker-target-blur" style="background-image: url('블러 이미지')"></div>
	</div>
</div>
```

### CSS
```css
.screen-content {
	height: 100%;
	overflow: auto;
	position: relative;
}
.image-full-bleed {
	background: black;
}
.image-full-bleed,
.image-src {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
.image-src {
	background-position: center;
	background-size: cover;
}
.image-blur {
	opacity: 0;
	z-index: 20;
}
```

### javascript
```javascript
// 스크롤을 내리면, 내린 길이에 비례하여 .image-blur의 opacity가 0부터 1까지 서서히 증가
```
