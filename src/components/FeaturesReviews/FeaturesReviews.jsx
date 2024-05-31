import { useState } from 'react';
import css from './FeaturesReviews.module.css';

const FeaturesReviews = ({ activeTab, handleTabChange, advert }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        comment: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.date) newErrors.date = 'Date is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Handle form submission logic
        }
    };

    return (
        <>
            <div className={css.tabs}>
                <button
                    className={`${css.tab} ${activeTab === 'details' ? css.active : ''}`}
                    onClick={() => handleTabChange('details')}
                >
                    Features
                </button>
                <button
                    className={`${css.tab} ${activeTab === 'reviews' ? css.active : ''}`}
                    onClick={() => handleTabChange('reviews')}
                >
                    Reviews
                </button>
            </div>

            {activeTab === 'details' && (
                <div className={css.tabContent}>
                    <p>{advert.description}</p>
                    <p>Price: €{advert.price.toFixed(2)}</p>
                    {/* Add other details here */}
                </div>
            )}
            {activeTab === 'reviews' && (
                <div className={css.tabContent}>
                    {advert.reviews.map((review, index) => (
                        <div key={index}>
                            <p>{review}</p>
                        </div>
                    ))}
                </div>
            )}
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    className={css.input}
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && (
                    <span className={css.error}>{errors.name}</span>
                )}
                <input
                    className={css.input}
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <span className={css.error}>{errors.email}</span>
                )}
                <input
                    className={css.input}
                    name="date"
                    placeholder="Booking Date"
                    value={formData.date}
                    onChange={handleChange}
                />
                {errors.date && (
                    <span className={css.error}>{errors.date}</span>
                )}
                <textarea
                    className={css.textarea}
                    name="comment"
                    placeholder="Comment"
                    value={formData.comment}
                    onChange={handleChange}
                />
                <button className={css.submitButton} type="submit">
                    Book Now
                </button>
            </form>
        </>
    );
};

export default FeaturesReviews;
