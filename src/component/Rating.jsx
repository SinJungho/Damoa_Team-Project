import style from '../css/Rating.module.css';
import StarContent from '../svg/StarContent';
import StarRating from '../svg/StarRating';
import StarRatingHalf from '../svg/StarRatingHalf';
import EmptyStarRating from '../svg/EmptyStarRating';

export default function Rating() {
    return (
        <div className={style.rating}>
            <div className={style.rating__content}>
                <StarContent />
                <p>별점</p>
            </div>
            {/* 별점 5점, 별점 4.5점 */}
            <div className={style[`rating__starBtns-group`]}>
                <button className={style.rating__starBtn}>
                    <div className={style[`rating__starBtn__elements-group`]}>
                        <div className={style.rating__starBtn__stars}>
                            <StarRating />
                            <StarRating />
                            <StarRating />
                            <StarRating />
                            <StarRating />
                        </div>
                        <span className={style.rating__starBtn__text}>5</span>
                    </div>
                </button>

                <button className={style.rating__starBtn}>
                    <div className={style[`rating__starBtn__elements-group`]}>
                        <div className={style.rating__starBtn__stars}>
                            <StarRating />
                            <StarRating />
                            <StarRating />
                            <StarRating />
                            <StarRatingHalf />
                        </div>
                        <span className={style.rating__starBtn__text}>4.5</span>
                    </div>
                </button>
            </div>

            {/* 별점 4점, 별점 3.5점 */}
            <div className={style[`rating__starBtns-group`]}>
                <button className={style.rating__starBtn}>
                    <div className={style[`rating__starBtn__elements-group`]}>
                        <div className={style.rating__starBtn__stars}>
                            <StarRating />
                            <StarRating />
                            <StarRating />
                            <StarRating />
                            <EmptyStarRating />
                        </div>
                        <span className={style.rating__starBtn__text}>4</span>
                    </div>
                </button>

                <button className={style.rating__starBtn}>
                    <div className={style[`rating__starBtn__elements-group`]}>
                        <div className={style.rating__starBtn__stars}>
                            <StarRating />
                            <StarRating />
                            <StarRating />
                            <StarRatingHalf />
                            <EmptyStarRating />
                        </div>
                        <span className={style.rating__starBtn__text}>3.5</span>
                    </div>
                </button>
            </div>

            {/* 별점 3점, 별점 2.5점 */}
            <div className={style[`rating__starBtns-group`]}>
                <button className={style.rating__starBtn}>
                    <div className={style[`rating__starBtn__elements-group`]}>
                        <div className={style.rating__starBtn__stars}>
                            <StarRating />
                            <StarRating />
                            <StarRating />
                            <EmptyStarRating />
                            <EmptyStarRating />
                        </div>
                        <span className={style.rating__starBtn__text}>3</span>
                    </div>
                </button>

                <button className={style.rating__starBtn}>
                    <div className={style[`rating__starBtn__elements-group`]}>
                        <div className={style.rating__starBtn__stars}>
                            <StarRating />
                            <StarRating />
                            <StarRatingHalf />
                            <EmptyStarRating />
                            <EmptyStarRating />
                        </div>
                        <span className={style.rating__starBtn__text}>2.5</span>
                    </div>
                </button>
            </div>

            {/* 별점 2점, 별점 1.5점 */}
            <div className={style[`rating__starBtns-group`]}>
                <button className={style.rating__starBtn}>
                    <div className={style[`rating__starBtn__elements-group`]}>
                        <div className={style.rating__starBtn__stars}>
                            <StarRating />
                            <StarRating />
                            <EmptyStarRating />
                            <EmptyStarRating />
                            <EmptyStarRating />
                        </div>
                        <span className={style.rating__starBtn__text}>2</span>
                    </div>
                </button>

                <button className={style.rating__starBtn}>
                    <div className={style[`rating__starBtn__elements-group`]}>
                        <div className={style.rating__starBtn__stars}>
                            <StarRating />
                            <StarRatingHalf />
                            <EmptyStarRating />
                            <EmptyStarRating />
                            <EmptyStarRating />
                        </div>
                        <span className={style.rating__starBtn__text}>1.5</span>
                    </div>
                </button>
            </div>

            {/* 별점 1점, 별점 0.5점 */}
            <div className={style[`rating__starBtns-group`]}>
                <button className={style.rating__starBtn}>
                    <div className={style[`rating__starBtn__elements-group`]}>
                        <div className={style.rating__starBtn__stars}>
                            <StarRating />
                            <EmptyStarRating />
                            <EmptyStarRating />
                            <EmptyStarRating />
                            <EmptyStarRating />
                        </div>
                        <span className={style.rating__starBtn__text}>1</span>
                    </div>
                </button>

                <button className={style.rating__starBtn}>
                    <div className={style[`rating__starBtn__elements-group`]}>
                        <div className={style.rating__starBtn__stars}>
                            <StarRatingHalf />
                            <EmptyStarRating />
                            <EmptyStarRating />
                            <EmptyStarRating />
                            <EmptyStarRating />
                        </div>
                        <span className={style.rating__starBtn__text}>0.5</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
