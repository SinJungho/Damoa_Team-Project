import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  gap: 25px;
  padding: 40px;
  border-radius: 10px;
  background: #1a1a1a;
  border: 1px solid #262626;
  margin-right: 30px;
  margin-left: 30px;
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

const Title = styled.p`
  flex-grow: 1;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #999;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const RoundButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  border-radius: 100px;
  background: #141414;
  border: 1px solid #262626;
  &:hover {
    background-color: #262626; // 호버 시 배경 색상 변경
  }
  &:active {
    background-color: #262626;
    border: 1px solid red;
    transition: all 0.3s ease;
  }
`;

const SvgIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  gap: 16px;
  padding: 30px;
  border-radius: 12px;
  background: #0f0f0f;
  border: 1px solid #262626;
`;

const ContentText = styled.p`
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 16px;
  text-align: left;
  color: #999;
`;

const BoldText = styled(ContentText)`
  width: 710px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export default function UpcomigReleases() {
  return (
    <Container>
      <Header>
        <Title>기대되는 개봉작</Title>
        <IconContainer>
          <RoundButton>
            <SvgIcon viewBox="0 0 20 20" fill="none">
              <path
                d="M16.25 10L3.75 10M3.75 10L9.375 15.625M3.75 10L9.375 4.375"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SvgIcon>
          </RoundButton>
          <RoundButton>
            <SvgIcon viewBox="0 0 20 20" fill="none">
              <path
                d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SvgIcon>
          </RoundButton>
        </IconContainer>
      </Header>
      <ContentBlock>
        <BoldText>한번 봐라 후회 하지 않는다.</BoldText>
        <ContentText>소년시대</ContentText>
        <ContentText>
          This movie was recommended to me by a very dear friend who went for
          the movie by herself. I went to the cinemas to watch but had a
          houseful board so couldn’t watch it.
        </ContentText>
      </ContentBlock>
    </Container>
  );
}
