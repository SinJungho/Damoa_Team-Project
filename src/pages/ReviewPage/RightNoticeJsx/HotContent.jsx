import style from '../../../css/HotContent.module.css';
import HotContentIcon from '../../../svg/HotContentIcon';
import HotContentUpArrow from '../../../svg/HotContentUpArrow';
import HotContentDownArrow from '../../../svg/HotContentDownArrow';

export default function HotContent() {
    return (
        <div className={style.hotContent}>
            <div className={style.hotContent__content}>
                <HotContentIcon />
                <p>지금 인기 있는 컨텐츠</p>
            </div>

            <div className={style.hotContent__group}>
                <button className={style.hotContent__group__element}>
                    {/* <div> */}
                    <p>1</p>
                    <img src="https://via.placeholder.com/47x50" alt="" />
                    <div className={style.hotContent__content__text__group}>
                        <p>파묘</p>
                        <p>한국 영화</p>
                        {/* </div> */}
                    </div>
                    <HotContentUpArrow />
                </button>

                <button className={style.hotContent__group__element}>
                    <p>2</p>
                    <img src="https://via.placeholder.com/47x50" alt="" />
                    <div className={style.hotContent__content__text__group}>
                        <p>웡카</p>
                        <p>외국 영화</p>
                    </div>
                    <HotContentDownArrow />
                </button>

                <button className={style.hotContent__group__element}>
                    <p>3</p>
                    <img src="https://via.placeholder.com/47x50" alt="" />
                    <div className={style.hotContent__content__text__group}>
                        <p>쿵푸 팬더</p>
                        <p>외국 애니메이션</p>
                    </div>
                    <HotContentUpArrow />
                </button>

                <button className={style.hotContent__group__element}>
                    <p>4</p>
                    <img src="https://via.placeholder.com/47x50" alt="" />
                    <div className={style.hotContent__content__text__group}>
                        <p>삼체</p>
                        <p>드라마, SF</p>
                    </div>
                    <HotContentDownArrow />
                </button>
            </div>
        </div>
    );
}
