import css from '../Reviews/Reviews.module.css';
import BookNow from '../BookNow/BookNow.jsx';

const Reviews = ({ reviews }) => {
    return (
        <div className={css.reviewsBookNowFlex}>
            <div className={css.reviewsContainer}>
                <h2>Reviews</h2>
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <p>{review.reviewer_name}</p>
                            <p>Rating: {review.reviewer_rating}</p>
                            <p>{review.comment}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <BookNow />
        </div>
    );
};

export default Reviews;
