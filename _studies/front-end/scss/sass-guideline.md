---
category: SCSS
title: 가이드라인
reference:
  title: Sass Guidelines
  url: https://sass-guidelin.es/ko
---


## SCSS의 모토
* 만약 유효한 CSS라면, 유효한 SCSS이다.


## Sass와의 차이점
* Sass는 중괄호와 세미콜론이 없고, 들여쓰기에 의존한다.
* SCSS는 CSS에 기능이 추가된 것이므로 CSS와 비슷하다.


## 디자인 원칙
팀은 다음의 디자인 접근법을 갖는다:

* 추가 기능을 더하는 것은 복잡도를 높이고, 이것은 곧 비용이므로, 유용해야 한다.
* 스타일 블록 하나만을 보는 것만으로도 해당 블록에 대해 쉽게 알아내야 한다.


## 핵심 원칙
* 간단해야 한다.
* [KISS 원칙](http://en.wikipedia.org/wiki/KISS_principle)이 핵심이며 심지어 [DRY 원칙](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)보다 우선할 수도 있다.
* 때로는, 코드를 유지보수가 가능하도록 만들기 위해 조금 반복하는 편이 더 낫다. 복잡한 시스템은 지나친 복잡성 때문에 통제할 수 없다.
* 실용주의가 완벽을 이긴다. 규칙을 거스르는게 옳게 느껴질 때엔, 그렇게 하라.


## 컨벤션
* 들여쓰기는 space 2칸
* 문자열은 UTF-8 인코딩을 강제한다.

  ```scss
  @charset 'utf-8';
  ```

* 문자열과 URL은 작은 따옴표로 감싼다.
  - 어떤 문자열에서 과도한 이스케이프가 발생할 때에는 큰 따옴표를 고려할 수도 있다.
* 매직 넘버(어쩌다보니 맞아떨어진 숫자)는 무슨 수를 써서라도 피한다.
  - 어쩔 수 없을 때에는, 어떻게 그 값에 도달했는지와 왜 효과를 낸다고 추측하는지 주석으로 충분히 설명하라.
  - 그렇지 않으면 다음 개발자는 아무런 사전 정보 없이 그 값의 논리적인 이유를 알아내야 한다.
* 색상은 이해하기 쉽고 조정하기 쉬운 HSL 표기를 사용하라.
* 색상 변수를 테마에 사용할 때 테마 변수에 저장해서 사용한다.

  ```scss
  $main-theme-color: $sass-pink;
  ```

  - 이렇게 함으로써 테마 색상이 변경될 때 `$sass-pink: blue`같은 사태가 초래하는 것을 방지할 수 있다.
* `mix`함수로 `white` 혹은 `black`과 혼합하여 명암을 조절하는 방법은 `lighten`과 `darken` 함수보다 이점이 있다.
  - 색의 비율을 점진적으로 변경한다.
  - `tint`와 `shade`함수를 만들면 더 편리하다. (Compass는 이를 기본적으로 포함한다.)

    ```scss
    /// 색을 약간 밝게 한다
    /// @access public
    /// @param {Color} $color - 밝게 만들려는 색
    /// @param {Number} $percentage - 반환될 색 내 `$color`의 백분율
    /// @return {Color}
    @function tint($color, $percentage) {
      @return mix(white, $color, $percentage);
    }

    /// 색을 약간 어둡게 한다
    /// @access public
    /// @param {Color} $color - 어둡게 만들려는 색
    /// @param {Number} $percentage - 반환될 색 내 `$color`의 백분율
    /// @return {Color}
    @function shade($color, $percentage) {
      @return mix(black, $color, $percentage);
    }
    ```


## 리스트와 맵
* 리스트에 새로운 아이템을 추가할 때에는 `append()`를 이용한다.
* 맵의 문자열인 key는 따옴표로 감싼다.

  ```scss
  $breakpoints: (
    'small': 767px,
    'medium': 992px,
    'large': 1200px,
  );
  ```


## 주석
* CSS는 주석이 잔뜩 달려야 한다.
  - 선언에 대한 이유 및 사고 과정을 모두 기록한다.
  - 코드 작성과 동시에 주석을 단다.
* 이상적으로는 모든 CSS 규칙은 해당 블록의 요점을 설명하는 주석이 선행해야 한다.

  ```scss
  // 너무 길어서 한 줄에 안 들어가는 문자열을 자르고 말줄임표를 붙이는 헬퍼 클래스.
  // 1. 줄바꿈을 방지하고, 한 줄로 유지되도록 강제한다.
  // 2. 줄 끝에 말줄임표를 붙인다.
  .ellipsis {
    white-space: nowrap; // 1
    text-overflow: ellipsis; // 2
    overflow: hidden;
  }
  ```

* 기본적으로 첫 눈에 명확하지 않은 것에는 전부 주석을 달아야 한다.
  - 너무 과한 문서화라는 건 없다.
  - 주석을 너무 많이 다는 것은 불가능하다.
  - 모든 것에 주석을 붙여라.
* 코드베이스 전역에서 사용되도록 만들어진 모든 변수, 함수, 믹스인, 플레이스홀더는 [SassDoc](http://sassdoc.com/)을 이용하여 전역 API의 일부로서 문서화되어야 한다.


## 설계
* 작은 규모의 프로젝트에서조차 폴더가 중요하다.
  - 모든 서류를 같은 박스에 넣지는 않는 법이다.
  - 프로젝트에 따라 마음대로 폐기하거나 조정하라.
* 작동하게 만드는 것과 좋게 만드는 것 사이에는 커다란 차이가 있다.
* CSS는 아주 엉망인 언어라서, 더 적은 CSS를 가질 수록 더 즐거워진다.
  - 수 메가바이트의 CSS 코드는 다룰 수 없다.
* 인터페이스는, 컴퍼넌트의 모음이다.
  - 스타일시트를 짧고 효율적으로 유지할 수 있다.
  - 이 인식을 잃으면 모든 것이 혼란스러운 난장판이 된다.
* 컴퍼넌트는 다음의 요건을 충족한다.
  - 단 한가지 일만 한다.
  - 재사용 가능하고, 프로젝트 전체에 걸쳐 재사용된다.
  - 독립적이다.


## 스타일시트 7-1 패턴
* 7개의 폴더와 1개의 파일(`main.scss`)
* 이상적인 구조:

  ```
  sass/
  |
  |– base/
  |   |– _reset.scss       # Reset/normalize
  |   |– _typography.scss  # 타이포그래피 규칙
  |   …                    # 기타.
  |
  |– components/
  |   |– _buttons.scss     # 버튼
  |   |– _carousel.scss    # 캐러셀
  |   |– _cover.scss       # 커버
  |   |– _dropdown.scss    # 드롭다운
  |   …                    # 기타.
  |
  |– layout/
  |   |– _navigation.scss  # 네비게이션
  |   |– _grid.scss        # 그리드 시스템
  |   |– _header.scss      # 헤더
  |   |– _footer.scss      # 푸터
  |   |– _sidebar.scss     # 사이드바
  |   |– _forms.scss       # 폼
  |   …                    # 기타.
  |
  |– pages/
  |   |– _home.scss        # 홈 한정 스타일
  |   |– _contact.scss     # 연락처 한정 스타일
  |   …                    # 기타.
  |
  |– themes/
  |   |– _theme.scss       # 디폴트 테마
  |   |– _admin.scss       # 관리자 테마
  |   …                    # 기타.
  |
  |– utils/
  |   |– _variables.scss   # Sass 변수
  |   |– _functions.scss   # Sass 함수
  |   |– _mixins.scss      # Sass 믹스인
  |   |– _helpers.scss     # 클래스 & 플레이스홀더 헬퍼
  |
  |– vendors/
  |   |– _bootstrap.scss   # Bootstrap
  |   |– _jquery-ui.scss   # jQuery UI
  |   …                    # 기타.
  |
  |
  `– main.scss             # 메인 Sass 파일
  ```

* 여덟번째 폴더 `vendors-extensions/_boostrap.scss`는 Bootstrap의 기본 CSS 일부를 재선언하는 모든 CSS 규칙을 담고 있는 파일
* 파일들은 아래의 순서대로 불러들인다.

  ```
  vendors/
  utils/
  base/
  layout/
  components/
  pages/
  themes/
  ```

* 스타일시트의 맨 끝에서 `_shame.scss`를 불러와 자랑스럽지 않은 코드를 넣는다.

  ```scss
  /**
   * Nav 한정성 해결.
   *
   * 누군가 헤더 코드에 ID를 사용해서 (`#header a {}`) 네비게이션 선택자
   * (`.site-nav a {}`)가 무효화됨. 헤더 부분 리팩터링할 시간이 날 때까지
   * !important로 덮어쓸 것.
   */
  .site-nav a {
      color: #BADA55 !important;
  }
  ```


## RWD
* 브레이크포인트는 특정한 기기의 이름을 따라 짓지 않는다.
* 선택자 속에 미디어쿼리를 선언하는게 컴퍼넌트 아이디어와 잘 어울린다.


## Extend
* `@extend` 지시어를 완전히 피하라.


## 조건문
* 일상적인 스타일시트에선 조건문이 필요하지 않다.
