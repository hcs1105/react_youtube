# 유투브 프로젝트
리액트와 유튜브 API를 이용하여 유튜브 사이트를 만든 개인 프로젝트입니다.

## 소스 내려받기
```
git clone https://github.com/hcs1105/react_youtube.git
```

## 유튜브 프로젝트 실행하기 
```
yarn start
```
※ Note: yarn start가 실행되지 않다면 **yarn install를 입력**하고 다시 **yarn start를 실행**해 주세요.

## 유튜브 프로젝트 작업물 보기 
https://hcs1105-react-youtube.netlify.app

## 유튜브 프로젝트 설명

### 작업 기간
2023년 4월 19일 ~ 2023년 4월 28일

### 작업할 때 사용한 라이브러리 및 프레임워크
* CRA(Create React App) - https://create-react-app.dev/docs/getting-started
* tailwind CSS 프레임워크 - https://tailwindcss.com
* timeago.js 라이브러리 - https://github.com/hustcc/timeago.js
* axios 라이브러리 - https://github.com/axios/axios
* React Router - https://reactrouter.com/en/main
* React Query - https://tanstack.com/query/latest
* Youtube API - https://developers.google.com/youtube/v3/getting-started?hl=ko
* React icons - https://react-icons.github.io/react-icons/

### 주요 기능gg

#### 공통
  * timeage.js 라이브러리를 통해 Youtube 영상 게시일자 표기(ex. 1일 전, 14시간 전, 3개월 전)
  * axois 라이브러리를 이용하여 Youtube API 활용
  * tailwind CSS 프레임워크를 이용하여 반응형 웹 구현

#### 메인 화면
  * 실시간으로 이용 중인 Hot Trend 유튜브 영상을 25개씩 배치
  * React Query 라이브러리를 이용하여 검색 기능 추가
  
#### 상세 화면
  * Youtube API에서 제공하는 파라미터를 통해 선택한 유튜브 영상의 제목, 설명 등을 동적으로 구현
  * useQuery 메서드를 이용하여 연관 유튜브 영상 목록 추