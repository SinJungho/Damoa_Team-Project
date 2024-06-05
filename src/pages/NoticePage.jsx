import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import style from "../css/Notice.module.css";
import axios from "axios";
import NoticeBox from "../component/NoticeBox";
import NoticeList from "../component/NoticeList";

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

export default function NoticePage() {
  return (
    <>
      <NoticeBox />
      <GlobalStyle />
      <div className={style.container}></div>
    </>
  );
}
