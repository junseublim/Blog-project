# 리액트, Koa, mongoDB를 활용하여 만든 블로그 프로젝트

## How to run
```
$ cd blog-backend
$ yarn start
```

## 기능들

1. 메인 페이지: 게시글 리스트 보여줌
2. 헤더: 로그인, 로그아웃, 회원가입 기능 제공
3. 게시물 페이지: 게시글 읽기
4. 게시물 작성: 게시글 제목, 내용, 태그 입력 가능
5. 게시글 수정 및 삭제: 게시글 작성자로 로그인시 게시글 수정, 삭제 가능
6. Pagination: 하단에 페이지네이션 기능 제공

## 사용한 라이브러리 리스트

### 백엔드

- koa : node.js 웹프레임워크
- koa-bodyparser: request body 내에 json 형식의 데이터를 파싱해주는 라이브러리
- koa-router: koa에서 라우팅을 돕는 라이브러리
- jsonwebtoken : JWT 토큰을 만들기 위해 사용
- bcrypt : 유저 비밀번호 단뱡향 해싱을 위한 라이브러리
- sanitize-html : HTML 필터링 위한 라이브러리
- mongoose : MongoDB 기반 ODM 라이브러리
- dotenv : 환경변수들을 파일에 넣고 사용할 수 있게 해주는 개발 도구 
- koa-static : 정적인 파일들을 처리해주는 미들웨어 
- joi : 스키마 필드 검증을 위한 라이브러리

### 프론트엔드

- react
- react-router-dom
- react-helmet-async
- immer
- axios
- qs
- quill
- redux
- react-redux
- redux-actions
- redux-saga    
- styled-components