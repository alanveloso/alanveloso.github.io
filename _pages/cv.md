---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Formação
======
* Doutorado em Ciência da Computação, Universidade Federal do Pará
* Mestrado em Ciência da Computação, Universidade Federal do Pará, 2021
* Bacharelado em Ciência da Computação, Universidade Federal do Pará, 2019
* Técnico em Telecomunicações, Instituto Federal do Pará, 2014

Afiliações
======
* Rede Nacional de Ensino e Pesquisa (RNP)

Interesses de pesquisa
======
* Blockchain
* Sistemas multiagente
* Federated Learning
* Redes de computadores
* Inteligência computacional

Publicações
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Palestras
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Ensino
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
