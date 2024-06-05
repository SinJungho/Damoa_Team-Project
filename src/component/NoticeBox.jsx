import React from "react";
import styles from "../css/Notice.module.css";
import { useState, useEffect } from "react";
import NoticeList from "./NoticeList";
import axios from "axios";
export default function NoticeBox(props) {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.post(
          "http://121.139.20.242:5100/api/notice_selectlist",
          {
            notice_auth: 3,
          }
        );
        console.log(response.data);
        if (response.data.valid) {
          setNotices(response.data.data);
        } else {
          console.log("No notices found");
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);
  let noticeList = notices.map((notice, index) => {
    if (index < props.count || props.count == undefined)
      return <NoticeList key={notice.id} notice={notice} />;
    else return null;
  });

  return <> {noticeList} </>;
}
