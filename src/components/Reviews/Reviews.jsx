import css from '../Reviews/Reviews.module.css';
import BookNow from '../BookNow/BookNow.jsx';
import StarRating from '../StarRating/StarRating.jsx';

const Reviews = ({ reviews }) => {
    return (
        <div className={css.reviewsBookNowFlex}>
            <div className={css.reviewsContainer}>
                <ul className={css.reviewsListFlex}>
                    {reviews.map((review, index) => (
                        <li className={css.reviewsItemContainer} key={index}>
                            <div className={css.initialRatingFlex}>
                                <p className={css.initial}>
                                    {review.reviewer_name
                                        .charAt(0)
                                        .toUpperCase()}
                                </p>
                                <div className={css.nameRatingFlex}>
                                    <p className={css.name}>
                                        {review.reviewer_name}
                                    </p>
                                    <StarRating
                                        rating={review.reviewer_rating}
                                        className={css.starRating}
                                    />
                                </div>
                            </div>
                            <p className={css.comment}>{review.comment}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <BookNow />
        </div>
    );
};

export default Reviews;
