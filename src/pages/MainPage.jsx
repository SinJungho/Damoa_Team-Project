import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import MainBenner from "../component/MainBennerImg";
import LeftNotice from "./MainPage/LeftNotice";
import RightNotice from "../component/RightNotice";
import ContentDisplay from "../component/ContentDisplay";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}
body {
    background-color: #141414;
    margin: 0 auto;
    padding: 2px;
}
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 140vh;
  margin: 200px 30px;
`;

export default function MainPage() {
  return (
    <>
      <GlobalStyle />
      <MainBenner />
      <Layout>
        <LeftNotice />
        <RightNotice />
      </Layout>
      <ContentDisplay />
    </>
  );
}
