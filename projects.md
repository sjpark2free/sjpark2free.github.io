---
layout: page
title: PROJECTS
subtitle: 그 동안 진행 하였던 큰 프로젝트들
---

### 프로젝트

{% assign posts = site.posts | sort: "date" | reverse %}

<html>
  <ul class="timeline">
      {% for post in posts %}
        {% for tag in post.tags %}
             {% if tag == "Project" %}

               <li class="timeline-item right">
          <div class="timeline-content">
              <strong class="post-date">{{ post.date | date: "%b %d, %Y" }}</strong>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              <div class="post-excerpt">
                {{ post.excerpt | markdownify }} <!-- Ändere die Anzahl der Wörter nach Bedarf -->
              </div>
          </div>
        </li>

            {% endif %}
        {% endfor %}
    {% endfor %}
            
       
       
       
     
  </ul>
</html>
