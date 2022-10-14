# Kolon Industries

## 코오롱 인더스트리 포트폴리오 사이트
---
### ver 1.0.0 release in 2022-10-14
### 주요 기능

<ol>
<li>react-router-dom을 사용한 SPA구축</li>
<li>채용정보 게시판 기능(글쓰기, 수정, 삭제 가능)</li>
<li>공공 데이터 포털 주가 api를 이용한 최근 주식 정보 확인</li>
</ol>

### 버그 및 이슈

<ol>
<li>주가 api 데이터를 요청 시 CORS 오류 발생</li>
<li>CORS 이슈 해결을 위해 proxy 서버 및 node.js로 자체 서버를 구축하였으나 api 데이터가 아닌 index.html 파일 자체의 데이터를 불러오는 오류 발생</li>
<li>위와 같은 이유로 투자정보 메뉴에서 TypeError 발생</li>
</ol>