---
layout: page
title: 'Tag/Category Index'
---
<html>
{% assign date_format = site.date_format | default: "%B %-d, %Y" %}

{%- capture site_tags -%}
    {%- for tag in site.tags -%}
        {{- tag | first -}}{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
{%- endcapture -%}
{%- assign tags_list = site_tags | split:',' | sort -%}

{%- for tag in tags_list -%}
    <a href="#{{- tag -}}" class="btn btn-primary tag-btn"><i class="fas fa-tag" aria-hidden="true"></i>&nbsp;{{- tag -}}&nbsp;({{site.tags[tag].size}})</a>
{%- endfor -%}

<div id="full-tags-list">
{%- for tag in tags_list -%}
    <h2 id="{{- tag -}}" class="linked-section">
        <i class="fas fa-tag" aria-hidden="true"></i>
        &nbsp;{{- tag -}}&nbsp;({{site.tags[tag].size}})
    </h2>
    <div class="post-list">
        {%- for post in site.tags[tag] -%}
            <div class="tag-entry">
                <a href="{{ post.url | relative_url }}">{{- post.title | strip_html -}}</a>
                <div class="entry-date">
                    <time datetime="{{- post.date | date_to_xmlschema -}}">{{- post.date | date: date_format -}}</time>
                </div>
            </div>
        {%- endfor -%}
    </div>
{%- endfor -%}
</div>


{%- capture site_categories -%}
    {%- for category in site.categories -%}
        {{- category | first -}}{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
{%- endcapture -%}
{%- assign categories_list = site_categories | split:',' | sort -%}


{%- for category in categories_list -%}
    <a href="#{{- category -}}" class="btn btn-primary tag-btn"><i class="fas fa-tag" aria-hidden="true"></i>&nbsp;{{- category -}}&nbsp;({{site.categories[category].size}})</a>
{%- endfor -%}

<div id="full-categories-list">
{%- for category in categories_list -%}
    <h2 id="{{- category -}}" class="linked-section">
        <i class="fas fa-list" aria-hidden="true"></i>
        &nbsp;{{- category -}}&nbsp;({{site.categories[category].size}})
    </h2>
    <div class="post-list">
        {%- for post in site.categories[category] -%}
            <div class="category-entry">
                <a href="{{ post.url | relative_url }}">{{- post.title | strip_html -}}</a>
                <div class="entry-date">
                    <time datetime="{{- post.date | date_to_xmlschema -}}">{{- post.date | date: date_format -}}</time>
                </div>
            </div>
        {%- endfor -%}
    </div>
{%- endfor -%}
</div>
</html>
