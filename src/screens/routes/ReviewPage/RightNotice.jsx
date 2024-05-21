import app from '../../css/App.module.css';
import Language from './RightNoticeJsx/Language';
import Rating from './RightNoticeJsx/Rating';
import Sort from './RightNoticeJsx/Sort';

export default function RightNotice() {
    return (
        <div className={app.Rivewbg}>
            <Sort />
            <Language />
            <Rating />
        </div>
    );
}
