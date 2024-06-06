import app from '../css/App.module.css';
import Genre from './Genre';
import HotContent from './HotContent';
import Language from '../svg/Language';
import Rating from './Rating';

export default function RightNotice() {
    return (
        <div className={app.bg}>
            <p className={app.title}>어떤 작품을 찾아볼까요?</p>
            <Language />
            <Rating />
            <Genre />
            <HotContent />
        </div>
    );
}
