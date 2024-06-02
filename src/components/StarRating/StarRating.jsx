import icons from '../../assets/icons/icons.svg';
import css from './StarRating.module.css';

const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <svg
                key={i}
                className={`${css.star} ${i < rating ? css.filled : css.empty}`}
            >
                <svg className={css.icon}>
                    <use href={`${icons}#icon-star`}></use>
                </svg>
            </svg>
        );
    }

    return <div className={css.starContainer}>{stars}</div>;
};

export default StarRating;
