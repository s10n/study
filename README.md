# jekyll-base
## 소개
이 프로젝트는 [Jekyll](https://jekyllrb.com/) 웹사이트를 신속히 만들기 위한 템플릿입니다.

## 시작하기
### 프로젝트 설정
이 프로젝트를 클론했다면 아래 파일들을 편집해서 프로젝트 설정을 해주세요:
```
_config.yml
bower.json
package.json
README.md
```

### 패키지 설치
이 프로젝트를 활용하려면 [Bower](http://bower.io/)와 [Grunt](http://gruntjs.com/)가 필요합니다.
```
npm install -g bower grunt-cli
```

Bower와 Grunt를 설치했으면 다음 명령어를 통해 필요한 패키지를 설치합니다:
```
npm install
```
위 명령어는 `bower install && grunt build`를 포함하고 있습니다.
