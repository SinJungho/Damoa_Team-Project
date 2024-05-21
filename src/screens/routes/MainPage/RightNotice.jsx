import app from '../../css/App.module.css';
import Date from './RightNoticeJsx/Date';
import Genre from './RightNoticeJsx/Genre';
import HotContent from './RightNoticeJsx/HotContent';
import Language from './RightNoticeJsx/Language';
import Rating from './RightNoticeJsx/Rating';

export default function RightNotice() {
    return (
        <div className={app.bg}>
            <p className={app.title}>어떤 작품을 찾아볼까요?</p>
            {/*
             * date
             */}
            <Date />
            {/*
             * language
             */}
            <Language />
            {/*
             *별점
             */}
            <Rating />
            {/*
             *장르
             */}
            <Genre />
            {/* *지금 인기 있는 컨텐츠 */}
            <HotContent />
        </div>
    );
}
