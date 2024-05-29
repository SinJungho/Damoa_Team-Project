import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import MainBenner from '../component/MainBennerImg';
import ContentDisplay from '../component/ContentDisplay';
import Notice from '../component/Notice';
import UpcomigReleases from '../component/UpcomigReleases';
import Review from '../component/MainReview';
import Language from '../svg/Language';
import Rating from '../component/Rating';
import Genre from '../component/Genre';
import HotContent from '../component/HotContent';
import app from '../css/App.module.css';
import Date from '../component/Date';

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
    justify-content: space-between;
    align-items: start;
    height: 140vh;
    padding: 200px 30px 0 30px;
`;

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export default function MainPage() {
    return (
        <>
            <GlobalStyle />
            <MainBenner />
            <Layout>
                <VerticalContainer>
                    <Notice />
                    <UpcomigReleases />
                    <Review />
                </VerticalContainer>
                <div className={app.bg}>
                    <p className={app.title}>어떤 작품을 찾아볼까요?</p>
                    <Date />
                    <Language />
                    <Rating />
                    <Genre />
                    <HotContent />
                </div>
            </Layout>
            <ContentDisplay />
        </>
    );
}
