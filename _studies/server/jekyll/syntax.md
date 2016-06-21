---
category: Jekyll
title: 기본 문법
reference:
  title: Jekyll base
  url: https://github.com/s10n/jekyll-base
---


## 사이트 정보
```liquid{% raw %}
{{ site.title }}
{{ site.email }}
{{ site.description }}
{% endraw %}```


## 모든 페이지 목록 만들기
```liquid{% raw %}
{% for my_page in site.pages %}
  {% if my_page.title %}
    <a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>
  {% endif %}
{% endfor %}
{% endraw %}```


## 카테고리별 목록 만들기
`assign`으로 배열을 생성하고, `group_by` 필터를 적용한다.

```liquid{% raw %}
{% assign cats = site.my_collections | group_by: 'category' %}

{% for cat in cats %}
  <h2>{{ cat.name }}</h2>
  <ul>
    {% for article in cat.items %}
      <li><a href="{{ article.url | prepend: site.baseurl }}">{{ article.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
{% endraw %}```

> 참조
>
> 이 때, [sort 필터](https://help.shopify.com/themes/liquid/filters/array-filters#sort)를 이용하여 정렬의 기준을 정할 수 있다.


## 코드 하이라이팅
구문 강조 리퀴드 태그를 사용한다:

```liquid{% raw %}
{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}
{% endraw %}```

산출물은 이렇다:

```ruby
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
```


## 필터
> 참고
>
> [Templates - Jekyll](https://jekyllrb.com/docs/templates/#filters)

### 마크다운 문자열을 HTML로 변환
```liquid{% raw %}
{{ page.excerpt | markdownify }}
{% endraw %}```


## 페이지 내 사전
```markdown{% raw %}
Check out the [Jekyll docs][jekyll-docs].
[jekyll-docs]: http://jekyllrb.com/docs/home
{% endraw %}```


## 인클루드 및 파라미터
```liquid{% raw %}
{% if site.github_username %}
  {% include icon-github.html username=site.github_username %}
{% endif %}
{% endraw %}```
위처럼 파라미터를 전달하면서 호출하면 `_includes/icon-github.html`에서는 아래처럼 파라미터를 받아 출력할 수 있다.

```liquid{% raw %}
{{ include.username }}
{% endraw %}```


## 추가 정보
다음 링크를 통해 더 많은 스니핏을 얻을 수 있다.

* [https://jekyllrb.com/docs](https://jekyllrb.com/docs)
* [https://github.com/s10n/jekyll-base](https://github.com/s10n/jekyll-base)
* [https://github.com/mdo/jekyll-snippets](https://github.com/mdo/jekyll-snippets)
