---
category: UI
title: teleport.js
---

## Source code
```javascript
(function($) {
  $(window).load(function() {
  $('.section--cover').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is now visible in the viewport
        if (visiblePartY == 'top') {
          // top part of element is visible
        } else if (visiblePartY == 'bottom') {
          // bottom part of element is visible
        } else {
          // whole part of element is visible
        }
      } else {
        // element has gone out of viewport
        $('.final').show();
      }
    });
  });
})(jQuery);

jQuery(document).ready(function($) {

  // $(window).on('beforeunload', function() {
  //     $(window).scrollTop(0);
  // });

  var vwWidth,
      vwHeight,
      headerHeight;

  function updateValues() {
    headerHeight = $('.main-header').height();
    vwWidth = viewportSize.getWidth();
    vwHeight = viewportSize.getHeight() - headerHeight;

    // console.log(vwWidth)
    // console.log(vwHeight)
    // console.log(headerHeight)

    // reset
    $('.right').css('top', -vwHeight * 2);
    $('.left').css('top', '0');

    $('.section--cover').css('height', vwHeight + headerHeight);
    $('.left > div').css('height', vwHeight);
    $('.right > div').css('height', vwHeight);
    $('.final__left, .final__right').css('height', vwHeight);
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

  $(document).keydown(function(event) {
      if ($('.left, .right').is(':animated') ) {
        return false;
      }
      if ($(window).scrollTop() === 0) {
        switch(event.which) {
            case 37: // left
            break;

            case 38:
            moveUp(event);// up
            // event.preventDefault();
            break;

            case 39: // right
            break;

            case 40:
            moveDown(event); // down
            // event.preventDefault();
            break;

            default: return; // exit this handler for other keys
          }
      }
      // e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  function moveDown(event) {
    if ( parseInt($(".right").css("top"), 10) < 0) {
      // console.log('down' + vwHeight);
          event.preventDefault();
          event.stopPropagation();
      $(".left").stop().animate({
        top: "-=" + vwHeight
        }, 2000, 'easeInOutCubic');
      $(".right").stop().animate({
        top: "+=" + vwHeight
        }, 2000, 'easeInOutCubic');
    }

  }

  function moveUp(event) {
    if ( parseInt($(".left").css("top"), 10) < 0 && parseInt($(".right").css("top"), 10) < 0) {
      // console.log('up' + vwHeight);
      event.preventDefault();
      event.stopPropagation();

    $(".left").stop().animate({
      top: "+=" + vwHeight
      }, 2000, 'easeInOutCubic');
    $(".right").stop().animate({
      top: "-=" + vwHeight
      }, 2000, 'easeInOutCubic');
    }
  }

  $(document).on('mousewheel', function(event, deltaY) {
    if ($('.left, .right').is(':animated') ) {
      return false;
    }
      if ($(window).scrollTop() === 0 && $('.final').css('display') == 'none' ) {

        if (deltaY < 0)
        {
          moveDown(event);
        }

        if (deltaY > 0)
        {
          moveUp(event);
        }

      }
  });

// if ($(window).scrollTop() === 0) {
//   (function( $ ){
//     var hammer_options = {};
//     $(".one-left, .three-left")
//       .hammer(hammer_options)
//       .on("dragup", function() {
//         moveDown();
//       }).on("dragdown", function() {
//         moveUp();
//       });
//   })( jQuery );

//   (function( $ ){
//     var hammer_options = {};
//     $(".six-left, .six-right")
//       .hammer(hammer_options)
//       .on("dragup", function() {
//         // $("html, body").animate({ scrollTop: vwHeight });
//       }).on("dragdown", function() {
//         moveUp();
//       });
//   })( jQuery );
// };

  $('.skip-cover').click(function(event) {
    $("html, body").animate({ scrollTop: vwHeight });
      $('.final').show();
      event.preventDefault();
      event.stopPropagation();
  });

});
```
