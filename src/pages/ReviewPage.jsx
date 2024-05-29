import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Sort from '../component/Sort';
import Language from '../svg/Language';
import Rating from '../component/Rating';
import Genre from '../component/Genre';
import app from '../css/App.module.css';
import ReviewText from '../component/ReviewPageReviewText';
import ReviewComponent from '../component/ReviewPageReview';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}
body {
    background-color: #141414;
    margin: 0 auto;
}
`;

const Layout = styled.div`
    display: flex;
    justify-content: space-between; // 요소들을 양 끝으로 배치
    align-items: start; // 요소들을 상단에 정렬
    height: 180vh; // 화면 전체 높이 사용
    margin: 200px 30px 0 30px;
`;

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: -120px;
`;

export default function Review() {
    return (
        <>
            <GlobalStyle />
            <Layout>
                {/* Right Notice */}
                <VerticalContainer>
                    <ReviewText />
                    <ReviewComponent />
                </VerticalContainer>
                {/* Left Notice */}
                <div className={app.Rivewbg}>
                    <Sort />
                    <Language />
                    <Rating />
                    <Genre />
                </div>
            </Layout>
        </>
    );
}
