(function ($) {
  'use strict';

  // 외부 링크들이 새 탭에서 열리도록 설정
  $('a[href]').each(function () {
    if (location.host != $(this).prop('host')) {
      $(this).attr('target', '_blank');
    }
  });
})(jQuery);
