---
category: Jekyll
title: 기본 문법
layout: study
---

## 사이트 정보
{% highlight liquid %}
{% raw %}
{{ site.title }}
{{ site.email }}
{{ site.description }}
{% endraw %}
{% endhighlight %}

## 모든 페이지 목록 만들기
{% highlight liquid %}
{% raw %}
{% for my_page in site.pages %}
  {% if my_page.title %}
    <a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>
  {% endif %}
{% endfor %}
{% endraw %}
{% endhighlight %}

## 코드 하이라이팅
구문 강조 리퀴드 태그를 사용한다:
{% highlight liquid %}
{% raw %}
{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}
{% endraw %}
{% endhighlight %}
산출물은 이렇다:
{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

## 페이지 내 사전
{% highlight markdown %}
{% raw %}
Check out the [Jekyll docs][jekyll-docs].
[jekyll-docs]: http://jekyllrb.com/docs/home
{% endraw %}
{% endhighlight %}

## 인클루드 및 파라미터
{% highlight liquid %}
{% raw %}
{% if site.github_username %}
  {% include icon-github.html username=site.github_username %}
{% endif %}
{% endraw %}
{% endhighlight %}
위처럼 파라미터를 전달하면서 호출하면 `_includes/icon-github.html`에서는 아래처럼 파라미터를 받아 출력할 수 있다.
{% highlight liquid %}
{% raw %}
{{ include.username }}
{% endraw %}
{% endhighlight %}
