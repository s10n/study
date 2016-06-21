---
category: Design
title: 디자인 전략
reference:
  title: 디자인 레퍼런스 아카이브
  url: ref.akaiv.com
---


## 개요
이 문서에서는 웹의 기술적인 특성을 기반으로 하는 디자인 전략에 대해 다룹니다.


## 웹의 기술적인 특성 및 제약
웹은 인쇄물과도 다르고, 자동차나 패션과도 물론 다릅니다.
혹자는 다른 분야에 비해 차라리 건축에 가깝다고도 표현합니다.
아래를 읽으면서 다른 분야와의 차이점을 머릿 속으로 떠올려 보면 더 이해하기 쉽습니다.

### HTML/CSS
초창기 웹페이지들은 그저 문서(Document)였습니다.
따라서 HTML과 CSS는 문서를 작성하고 꾸며주기 위한 명세만으로 충분했죠.
하지만 근래의 웹은 단순히 문서(Document)를 넘어 애플리케이션(Application)입니다.
그런데 아직 HTML과 CSS의 명세는 애플리케이션(Application)을 작성하고 꾸며주기 위한 충분한 준비가 되어있지 않습니다. 비록 CSS3에서 많은 속성이 추가됐지만 만족스러운 수준은 아니지요.
비유하자면, 레이아웃이나 요소들을 그려야하는데 그림판은 커녕 워드프로세서만으로 작업해야하는 상황입니다.
이게 CSS가 엉망인 언어로 인식되고 있는 이유 중 하나입니다.

> CSS is quite a messy language. The less CSS we have, the merrier.
>
> [https://sass-guidelin.es/#components](https://sass-guidelin.es/#components)

### 퍼포먼스
웹사이트는 물리적인 자원(서버)을 통해 제공되며 네트워크를 통해 사용자에게 전달됩니다.
즉, 연산 속도와 전송할 용량이 사용자 경험에 영향을 끼칩니다.

### 유지보수
웹 프로덕트는 단 한번 만들어진 후 끝나는 성질과는 거리가 멉니다.
끊임없이 새로운 기능을 추가하거나 유지보수해야 합니다.
아직까지는 사람이 대부분의 이 작업을 행하므로, 코드의 구조와 가독성이 심하게 훼손된다면 프로덕트의 성패에 영향을 끼칠 수 있습니다.

### 인터랙션
웹사이트는 사용자의 행동에 동적으로 반응합니다.
사용자가 무언가를 클릭하면, 없었던 요소가 나타난다던가 하는 식이죠.
이에따라 웹디자인은 단순히 정적인 화면을 넘어, 다양한 상태의 변화를 함께 다루어야 합니다.


## 방법론: 아토믹 디자인
상기한 특성과 제약들로부터 많은 웹디자인 방법론들이 나왔습니다.
그 중 [Brad Frost의 Atomic Design](http://atomicdesign.bradfrost.com/)을 소개합니다.

### 개요
웹디자이너 [Brad Frost](http://bradfrost.com/)가 인터페이스가 무엇으로 이루어져 있는지, 어떻게 더 질서있게 디자인 체계를 구성할 수 있는지에 대해 고민하던 중 발견했습니다. 고체, 액체, 기체부터 모든 간단한 것과 복잡한 것이 모두 원자(Atom)로 이루어져 있다는 데에서 힌트를 얻었죠. 원자가 모여 분자를 이루고, 분자들이 모여서 모든 물질을 만듭니다. 이 원리를 웹디자인에 적용한 결과가 아토믹 디자인(Atomic Design)입니다.

### 설명
아주 단순하게 설명하자면, HTML 요소들을 먼저 디자인하고 그들로 이루어진 컴포넌트들을 설계합니다. 이후 컴포넌트들을 조직화하여 템플릿들을 만들고, 템플릿들을 기반으로 페이지를 구성합니다.
이 단순한 방법론이 많은 프로젝트와 도구들의 기본 철학으로 채택됐습니다.

> Most of any interface can be thought of as little components and I highly recommend you stick to this paradigm. This will not only shorten the amount of CSS needed for the whole project, but also happens to be much easier to maintain than a chaotic mess where everything is flustered.
>
> [https://sass-guidelin.es/#components](https://sass-guidelin.es/#components)

### 컴포넌트란?
컴포넌트는 단 한가지 역할을 수행합니다(Do one thing). 독립적이고, 재사용할 수 있습니다.

### 성과
일관성과 확장성을 제공합니다.

컴포넌트를 재사용하고 필요에 따라 새로 정의하거나 확장하는 방식은 유지보수를 용이하게 합니다.
이는 곧 엔지니어링 효율을 향상시킵니다.

> adding extra features has a complexity cost that needs to be justified by usefulness
>
> [https://sass-guidelin.es#other-preprocessors](https://sass-guidelin.es#other-preprocessors)

### 참조
* [부트스트랩](http://getbootstrap.com/)
* 샘플 디자인가이드

### 더 알아보기: 퍼포먼스 향상 방법
* 모바일 퍼스트
* 플랫 디자인
* 이미지 사용 최소화
  - [폰트어썸](http://fontawesome.io/)


## 웹디자이너가 알아야 할 퍼블리싱 기초

### CSS
* Units (`px`/`%`/`rem`/`vh`/...)
* Box model
* Grid (Row, column and gutter)
* Properties and values

### CSS Preprocessor
* 색상 연산: [LESS](http://lesscss.org/functions/#color-operations), [SCSS](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html#color_operations)

### Responsive web design
* 뷰포트: 아이폰 320px, 안드로이드 360px
* 픽셀 밀도: 맥북프로 2x, 아이폰 2.88x, 안드로이드 4x
* 예제
  - [http://colly.com/](http://colly.com/)
  - [http://alistapart.com/d/responsive-web-design/ex/ex-site-FINAL.html](http://alistapart.com/d/responsive-web-design/ex/ex-site-FINAL.html)
  - [http://upperdog.se/](http://upperdog.se/)
  - [http://hicksdesign.co.uk/](http://hicksdesign.co.uk/)

### Fonts
* 윈도우 운영체제에서 맑은 고딕 글꼴의 굵기는 400, 700 둘 뿐입니다.


## 스타일가이드의 구성 요소

### 도입부
* 색상 팔레트
* 폰트
  - [구글 웹폰트 통계](https://www.google.com/fonts#Analytics:total)

### 이미지 어셋
* 파비콘
  - 512px
* 페이스북 공유 이미지
* 모든 이미지는 레티나 디스플레이 대응을 위해 2x 크기의 파일을 준비합니다.

### 컴퍼넌트의 종류
* [부트스트랩](http://getbootstrap.com/)을 참고

### 컴포넌트의 상태
* 마우스오버(`:hover`), 포커스(`:focus`), 비활성화(`disabled`), 액티브(`.active`)
* 밸리데이션: `has-error`
* 가시성: `collapsed`, `hidden`

### 특수한 목적의 페이지
* 404 Not Found
* 미지원 브라우저 안내


## 컨벤션

### 색상
* 해당 색상과 연산의 결과를 추측하기 쉬운 HSL을 최대한 사용해주십시오.

### 이미지 크기
* 이미지 크기는 항상 짝수로 만들어주세요.

### 이미지 품질
* 포토샵으로 저장하실 경우, File > Save for Web (단축키 Ctrl+Shift+Alt+S) 통해 저장하십시오.
* 가장 적은 용량으로 가장 높은 품질을 얻을 수 있도록 저장합니다. 예를들면 다음과 같습니다.
* 복잡한 이미지는 JPG 포맷 + Progressive 체크 + 75 근처의 품질로 저장합니다.
* 투명배경이 있는 경우는 PNG-24로 저장합니다.
* 색상이 적고 단순한 이미지는 경우에 따라 PNG-8로 저장할 수 있습니다.

### 이미지 이름
* 단어와 단어 사이는 밑줄(`_`)이 아닌 하이픈(`-`)으로 작성합니다.
* 파일 이름 맨 앞에 프리픽서를 붙여 분류합니다.
  - `logo-`, `icon-`, `bg-`, `img-`, `pic-` 등
* 파일 이름 맨 마지막에 이미지 소스의 크기를 붙입니다.
  - `@2x.png` 등

### UI 용어
* 명확한 의미 전달을 위해 pxd 블로그에서 제공하는 아래 UI 용어를 기준으로 소통합시다.
* [http://story.pxd.co.kr/616](http://story.pxd.co.kr/616)
* [http://story.pxd.co.kr/638](http://story.pxd.co.kr/638)
* [http://story.pxd.co.kr/647](http://story.pxd.co.kr/647)
* [http://story.pxd.co.kr/718](http://story.pxd.co.kr/718)

### 커뮤니케이션 빈도
* 커뮤니케이션이 잦아야 시간낭비가 최소화된다고 믿습니다.
