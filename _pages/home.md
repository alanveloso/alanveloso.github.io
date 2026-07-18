---
permalink: /
title: "Início"
lang: pt-BR
translation_key: home
is_home: true
author_profile: false
projects_sidebar: true
---

{% if site.homepage == "blog" %}
  {% include base_path %}
  {% include lang.html %}
  {% if site.posts.size > 0 %}
    {% for post in site.posts %}
      {% include editorial-preview.html %}
    {% endfor %}
  {% else %}
    <p class="archive-empty">{{ ui.empty_posts }}</p>
  {% endif %}
{% else %}
  {% include about-content-pt.md %}
{% endif %}
