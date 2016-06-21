---
category: Front-end
title: 프론트엔드 엔지니어링의 목표
layout: goal


sections:
  -
    title: 개요
    goals:
      -
        title: 항상 사용자 경험이 최우선이다.
      -
        title: 퍼포먼스를 향상시킨다.
      -
        title: 코드의 가독성을 높인다.


  -
    title: 퍼블리싱
    goals:
      -
        title: 접근성이 높은 웹사이트를 만든다.
        skills:
          -
            title: W3C가 권고하는 HTML5 표준
            references:
              -
                title: 대한민국의 웹 호환성 문제
                url: https://ko.wikipedia.org/wiki/대한민국의_웹_호환성_문제
                status: done
          -
            title: 시맨틱 마크업
            references:
              -
                title: HTML5 Semantic Elements
                url: http://www.w3schools.com/html/html5_semantic_elements.asp
                status: done
          -
            title: 마이크로포맷을 통해 메타데이터 정보 구축
            tools:
              -
                title: 구조화된 데이터 테스트 도구
                url: https://search.google.com/structured-data/testing-tool
                status: idea

      -
        title: 확장가능한 스타일시트를 작성한다.
        skills:
          -
            title: 스타일시트 구조화
            references:
              -
                title: BEM
                url: https://en.bem.info
                status: done
              -
                title: OOCSS
                url: http://oocss.org
                status: done
              -
                title: SMACSS
                url: https://smacss.com
                status: done
          -
            title: 스타일시트 전처리기
            tools:
              -
                title: LESS
                url: http://lesscss.org
                status: done
              -
                title: SCSS
                url: http://sass-lang.com
                status: done
          -
            title: 더 효율적이고 적합한 선언 방식
            references:
              -
                title: Grid
                url: https://css-tricks.com/snippets/css/complete-guide-grid
                status: idea
              -
                title: Flexbox
                url: https://css-tricks.com/snippets/css/a-guide-to-flexbox
                status: done
          -
            title: 프론트엔드 프레임워크
            tools:
              -
                title: Bootstrap 4
                url: http://getbootstrap.com
                status: done

      -
        title: 다양한 스크린에 대응한다.
        skills:
          -
            title: 반응형 웹디자인
            tools:
              -
                title: 미디어 쿼리
                status: done


  -
    title: 스크립트
    goals:
      -
        title: 코드의 품질을 향상하고 최적화한다.
        skills:
          -
            title: JavaScript 표준
            references:
              -
                title: ECMAScript 6
                url: ../../javascript/es6
                status: done
            tools:
              -
                title: Babel
                url: http://babeljs.io
                status: done
          -
            title: JavaScript 모듈화
            references:
              -
                title: CommonJS
              -
                title: AMD
            tools:
              -
                title: webpack
                url: https://webpack.github.io
                status: done
              -
                title: browserify
                url: http://browserify.org

      -
        title: 인터랙티브한 웹사이트를 구축한다.
        skills:
          -
            title: JavaScript 프레임워크
            tools:
              -
                title: jQuery
                url: http://jquery.com
                status: done
              -
                title: AngularJS
                url: https://www.angularjs.org
              -
                title: React
                url: https://facebook.github.io/react
                status: done
              -
                title: Redux
                url: http://redux.js.org/
                status: done
              -
                title: Vue.js
                url: https://vuejs.org/
                status: idea
          -
            title: 유용한 라이브러리들
            tools:
              -
                title: D3
                url: https://d3js.org
                status: idea
          -
            title: 내부/외부 API와 연동
            references:
              -
                title: AJAX
                url: http://api.jquery.com/jquery.ajax
                status: done
              -
                title: JSON
              -
                title: 페이스북
                url: https://developers.facebook.com
                status: idea
              -
                title: 유튜브
                url: https://developers.google.com/youtube
                status: done


  -
    title: 퍼포먼스
    goals:
      -
        title: 퍼포먼스를 향상시킨다.
        skills:
          -
            title: 퍼포먼스 측정
            tools:
              -
                title: PageSpeed
                url: https://developers.google.com/speed/pagespeed
                status: idea
              -
                title: sitespeed.io
                url: https://www.sitespeed.io
              -
                title: YSlow
                url: http://yslow.org
              -
                title: 크롬 개발자 도구의 Network, Timeline, Audit
                status: idea
          -
            title: CDN
          -
            title: 이미지 최적화
            references:
              -
                title: 이미지 포맷들에 대한 이해
                status: done
              -
                title: 이미지 스프라이트 기법
                status: done
              -
                title: 레이지 로딩
                status: idea
          -
            title: 반응형 웹 디자인의 서버측 기법


  -
    title: 자동화
    goals:
      -
        title: 소스코드를 관리하며 협업한다.
        skills:
          -
            title: 버전 관리 시스템
            tools:
              -
                title: Git
                status: done
              -
                title: GitLab
                url: https://gitlab.com

      -
        title: 프론트엔드 어셋 빌드 과정을 자동화한다.
        skills:
          -
            title: 어셋 관리 및 태스크 자동화
            tools:
              -
                title: Bower
                url: https://bower.io
                status: done
              -
                title: Grunt
                url: http://gruntjs.com
                status: done
          -
            title: 테스트
            tools:
              -
                title: ESLint
                url: http://eslint.org
                status: done
              -
                title: QUnit
                url: https://qunitjs.com
              -
                title: PhantomJS
                url: http://phantomjs.org
                status: idea
          -
            title: 배포
            tools:
              -
                title: Travis CI
                url: https://travis-ci.org
                status: idea
          -
            title: 문서화
            tools:
              -
                title: JSDoc
                url: http://usejsdoc.org
                status: idea
              -
                title: YUIDoc
                url: http://yui.github.io/yuidoc
              -
                title: SassDoc
                url: http://sassdoc.com
              -
                title: Plato
                url: https://github.com/es-analysis/plato


  -
    title: 프론트엔드
    goals:
      -
        title: 사용자를 도움으로써 웹사이트의 유입량을 높인다.
        skills:
          -
            title: 사용자의 행동 패턴 분석
            tools:
              -
                title: Google Analytics
                url: https://www.google.com/analytics
                status: idea
          -
            title: 검색엔진최적화
            references:
              -
                title: Google Webmasters
                url: https://www.google.com/webmasters
                status: idea


  -
    title: 배포
    goals:
      -
        title: 서버 환경을 설정하고 배포한다.
        skills:
          -
            title: 서버 환경 구성
            tools:
              -
                title: AWS
                url: http://aws.amazon.com/ko
                status: done
              -
                title: nginx
                status: done
              -
                title: Vagrant
                url: https://www.vagrantup.com
                status: done


  -
    title: 커뮤니케이션
    goals:
      -
        title: 디자이너와 소통한다.
        skills:
          -
            title: 정보 설계
          -
            title: 와이어프레이밍 및 플로우 차트
            tools:
              -
                title: Axure
                status: done
          -
            title: 컴포넌트 세트 정의
            tools:
              -
                title: Sketch, Zeplin
                status: done
          -
            title: 프로토타이핑
            tools:
              -
                title: Framer
                url: http://framerjs.com

      -
        title: 백엔드 엔지니어와 소통한다.
        skills:
          -
            title: 템플릿 태그를 활용한 웹사이트 개발
            tools:
              -
                title: WordPress
                url: https://wordpress.org
                status: done
              -
                title: Jekyll
                url: http://jekyllrb.com
                status: done
          -
            title: 자바스크립트로 앱 빌드
            tools:
              -
                title: Meteor
                url: https://www.meteor.com
          -
            title: 서버리스
            tools:
              -
                title: Firebase
                url: https://www.firebase.com
                status: done
              -
                title: DISQUS API
                url: https://disqus.com/api
          -
            title: 서버에서 뷰를 생성하는 과정에 대한 최소한의 이해
            tools:
              -
                title: Django, Flask, Node.js
                status: done
            references:
              -
                title: Django
                url: https://docs.djangoproject.com/en/1.9/intro
                status: done
          -
            title: 데이터베이스에 대한 최소한의 이해
            tools:
              -
                title: MySQL (MariaDB)
                status: done
---


## Front-end

### Data
* [Relay](https://facebook.github.io/relay) and [GraphQL](http://graphql.org) ([Udemy](https://www.udemy.com/graphql-with-react-course))

### Mobile app
* [React Native](https://facebook.github.io/react-native) ([Udemy](https://www.udemy.com/the-complete-react-native-and-redux-course))


## Back-end
* [Meteor](https://www.meteor.com) ([Udemy](https://www.udemy.com/meteor-react-tutorial))
* [Express](http://expressjs.com/ko) and [MongoDB](https://www.mongodb.com)  ([Udemy](https://www.udemy.com/the-complete-developers-guide-to-mongodb))
* [WP REST API](http://wp-api.org)
* nginx and aws
