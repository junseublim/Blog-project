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

- koa
- koa-bodyparser
- koa-router
- koa-static
- joi
- jsonwebtoken
- bcrypt
- sanitize-html

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