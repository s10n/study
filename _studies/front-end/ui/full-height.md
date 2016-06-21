---
category: UI
title: 페이지를 브라우저에 꽉 채우기
---


## 개요
첫 번째 섹션의 높이를 브라우저의 높이만큼 꽉 채우는 방법을 조사했다.


## 서론
만약 페이지에 오직 하나의 섹션만 존재한다면 CSS만 사용해도 된다.

```css
html,
body {
  height: 100%;
}
.site-wrapper {
  height: 100%;
  min-height: 100%;
}
```

여러 섹션이 존재해도, 각 섹션의 크기가 같다면 `height: 500%`처럼 선언해 구현할 수 있다.

여기서는 위의 상황이 아니고, 단지 첫 번째 섹션의 높이만 브라우저의 높이만큼 꽉 채우는 방법에 대해 다룬다. (자바스크립트가 필요하다.)


## 코드 1. teleport
[teleport.org](http://teleport.org/)

### javascript
```javascript
jQuery(document).ready(function($) {

  var vwWidth,
      vwHeight,
      headerHeight;

  function updateValues() {
    headerHeight = $('.main-header').height();
    vwWidth = viewportSize.getWidth();
    vwHeight = viewportSize.getHeight() - headerHeight;

    // reset
    $('.section--cover').css('height', vwHeight + headerHeight);
    $('.left > div').css('height', vwHeight);
    $('.right > div').css('height', vwHeight);
  }

  if (window.addEventListener) {
    window.addEventListener("resize", updateValues, false);
    window.addEventListener("DOMContentLoaded", updateValues, false);
    window.addEventListener("load", updateValues, false);
  }
  else if (window.attachEvent) {
    window.attachEvent("onload", updateValues);
    $("html").addClass("no-resize");
  }

});
```

### 설명
* [Tyson Matanich](https://github.com/tysonmatanich)의 [viewportSize](https://github.com/tysonmatanich/viewportSize) 스크립트가 필요하다.
* 이 스크립트는 `window.innerWidth`나 `document.documentElement.clientWidth`등이 브라우저 호환성 이슈를 발생시키기 때문에 작성했다고 하며, 609bytes(~0.59KB)의 경량 스크립트이다.
* 참고를 위해 전체 자바스크립트 코드를 첨부한다. 해당 웹사이트에서는 이 기법 이외에도 인상적인 기법들의 조합을 볼 수 있다. (keydown 이벤트에 따른 스크롤 조작 및 이미 스크롤이 애니메이션 진행 중일때는 무시 등)


## 코드 2. PRPL
[purplerockscissors.com](http://purplerockscissors.com/)
기본적으로 AngularJS를 사용한 프로젝트이다.

### javascript
`prpl.view.js`는 다음과 같다.

```javascript
/* Viewport Helper  2 [its there if you need it]
*
*   viewport = {
*       width: 'window window'
*       height: 'window height'
*       top: 'scrollTop value'
*   }
*
*   jquery and jquery throttle/debounce required see
*   http://benalman.com/projects/jquery-throttle-debounce-plugin/ for more
*   information, debounce included in scripts/lib/jquery.plugins.js
*
========================================= */
var PRPLView = function( params ){

    self = this;

    var jqWin = $(window);
    var jsBody = $('body');

    var _construct = function(){
        self.width = jqWin.width();
        self.height = jqWin.height();
        self.scrollTop = jqWin.scrollTop();

        jqWin.on({
            scroll: function(e){ scrollHandler(e); },
            resize: function(e){ resizeHandler(e); }
        })
    }

    var scrollHandler = function(e){
        self.scrollTop = $(e.currentTarget).scrollTop();
        trigger('vpScroll', self.scrollTop);
    }

    var resizeHandler = function(e){
        setWidth($(e.currentTarget).width());
        setHeight($(e.currentTarget).height());
    }

    var setWidth = function(newWidth){
        if(typeof newWidth === 'undefined' || newWidth === self.width){ return false; }
        self.width = newWidth;
        trigger('vpWidth', self.width);
    }

    var setHeight = function(newHeight){
        if(typeof newHeight === 'undefined' || newHeight === self.height){ return false; }
        self.height = newHeight;
        trigger('vpHeight', self.height);
    }

    // trigger jq events
    var trigger = function(what, data){
        if(typeof what === 'undefined'){ return false; }
        if(typeof data === 'undefined'){ $(self).trigger(what); }
        else{ $(self).trigger(what, data); }
        return true;
    };


    _construct();

}
```
