import { useState } from 'react';
import css from './Modal.module.css';

const Modal = ({ advert, onClose }) => {
    const [activeTab, setActiveTab] = useState('details');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        comment: '',
    });
    const [errors, setErrors] = useState({});

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

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
            // Submit form logic here
            console.log('Form submitted:', formData);
            onClose();
        }
    };

    return (
        <div className={css.modal}>
            <div className={css.modalContent}>
                <button onClick={onClose} className={css.closeButton}>
                    X
                </button>
                <div className={css.tabs}>
                    <button onClick={() => handleTabChange('details')}>
                        Details
                    </button>
                    <button onClick={() => handleTabChange('reviews')}>
                        Reviews
                    </button>
                </div>
                {activeTab === 'details' && (
                    <div>
                        <h2>{advert.name}</h2>
                        <p>{advert.description}</p>
                        <p>Price: {advert.price.toFixed(2)}</p>
                        {/* Add other details here */}
                    </div>
                )}
                {activeTab === 'reviews' && (
                    <div>
                        {advert.reviews.map((review, index) => (
                            <div key={index}>
                                <p>{review}</p>
                            </div>
                        ))}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <span className={css.error}>{errors.name}</span>
                    )}
                    <input
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className={css.error}>{errors.email}</span>
                    )}
                    <input
                        name="date"
                        placeholder="Booking Date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                    {errors.date && (
                        <span className={css.error}>{errors.date}</span>
                    )}
                    <textarea
                        name="comment"
                        placeholder="Comment"
                        value={formData.comment}
                        onChange={handleChange}
                    />
                    <button type="submit">Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
