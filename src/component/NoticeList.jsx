import React from "react";
import styles from "../css/Notice.module.css";
import { useState } from "react";

export default function NoticeList(props) {
  const [togled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!togled);
  };
  console.log(props);
  console.log(props.notice);
  return (
    // <div className={styles.container}>
    <div className={styles.box}>
      <p
        onClick={handleToggle}
        className={`${styles["text-block"]} ${styles.title}`}
      >
        {props.notice.notice_name}
      </p>
      {togled ? (
        <p className={styles["text-block"]}>{props.notice.notice_detail}</p>
      ) : null}
    </div>
    // </div>
  );
}
