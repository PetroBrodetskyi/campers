import { useState } from 'react';
import css from '../BookNow/BookNow.module.css';

const BookNow = () => {
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
        <div className={css.reviewsContainer}>
            <h4 className={css.reviewsTitle}>Book your campervan now</h4>
            <p>Stay connected! We are always ready to help you.</p>
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
        </div>
    );
};

export default BookNow;
