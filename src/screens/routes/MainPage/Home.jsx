import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Navbar from './Navbar';
import MainBenner from './MainBennerImg';
import LeftNotice from './LeftNotice';
import RightNotice from './RightNotice';
import ContentDisplay from './ContentDisplay';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

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

const Main = styled.div`
    width: 100%;
    margin: 0 auto; // 가운데 정렬
`;

const Layout = styled.div`
    display: flex;
    justify-content: space-between; // 요소들을 양 끝으로 배치
    align-items: start; // 요소들을 상단에 정렬
    height: 140vh; // 화면 전체 높이 사용
    margin: 200px 30px 0 30px;
`;

export default function Home() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <Helmet>
                    <title>Damoa</title>
                </Helmet>
                <Navbar />
                <MainBenner />
                <Layout>
                    <LeftNotice />
                    <RightNotice />
                </Layout>
                <ContentDisplay />
                <Footer />
            </Main>
        </>
    );
}
