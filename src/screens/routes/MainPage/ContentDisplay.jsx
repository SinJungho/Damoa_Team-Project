import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 80px 60px;
    border-radius: 12px;
    background: #0f0f0f;
    border: 1px solid #262626;
    margin-top: 50px;
    margin-bottom: 70px;
    margin-left: 105px;
    margin-right: 105px;
`;

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`;

const Text = styled.p`
    align-self: stretch;
    width: 911px;
    font-size: ${(props) => (props.isLarge ? '28px' : '16px')};
    font-weight: ${(props) => (props.isLarge ? '700' : '400')};
    text-align: left;
    color: ${(props) => (props.isLarge ? '#fff' : '#999')};
`;

const ActionButton = styled.div`
    padding: 14px 20px;
    border-radius: 8px;
    background: #e50000;
    align-self: center;
`;

const ActionText = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #fff;
`;

export default function ContentDisplay() {
    return (
        <MainContainer>
            <TextSection>
                <Text isLarge>지금 바로 다양한 컨텐츠들을 보러 가봐요!</Text>
                <Text>이미 많은 분들이 여기 있는 컨텐츠를 보고 리뷰를 남겨주고 있어요!</Text>
            </TextSection>
            <ActionButton>
                <ActionText>지금 바로 보러가기</ActionText>
            </ActionButton>
        </MainContainer>
    );
}
