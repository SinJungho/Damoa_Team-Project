import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1439px;
    position: relative;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 24px;
    padding-bottom: 24px;
    margin: 0 auto;
`;

const LogoContainer = styled.div`
    width: 165.83px;
    height: 50px;
    position: relative;
    margin-left: -100px;
`;

const LogoSVG = styled.svg`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0px;
    top: 0px;
`;

const LogoSVGLink = styled(Link)`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0px;
    top: 0px;
`;

const LogoText = styled.p`
    position: absolute;
    left: 67px;
    top: 10px;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    color: #fff;
`;

const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
`;

const MenuSVG = styled.svg`
    width: 24px;
    height: 24px;
`;

const NoticeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 5px 30px;
    border-radius: 10px;
    background: #0f0f0f;
    border: 3px solid #1f1f1f;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const NoticeItem = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 16px 26px;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    text-decoration: none; // 링크 기본 스타일 제거
    transition: all 0.5s ease;
    background: ${({ isActive }) => (isActive ? '#262626' : 'transparent')};
    border: 0px solid #1a1a1a;

    &:hover {
        background-color: #262626;
    }
`;

const NoticeItemText = styled.p`
    font-size: 14px;
    text-align: left;
    color: #bfbfbf;
    font-weight: 500;
`;

export default function Navbar() {
    const [activeItem, setActiveItem] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // 경로가 바뀔 때마다 activeItem 상태를 업데이트합니다.
        const currentPath = location.pathname;
        if (currentPath === '/') {
            setActiveItem('main');
        } else if (currentPath.includes('/review')) {
            setActiveItem('review');
        } else if (currentPath.includes('/notice')) {
            setActiveItem('notice');
        } else if (currentPath.includes('/upcoming')) {
            setActiveItem('upcoming');
        }
    }, [location]);

    return (
        <Container>
            <LogoContainer>
                <LogoSVGLink to="/">
                    <LogoSVG viewBox="0 0 50 50" fill="#E60000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.4862 20.07C41.1363 9.11059 32.2559 0.266489 21.2596 0C20.9763 0 20.7431 0.216522 20.7431 0.499667L20.7264 7.86143C20.7264 8.22785 20.4432 8.51099 20.0766 8.52765C9.11363 8.86076 0.266578 17.7548 0 28.7475C0 29.0306 0.216594 29.2638 0.499833 29.2638L7.84738 29.2805C8.21393 29.2805 8.49717 29.5636 8.51383 29.93C8.86371 40.8894 17.7607 49.7335 28.7404 50C29.0237 50 29.2569 49.7835 29.2569 49.5003L29.2736 42.1386C29.2736 41.7722 29.5568 41.489 29.9234 41.4724C40.8864 41.1226 49.7334 32.2285 50 21.2525C50 20.9694 49.7834 20.7362 49.5002 20.7362L42.1526 20.7195C41.7861 20.7195 41.5028 20.4364 41.4862 20.07ZM28.5405 41.4224C22.3092 41.056 17.3109 35.9927 17.0776 29.7302C17.061 29.4637 16.8444 29.2472 16.5778 29.2472L9.24692 29.2305C8.86371 29.2305 8.56381 28.9141 8.58047 28.531C8.94702 22.3018 14.012 17.3051 20.2766 17.072C20.5431 17.0553 20.7597 16.8388 20.7597 16.5723L20.7764 9.22718C20.7764 8.8441 21.093 8.5443 21.4762 8.56096C27.7074 8.92738 32.7058 13.9907 32.939 20.2532C32.9557 20.5197 33.1723 20.7362 33.4389 20.7362L40.7697 20.7528C41.1529 20.7528 41.4528 21.0693 41.4362 21.4524C41.0696 27.8481 35.7547 32.928 29.2736 32.928L29.2569 40.7562C29.2403 41.1392 28.9237 41.439 28.5405 41.4224Z" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.5253 20.5689C20.5253 19.5612 21.6058 18.9223 22.4888 19.408L30.6441 23.8934C31.5593 24.3968 31.5593 25.7119 30.6441 26.2153L22.4888 30.7007C21.6058 31.1864 20.5253 30.5475 20.5253 29.5397V20.5689Z"
                            fill="white"
                        />
                    </LogoSVG>
                </LogoSVGLink>
                <LogoText>다모아</LogoText>
            </LogoContainer>
            <MenuContainer>
                <MenuSVG viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </MenuSVG>
                <MenuSVG viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </MenuSVG>
            </MenuContainer>
            <NoticeContainer>
                <NoticeItem isActive={activeItem === 'notice'} onClick={() => setActiveItem('notice')}>
                    <NoticeItemText>공지사항</NoticeItemText>
                </NoticeItem>
                <NoticeItem to="/" isActive={activeItem === 'main'} onClick={() => setActiveItem('main')}>
                    <NoticeItemText>메인 화면</NoticeItemText>
                </NoticeItem>
                <NoticeItem isActive={activeItem === 'review'} onClick={() => setActiveItem('review')}>
                    <NoticeItemText to="/Review">리뷰</NoticeItemText>
                </NoticeItem>
                <NoticeItem isActive={activeItem === 'upcoming'} onClick={() => setActiveItem('upcoming')}>
                    <NoticeItemText>기대되는 개봉작</NoticeItemText>
                </NoticeItem>
            </NoticeContainer>
        </Container>
    );
}
