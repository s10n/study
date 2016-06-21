---
category: WordPress
title: 페이지를 불러오는 방법들
---


## get_pages

### 설명
* [Function Reference/get pages](http://codex.wordpress.org/Function_Reference/get_pages)
* 페이지들의 array를 return하는 함수
* 이 배열은 계층적으로 tree-like하지 않다.
* tree-like 방식으로 페이지 제목을 출력하려면, [wp_list_pages()](http://codex.wordpress.org/Function_Reference/get_pages)를 본다.
* 'post_type'을 명시함으로써 글이나 첨부파일도 반환할 수 있다.
* [get_posts()](http://codex.wordpress.org/Function_Reference/get_posts)와 비슷하지만, 몇몇 parameter 이름과 값이 다르다.

### 기본 사용법
```php
<?php get_pages( $args ); ?>
```
```php
<?php $args = array(
  'sort_order' => 'ASC',
  'sort_column' => 'post_title',
  'hierarchical' => 1,
  'exclude' => '',
  'include' => '',
  'meta_key' => '',
  'meta_value' => '',
  'authors' => '',
  'child_of' => 0,
  'parent' => -1,
  'exclude_tree' => '',
  'number' => '',
  'offset' => 0,
  'post_type' => 'page',
  'post_status' => 'publish'
);
$pages = get_pages($args);
```

### 예제: 드롭다운 리스트에 페이지들 표시하기
```php
<select name="page-dropdown" onchange='document.location.href=this.options[this.selectedIndex].value;'>
  <option value=""><?php echo esc_attr( __( 'Select page' ) ); ?></option>
  <?php
    $pages = get_pages();
    foreach ( $pages as $page ) {
      $option = '<option value="' . get_page_link( $page->ID ) . '">';
    $option .= $page->post_title;
    $option .= '</option>';
    echo $option;
    }
  ?>
</select>
```


## wp_list_pages

### 설명
* [Function Reference/wp list pages](http://codex.wordpress.org/Function_Reference/wp_list_pages)
* 페이지들의 리스트를 링크로 표시한다.
* 사이드바나 헤더를 커스터마이징할 때 흔히 사용된다.

### 기본 사용법
```php
<?php wp_list_pages( $args ); ?>
```
```php
<?php $args = array(
  'authors'      => '',
  'child_of'     => 0,
  'date_format'  => get_option('date_format'),
  'depth'        => 0,
  'echo'         => 1,
  'exclude'      => '',
  'include'      => '',
  'link_after'   => '',
  'link_before'  => '',
  'post_type'    => 'page',
  'post_status'  => 'publish',
  'show_date'    => '',
  'sort_column'  => 'menu_order, post_title',
  'title_li'     => __('Pages'),
  'walker'       => ''
); ?>
```

* Parameters: 일반적으로, arguments들은 get_pages로부터 상속받는다.

### 예제: 기본
* **title_li** parameter에 null 또는 빈 값을 줘서 wp_list_pages에 의해 생성되는 "페이지"라는 기본 제목을 숨길 수 있다.

```php
<ul>
<?php wp_list_pages('title_li='); ?>
</ul>
```


## wp_page_menu

### 설명
* [Function Reference/wp page menu](http://codex.wordpress.org/Function_Reference/wp_page_menu)
* 페이지들의 리스트를 링크로 표시하며, 페이지 목록에 자동으로 **홈(Home)**을 추가할 수 있다.
* 사이드바나 헤더를 커스터마이징할 때 흔히 사용된다.

### 기본 사용법
```php
<?php wp_page_menu( $args ); ?>
```
```php
<?php $args = array(
  'depth'       => 0,
  'sort_column' => 'menu_order, post_title',
  'menu_class'  => 'menu',
  'include'     => '',
  'exclude'     => '',
  'echo'        => true,
  'show_home'   => false,
  'link_before' => '',
  'link_after'  => '' );
?>
```
* 반환 값: (string) **echo** parameter를 false로 설정하면 메뉴 HTML을 반환한다.

### 예제: 페이지로 홈 표시하기
* 페이지 목록 앞에 '홈'을 표시한다.
* 페이지들은 `div.menu` 요소로 wrap된다.

```php
<h2>Page Menu</h2>
<?php wp_page_menu('show_home=1&menu_class=page-navi&sort_column=menu_order'); ?>
```
