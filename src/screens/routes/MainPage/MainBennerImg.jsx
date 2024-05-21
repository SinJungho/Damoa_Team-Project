import styled from 'styled-components';
import BennerImage from '../../img/Netflix.png'; // 이미지 파일의 경로를 올바르게 설정해주세요
import { Link } from 'react-router-dom';

const Image = styled.img`
    width: 1270px;
    height: 709px;
    margin-top: 20px;
    border-radius: 20px;
    object-fit: cover; /* 이미지를 컨테이너에 맞게 조정 */
    object-position: center; /* 이미지를 가운데 정렬 */
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1; /* 텍스트 위로 이미지가 나타나도록 함 */
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    max-width: 1280px;
    height: 709px;
    overflow: hidden;
    gap: 24px;
    padding: 40px;
    border-radius: 12px;
    background: linear-gradient(to top, #141414 0%, rgba(20, 20, 20, 0) 100%);
    margin: auto; /* 페이지 가운데로 이동 */
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    gap: 2px;
    padding: 0 100px;
`;

const Heading = styled.p`
    align-self: stretch;
    width: 1000px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: #fff;
`;

const Subheading = styled.p`
    align-self: stretch;
    width: 1000px;
    font-size: 16px;
    text-align: center;
    color: #999;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`;

const Button = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    padding: 14px 20px;
    border-radius: 8px;
    background: #e50000;
`;

const Icon = styled.svg`
    width: 24px;
    height: 24px;
    fill: white;
`;

const ButtonText = styled.p`
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    color: #fff;
`;

const ButtonTextLink = styled(Link)`
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    color: #fff;
`;

export default function MainBenner() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // 최상단으로 스크롤
            behavior: 'smooth', // 부드러운 스크롤 효과 적용
        });
    };
    return (
        <Container>
            <Image src={BennerImage} alt="Benner Image" />
            <ContentWrapper>
                <Heading>지금 최신 작품들을 만나보세요.</Heading>
                <Subheading>여러가지 최신 작품들의 평점들을 손 쉽게 확인 할 수 있어요.</Subheading>
            </ContentWrapper>
            <ButtonWrapper>
                <ButtonTextLink to="/review" onClick={scrollToTop}>
                    <Button>
                        <Icon viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.49999 2.39999C9.65912 2.39999 9.81174 2.46321 9.92426 2.57573C10.0368 2.68825 10.1 2.84086 10.1 2.99999V5.39999C10.1 5.55912 10.0368 5.71174 9.92426 5.82426C9.81174 5.93678 9.65912 5.99999 9.49999 5.99999C9.34086 5.99999 9.18825 5.93678 9.07573 5.82426C8.96321 5.71174 8.89999 5.55912 8.89999 5.39999V2.99999C8.89999 2.84086 8.96321 2.68825 9.07573 2.57573C9.18825 2.46321 9.34086 2.39999 9.49999 2.39999ZM4.83199 4.33199C4.88773 4.27612 4.95394 4.23179 5.02683 4.20154C5.09973 4.17129 5.17787 4.15572 5.25679 4.15572C5.33571 4.15572 5.41386 4.17129 5.48675 4.20154C5.55965 4.23179 5.62586 4.27612 5.68159 4.33199L7.37839 6.02999C7.4357 6.08534 7.48141 6.15155 7.51285 6.22475C7.5443 6.29795 7.56085 6.37669 7.56154 6.45635C7.56224 6.53602 7.54705 6.61503 7.51689 6.68877C7.48672 6.7625 7.44217 6.8295 7.38583 6.88583C7.32949 6.94217 7.2625 6.98672 7.18877 7.01689C7.11503 7.04706 7.03602 7.06224 6.95635 7.06154C6.87669 7.06085 6.79795 7.0443 6.72475 7.01286C6.65155 6.98141 6.58534 6.9357 6.52999 6.87839L4.83319 5.18159C4.72071 5.06908 4.65752 4.91649 4.65752 4.75739C4.65752 4.5983 4.72071 4.44571 4.83319 4.33319M14.1692 4.33319C14.2251 4.38893 14.2694 4.45514 14.2996 4.52803C14.3299 4.60093 14.3455 4.67907 14.3455 4.75799C14.3455 4.83691 14.3299 4.91506 14.2996 4.98795C14.2694 5.06085 14.2251 5.12706 14.1692 5.18279L12.4688 6.87839C12.4134 6.9357 12.3472 6.98141 12.274 7.01286C12.2008 7.0443 12.1221 7.06085 12.0424 7.06154C11.9628 7.06224 11.8838 7.04706 11.81 7.01689C11.7363 6.98672 11.6693 6.94217 11.613 6.88583C11.5566 6.8295 11.5121 6.7625 11.4819 6.68877C11.4517 6.61503 11.4366 6.53602 11.4372 6.45635C11.4379 6.37669 11.4545 6.29795 11.4859 6.22475C11.5174 6.15155 11.5631 6.08534 11.6204 6.02999L13.3172 4.33319C13.4297 4.22071 13.5823 4.15752 13.7414 4.15752C13.9005 4.15752 14.0531 4.22071 14.1656 4.33319M2.89999 8.99999C2.89999 8.84086 2.96321 8.68825 3.07573 8.57573C3.18825 8.46321 3.34086 8.39999 3.49999 8.39999H5.89999C6.05912 8.39999 6.21174 8.46321 6.32426 8.57573C6.43678 8.68825 6.49999 8.84086 6.49999 8.99999C6.49999 9.15912 6.43678 9.31174 6.32426 9.42426C6.21174 9.53678 6.05912 9.59999 5.89999 9.59999H3.49999C3.34086 9.59999 3.18825 9.53678 3.07573 9.42426C2.96321 9.31174 2.89999 9.15912 2.89999 8.99999ZM10.868 8.75999C10.6929 8.61413 10.4798 8.52115 10.2538 8.49194C10.0278 8.46273 9.79808 8.49849 9.59162 8.59505C9.38517 8.6916 9.21048 8.84495 9.088 9.03716C8.96552 9.22937 8.90031 9.45248 8.89999 9.68039V20.6016C8.89999 21.7104 10.274 22.2264 11.0036 21.3924L13.4348 18.6132C13.6039 18.4204 13.8123 18.2659 14.0459 18.1601C14.2796 18.0544 14.5331 17.9998 14.7896 18H18.6428C19.7648 18 20.2736 16.596 19.4108 15.8784L10.868 8.75999ZM10.1 20.604V9.68039L18.6428 16.8H14.7896C14.3619 16.7999 13.9391 16.8913 13.5495 17.0681C13.16 17.2448 12.8128 17.5028 12.5312 17.8248L10.1 20.604Z" />
                        </Icon>
                        <ButtonText>리뷰 보러 가기</ButtonText>
                    </Button>
                </ButtonTextLink>
            </ButtonWrapper>
        </Container>
    );
}
