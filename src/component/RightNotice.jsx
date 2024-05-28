import app from '../css/App.module.css';
import Date from '../svg/Date';
import Genre from '../component/Genre';
import HotContent from './HotContent';
import Language from '../svg/Language';
import Rating from '../component/Rating';

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
