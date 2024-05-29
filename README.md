# Damoa

### 해야 할 것

- css 리팩토링
- 반응형 웹으로 수정
- 로그인 폼 구현
- 공지사항 UI 구성 및 구현

### 문제 발생

- NavBar
  - 미디어 쿼리 적용 안됨.

### 수정사항

- 05.27
  - UpcomigReleasePage 컴포넌트 Release Page 폴더로 이동
  - UpcomigReleasePage 컴포넌트 이름 변경
    - UpcomigReleasePage -> Release Page
  - 라우터 Community 경로 추가
  - Community 컴포넌트 생성
- 05.28
  - 라우터 경로 추가 및 수정
  - Footer 반응형으로 수정
  - kjs -> main branch로 이동
- 05.29
  - ContentDisplay - 버튼 효과 및 css 코드 수정
  - ContentDisplay - 반응형으로 수정 완료
  - Navbar - 내부 요소 위치 조정
    - logo / icon / notice -> logo / notice / icon
  - MainBanner, Review - div 또는 a 태그 -> button 태그로 수정 및 active 효과 추가 및 수정

### 추가할 만한 기능

- 사용자 프로필 페이지
- 커뮤니티 / 토론방
- 시청 목록 / 찜 리스트

### 폴더 트리 구조

- MainPage
  - LeftNotice
  - RigthNotice
    - 오른쪽 검색 필터 기능 컴포넌트
  - Release Page
    - 기대되는 개봉작 페이지
  - Review Page
    - 리뷰 페이지
