import styled from 'styled-components';

// 컨테이너 스타일 정의
const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    gap: 24px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 1;
    gap: 10px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    gap: 2px;
`;

const Icon = styled.svg`
    flex-grow: 0;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    position: relative;
`;

const FilterLabel = styled.p`
    flex-grow: 1;
    width: 310px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    color: #999;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    flex-grow: 0;
    flex-shrink: 0;
    height: 48px;
    gap: 10px;
`;

const Button = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    gap: 10px;
    padding: 6px 12px;
    border-radius: 6px;
    background: #141414;
    border: 1px solid #262626;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    &:active {
        background-color: #262626;
        border: 1px solid red;
        transition: all 0.3s ease;
    }
`;

export default function Sort() {
    return (
        <Container>
            <Column>
                <FilterContainer>
                    <Icon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path
                            d="M14 12V19.88C14.04 20.18 13.94 20.5 13.71 20.71C13.6175 20.8027 13.5076 20.8762 13.3866 20.9264C13.2657 20.9766 13.136 21.0024 13.005 21.0024C12.874 21.0024 12.7444 20.9766 12.6234 20.9264C12.5024 20.8762 12.3925 20.8027 12.3 20.71L10.29 18.7C10.1809 18.5934 10.098 18.463 10.0477 18.319C9.9974 18.175 9.98107 18.0213 10 17.87V12H9.97001L4.21001 4.62C4.04762 4.41153 3.97434 4.14726 4.0062 3.88493C4.03805 3.6226 4.17244 3.38355 4.38001 3.22C4.57001 3.08 4.78001 3 5.00001 3H19C19.22 3 19.43 3.08 19.62 3.22C19.8276 3.38355 19.962 3.6226 19.9938 3.88493C20.0257 4.14726 19.9524 4.41153 19.79 4.62L14.03 12H14Z"
                            fill="#999999"
                        />
                    </Icon>
                    <FilterLabel>정렬</FilterLabel>
                </FilterContainer>
                <ButtonGroup>
                    <Button>조회순</Button>
                    <Button>최신순</Button>
                </ButtonGroup>
            </Column>
        </Container>
    );
}
