import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 25px;
    margin-left: 30px;
    margin-right: 30px;
`;
const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    position: relative;
    gap: 10px;
    padding: 40px;
    border-radius: 10px;
    background: #1a1a1a;
    border: 1px solid #262626;
`;

const TextBlock = styled.p`
    font-size: ${({ isTitle }) => (isTitle ? '24px' : '16px')};
    font-weight: ${({ isTitle }) => (isTitle ? '600' : '400')};
    color: ${({ isTitle }) => (isTitle ? '#999' : '#fff')};
    margin: 10px;
    max-width: 100%;
    @media (max-width: 768px) {
        font-size: ${({ isTitle }) => (isTitle ? '20px' : '14px')};
        margin: 5px;
    }
`;

export default function Notice() {
    return (
        <Container>
            <Box>
                <TextBlock isTitle>공지사항</TextBlock>
                <TextBlock>
                    리뷰 작성 시 유의사항: 상호 존중과 건전한 커뮤니티 문화 조성을 위해, 비방이나 욕설이 포함된 리뷰는
                    삼가해 주시기 바랍니다. 객관적이고 상세한 리뷰가 다른 이용자에게 큰 도움이 됩니다.
                </TextBlock>
            </Box>
        </Container>
    );
}
