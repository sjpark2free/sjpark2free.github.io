---
layout: page
title: PROJECTS
subtitle: 그 동안 진행 하였던 큰 프로젝트들
---

### 프로젝트

- 2002   : [삼성 테크윈 1공장]() : POP System, SAP ABAP
- 2003   : [대한 솔루션](http://dhsol.com) : PLM 구축 , BOM/Documents,설계 변경 관리 업무 진행
- 2004   : [삼성 SDS](https://www.samsungsds.com/kr/security-operation-center-consulting/security-operation-center-consulting.html) : SOC  사업부 :  : PLM 구축 . PL 업무 수행 , BOM/Documents,설계 변경 관리 업무 진행
- 2006   : [TKE (티센 크루프 엘레 베이터 - 글로벌 구축)](https://www.tkelevator.com/kr-ko/) : PLM 구축 , SAP ERP, BOM/Documents,설계 변경 관리 업무 진행
- 2007   : [영신 정공](http://www.ys-kr.com) : PLM 구축 , CATIA/CAA , BOM/Documents,설계 변경 관리 업무 진행
- 2008   : [TKE (티센 크루프 엘레 베이터 - 글로벌 구축)](https://www.tkelevator.com/kr-ko/) : PLM 구축 , SAP ERP, BOM/Documents,설계 변경 관리 업무 진행
- 2011   : [세메스](https://www.semes.com) :반도체 장비 관리 솔루션(: PLM 구축 , Auto Create BOM,설계 변경 관리 업무 진행)
- 2012   : [만도](https://hlmando.com/ko/main.do)  : PLM 구축 , SAP ERP, CAA ,BOM/Documents,설계 변경 관리 업무, 모바일 업무 지원
- 2013 ~ : [만도](https://hlmando.com/ko/main.do)  : PLM 구축 , SAP ERP, CAA ,BOM/Documents,설계 변경 관리 업무, 모바일 업무 지원



{% assign posts = site.posts | sort: "date" | reverse %}

<html>
  <ul class="timeline">
      {% for post in posts %}
        <li class="timeline-item right">
          <div class="timeline-content">
              <strong class="post-date">{{ post.date | date: "%b %d, %Y" }}</strong>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              <div class="post-excerpt">
                {{ post.excerpt | markdownify }} <!-- Ändere die Anzahl der Wörter nach Bedarf -->
              </div>
          </div>
        </li>
      {% endfor %}
  </ul>
</html>