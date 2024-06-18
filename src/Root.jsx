import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet';

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import style from './css/Root.module.css';

// 전역 스타일 정의
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
.root {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
}
`;

const AnimationContainer = styled.div`
    width: 100%;
    height: 100%;
`;

function Root() {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Helmet>
                <title>Damoa</title>
            </Helmet>
            <GlobalStyles />
            <Navbar />
            <TransitionGroup className={style.root}>
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
