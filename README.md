# Damoa - 신정호

### 프로젝트 목차

- [Damoa - 신정호](#damoa---신정호)
  - [프로젝트 목차](#프로젝트-목차)
  - [해야 할 것](#해야-할-것)
  - [완성 한 것](#완성-한-것)
  - [추가 할 만한 기능](#추가-할-만한-기능)
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

### 추가 할 만한 기능

- 사용자 프로필 페이지
- 시청 목록 / 찜 리스트

### 문제 발생 / 고민 사항

- NavBar
  - 미디어 쿼리 적용 안됨.
  - 로그인, 회원 가입 디자인 고민 필요 (크기, 색상)
- LoginPage
  - 모달창 위치 조정 필요

### 수정사항

**06.11**

- 전체적인 CSS 수정
  - button 태그가 아닌데 button 역할을 하고 있는 a,div 태그 등 수정
    - 웹 표준화 및 접근성에 위배되기 때문
  - 텍스트간 행간이 좁은 곳이 발견되어 가독성이 저하된다고 사료됨
    - flex 지정 후 gap을 부여해 행간 생성
  - button padding 통일화
    - padding 통일이 되지 않아 크기가 살짝씩 달랐던 부분 수정

**06.10**

- UpcomingPage
  - pull하는 과정에서 css가 겹쳐 margin 새로 추가
- UpcomingReleases
  - 제목, 개봉일, 내용 공백이 없어서 가독성이 낮다고 판단해 gap을 추가해 구분을 지어 가독성 높임
  - 내용이 없을 경우 요소 너비가 줄어드는 현상이 발견되 전체 너비를 새로 추가해 내용이 있든, 없든 같은 너비를 가지도록 수정
- UpcomingContent
  - 기존 로그인, 회원 가입 Modal창에 닫기 버튼을 없이 만들었기 때문에 개봉장 상세 내용이 있는 Modal창에도 통일성을 주기 때문에 닫기 버튼(X)을 제거
    - 로그인, 회원가입 Modal창과 똑같이 Modal창 바깥 영역을 클릭하거나, esc 버튼을 누르면 닫힘
  - Navbar 컴포넌트가 UpcomingContent 컴포넌트보다 z-index 값이 더 높아 Modal창이 가리는 현상을 발견
    - Navbar z-index 값을 수정
- Navbar
  - z-index 고정 (수정이유 UpcomingContent에 기록함)
  - 내부 위치 변경
    - 기존에는 가운데에 리뷰 버튼이 위치했으나, 메인 화면으로 가는 버튼을 다시 가운데로 수정을 완료
- PostDetail
  - button css가 다른 module.css를 참조하고 있어서 해당하는 active 효과를 추가
  - 답글 쓰기 버튼 위치가 고정이 되어 정렬도 맞지 않고, 해상도가 줄어들 시 깨질 것이라 판단
    - 새로운 상위 태그를 생성해 flex로 정렬을 추가 -> 반응형 되는 것을 확인
- Font 추가 및 Noto Sans 폰트 적용
- ReviewPageRating, Body
  - scroll bar 스타일링이 적용되지 않은 오류를 확인 다시 수정
- HotContent
  - api 요청 시 대기 문구 색상이 검은색이라 보이지 않아 흰색으로 수정

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
