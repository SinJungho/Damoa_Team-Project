import { Outlet, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled, { createGlobalStyle } from 'styled-components';

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
    width: 100%; // 필요에 따라 조정
    height: 100%; // 필요에 따라 조정
`;

function Root() {
    const location = useLocation();

    return (
        <>
            <GlobalStyles />
            <TransitionGroup>
                <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                    <AnimationContainer>
                        <Outlet />
                    </AnimationContainer>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
}

export default Root;
