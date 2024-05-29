import { createGlobalStyle } from "styled-components";
import style from "../../css/ReviewPage.module.css";
import LeftNotice from "./LeftNotice";
import RightNotice from "./RightNotice";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}
body {
    background-color: #141414;
    margin: 0 auto;
}
`;

export default function Review() {
  return (
    <>
      <GlobalStyle />
      <div className={style.layout}>
        <LeftNotice />
        <RightNotice />
      </div>
    </>
  );
}
