import { Outlet, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled, { createGlobalStyle } from 'styled-components';
import style from '../src/css/Root.module.css';

import { Helmet } from 'react-helmet';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

// 전역 스타일로 CSS 정의
const GlobalStyles = createGlobalStyle`
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0;
  transition: opacity 250ms ease-out;
}
`;

const AnimationContainer = styled.div`
    width: 100%;
    height: 100%;
`;

function Root() {
    const location = useLocation();

    return (
        <>
            <Helmet>
                <title>Damoa</title>
            </Helmet>
            <GlobalStyles />
            <Navbar />
            <TransitionGroup>
                <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                    <AnimationContainer>
                        <Outlet />
                    </AnimationContainer>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </>
    );
}

export default Root;
