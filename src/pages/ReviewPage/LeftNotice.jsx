import style from "../../css/ReviewPage.module.css";
import ReviewText from "./LeftNoticeJsx/RivewText";
import ReviewComponet from "./LeftNoticeJsx/ReviewComponet";

export default function LeftNotice() {
  return (
    <div className={style.verticalContainer}>
      <ReviewText />
      <ReviewComponet />
    </div>
  );
}
