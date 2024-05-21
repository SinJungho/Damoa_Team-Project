import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Button = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    gap: 4px;
    padding: 12px;
    border-radius: 6px;
    background: #e50000;
    border: 1px solid #262626;
    margin-right: 60px;
`;

const ButtonText = styled.p`
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: #fff;
`;

const Title = styled.p`
    flex-grow: 1;
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    color: #fff;
    margin: 0px 0px 0px 60px;
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    gap: 30px;
`;

export default function ReviewText() {
    return (
        <Header>
            <Title>한 줄 리뷰</Title>
            <Button to="/review">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 6V18M18 12L6 12"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <ButtonText>리뷰 쓰러 가기</ButtonText>
            </Button>
        </Header>
    );
}
