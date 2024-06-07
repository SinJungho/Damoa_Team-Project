# Damoa - 신정호

### 프로젝트 목차

- [Damoa - 신정호](#damoa---신정호)
  - [프로젝트 목차](#프로젝트-목차)
  - [해야 할 것](#해야-할-것)
  - [완성 한 것](#완성-한-것)
  - [문제 발생 / 고민 사항](#문제-발생--고민-사항)
  - [수정사항](#수정사항)
  - [폴더 트리 구조](#폴더-트리-구조)

### 해야 할 것

- css 리팩토링
- 반응형 웹으로 수정

### 완성 한 것

- 로그인, 회원 가입 폼 완성
- 로그인, 회원 가입 하러 가기 버튼 누를 시 해당하는 모달 창으로 이동
- 공지사항 UI 구성 및 구현
- 기대되는 개봉작 페이지 완성

- 05.30

  - 이전까지 정호 코드랑 결합
  - MainPage,ReviewPage LayOut 컴포넌트 및 vertical 컴포넌트 분리
  - 리드미에 컴포넌트 jsx 설명 추가
  - LoginForm , LoginPage 추가 -> Navbar 컴포넌트 에 로그인 버튼 추가
  - SignUpForm 추가 -> Navbar 컴포넌트에 회원가입 버튼 추가
  - 로그인 ,회원가입 버튼 css 추가
  - Navbar 반응형 구현 완료

- 사용자 프로필 페이지
- 시청 목록 / 찜 리스트

### 문제 발생 / 고민 사항

- NavBar
  - 미디어 쿼리 적용 안됨.
  - 로그인, 회원 가입 디자인 고민 필요 (크기, 색상)
- LoginPage
  - 모달창 위치 조정 필요

### 수정사항

**06.03**

- WritingPageReview - 리뷰 작성 게시판 완료
  - 별점 버튼 추가 완료
- CSS 수정
  - 각 페이지 마다 margin, padding 조절

**06.03**

- UpcomingPage
  - 기대되는 개봉작 페이지 구현 완료

**06.02**

- Navbar - 각 Container 별 비율 및 위치 조정
  - menuContainer 안 요소가 추가 되어도 비율 및 위치 유지
- App 각 컨텐츠 별 margin 추가
  - 간격을 두어 직관적인 효과 추가
  - 간격이 일정하지 않아 분잡함
- Layout - height 값 제거
  - 고정된 높이 값을 주게 될 경우 컴포넌트 끼리 겹치거나 비율이 깨지는 문제 발생
  - **heigth 값 주기 말기**
- Date
  - p 태그로만 되어 있어서 비동적인 모습이기에 input 태그로 변경해 동적인 작업 수행 가능

**05.31**

- SignUpForm, LoginForm - 회원 가입 Modal 창에서 로그인하러 가기, 로그인 Modal 창에서 회원가입 하러 가기 버튼 누를 시 해당 하는 Modal창 이동 기능 구현 완료
- 커스텀 스크롤바 추가
  - 사이트 컬러에 맞게 스크롤바 변경
- NoticePage - 공지사항 페이지 완성
  - Notice => NoticeBox 이름 변경
    - 공지사항 페이지가 아니라 게시글 컴포넌트이기 때문에 파일이름 변경

**05.30**

- LoginForm - 로그인 폼 완성
- SignUpForm - 회원가입 폼 완성
- LoginPage - 로그인, 회원가입 모달 창 기능 구현 완료

**05.29**

- ContentDisplay - 버튼 효과 및 css 코드 수정
- ContentDisplay - 반응형으로 수정 완료
- Navbar - 내부 요소 위치 조정
  - logo / icon / notice => logo / notice / icon
- MainBanner, Review - div 또는 a 태그 => button 태그로 수정 및 active 효과 추가 및 수정

**05.28**

- 라우터 경로 추가 및 수정
- Footer 반응형으로 수정
- kjs => main branch로 이동

**05.27**

- UpcomigReleasePage 컴포넌트 Release Page 폴더로 이동
- UpcomigReleasePage 컴포넌트 이름 변경
  - UpcomigReleasePage => Release Page
- 라우터 Community 경로 추가
- Community 컴포넌트 생성

### 폴더 트리 구조

- Component
  - Board,jsx
    - 커뮤니티 페이지의 커뮤니티 컴포넌트
  - ContentDisplay.jsx
    - 메인 페이지의 하단쪽 디스플레이 컴포넌트
  - Date.jsx
    - 중앙 우측 날짜 컴포넌트 (공용)
  - Footer.jsx
    - 하단 컴포넌트 (공용)
  - Genre.jsx
    - 언어 컴포넌트 (공용)
  - HotContent.jsx
    - 메인 페이지의 지금 인기 있는 장르 컴포넌트
  - LoginForm.jsx
    - 상단바 로그인 내용 컴포넌트 (공용)
  - LoginPage.jsx
    - 상단바 로그인 , 회원가입 컴포넌트 (공용)
  - MainBennerImg.jsx
    - 메인 페이지의 배경 이미지 및 글씨 및 리뷰이동 컴포넌트
  - MainReview.jsx
    - 메인 페이지의 리뷰 컴포넌트
  - MainRightNotice.jsx
    - 메인 페이지 오른쪽 컴포넌트 모음 컴포넌트
  - Navbar.jsx
    - 상단 컴포넌트 (공용)
  - NoticeBox.jsx
    - 공지사항 페이지의 공지사항 컴포넌트 (메인 페이지 공지사항이랑 공유)
  - Rating.jsx
    - 중앙 우측 0.5 ~ 5점 별점 컴포넌트
  - ReviewPageReview.jsx
    - 리뷰 페이지의 리뷰 컴포넌트
  - ReviewPageReviewText.jsx
    - 리뷰 페이지의 리뷰 글짜 컴포넌트
  - SignUpForm.jsx
    - 상단바 회원가입 컴포넌트 (공용)
  - Sort.jsx
    - 리뷰 페이지의 정렬 컴포넌트
  - UpcomigReleases.jsx
    - 메인 페이지의 기대되는 개봉작 컴포넌트
  - UpcomingContent.jsx
    - 기대되는 개봉작 페이지의 내용 컴포넌트
  - WritingPage.jsx
    - 커뮤니티 페이지의 글쓰기 페이지
  - WritingPageReview.jsx
    - 리뷰 페이지의 리뷰 쓰기 페이지
