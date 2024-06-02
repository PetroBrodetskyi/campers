import css from './RatingLocation.module.css';
import icons from '../../assets/icons/icons.svg';

const RatingLocation = ({ rating, reviews, location }) => {
    return (
        <div className={css.ratingLocationFlex}>
            <div className={css.iconsFlex}>
                <svg className={css.iconStar}>
                    <use href={`${icons}#icon-star`}></use>
                </svg>
                <p className={css.rating}>
                    {rating} ({reviews} Reviews)
                </p>
            </div>
            <div className={css.iconsFlex}>
                <svg className={css.iconLocation}>
                    <use href={`${icons}#icon-location`}></use>
                </svg>
                <p className={css.location}>{location}</p>
            </div>
        </div>
    );
};

export default RatingLocation;
