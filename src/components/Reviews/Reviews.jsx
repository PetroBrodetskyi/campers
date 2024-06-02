const Reviews = ({ reviews }) => {
    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <p><strong>{review.reviewer_name}</strong></p>
                        <p>Rating: {review.reviewer_rating}</p>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;
