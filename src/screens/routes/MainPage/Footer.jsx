import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 80px 100px 40px;
  background: #0f0f0f;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  gap: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  position: relative;
  gap: 20px;
`;

const Text = styled.p`
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  width: 630px;
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  text-align: left;
  color: ${(props) => props.color};
`;

const IconContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const SvgContainer = styled.a`
  display: flex;
  padding: 12px;
  border-radius: 6px;
  background: #1a1a1a;
  border: 1px solid #262626;
  text-decoration: none; // 링크의 밑줄 제거
`;

const SvgIcon = styled.svg`
  flex-grow: 0;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`;

const SnsColumn = styled(Column)`
  align-items: start;
  text-align: center;
`;

// Footer Container Component

const FtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  gap: 20px;
`;

const DividerLine = styled.svg`
  border-bottom: 1px solid #262626;
  width: 1510px;
  height: 100px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
`;

const FooterText = styled.p`
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 14px;
  text-align: left;
  color: #999;
`;

const VerticalLine = styled.svg`
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  gap: 16px;
`;

export default function Footer() {
  return (
    <Container>
      <Row>
        <Column>
          <Text size={20} weight={800} color="#fff">
            메인 화면
          </Text>
          <Column>
            <Text size={16} weight={600} color="#999">
              Categories
            </Text>
            <Text size={16} weight={600} color="#999">
              Devices
            </Text>
            <Text size={16} weight={600} color="#999">
              Pricing
            </Text>
            <Text size={16} weight={600} color="#999">
              FAQ
            </Text>
          </Column>
        </Column>
        <SnsColumn>
          <Text size={20} weight={800} color="#fff">
            SNS
          </Text>
          <IconContainer>
            <SvgContainer
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                  fill="white"
                ></path>
              </SvgIcon>
            </SvgContainer>
            <SvgContainer
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2918 18.125C13.8371 18.125 17.9652 11.8723 17.9652 6.45155C17.9652 6.27577 17.9613 6.09608 17.9535 5.9203C18.7566 5.33955 19.4496 4.62021 20 3.79608C19.2521 4.12883 18.458 4.34615 17.6449 4.44061C18.5011 3.92742 19.1421 3.12123 19.4492 2.17147C18.6438 2.6488 17.763 2.98551 16.8445 3.16718C16.2257 2.50963 15.4075 2.07426 14.5164 1.92838C13.6253 1.78249 12.711 1.93421 11.9148 2.36008C11.1186 2.78595 10.4848 3.46225 10.1115 4.28443C9.73825 5.1066 9.64619 6.02885 9.84961 6.90858C8.21874 6.82674 6.62328 6.40309 5.16665 5.66508C3.71002 4.92708 2.42474 3.8912 1.39414 2.6246C0.870333 3.5277 0.710047 4.59637 0.945859 5.61341C1.18167 6.63045 1.79589 7.51954 2.66367 8.09999C2.01219 8.0793 1.37498 7.9039 0.804688 7.58827V7.63905C0.804104 8.58679 1.13175 9.50549 1.73192 10.239C2.3321 10.9725 3.16777 11.4755 4.09687 11.6625C3.49338 11.8276 2.85999 11.8517 2.2457 11.7328C2.50788 12.5479 3.01798 13.2607 3.70481 13.7719C4.39164 14.2831 5.22093 14.5672 6.07695 14.5844C4.62369 15.7259 2.82848 16.3451 0.980469 16.3422C0.652739 16.3417 0.325333 16.3216 0 16.282C1.87738 17.4865 4.06128 18.1262 6.2918 18.125Z"
                  fill="white"
                ></path>
              </SvgIcon>
            </SvgContainer>
            <SvgContainer
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                  fill="white"
                ></path>
              </SvgIcon>
            </SvgContainer>
          </IconContainer>
        </SnsColumn>
      </Row>
      <FtContainer>
        <DividerLine />
        <Content>
          <FooterText>@2023 Damoa, All Rights Reserved</FooterText>
          <LinkContainer>
            <FooterText>이용 약관</FooterText>
            <VerticalLine
              width="1"
              height="21"
              viewBox="0 0 1 21"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <line
                x1="0.5"
                y1="2.18557e-8"
                x2="0.499999"
                y2="21"
                stroke="#262626"
              />
            </VerticalLine>
            <FooterText>약관 사항</FooterText>
            <VerticalLine
              width="1"
              height="21"
              viewBox="0 0 1 21"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <line
                x1="0.5"
                y1="2.18557e-8"
                x2="0.499999"
                y2="21"
                stroke="#262626"
              />
            </VerticalLine>
            <FooterText>쿠키 관련 약관</FooterText>
          </LinkContainer>
        </Content>
      </FtContainer>
    </Container>
  );
}
