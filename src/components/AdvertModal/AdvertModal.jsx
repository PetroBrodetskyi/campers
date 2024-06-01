import { useState } from 'react';
import Modal from 'react-modal';
import icons from '../../assets/icons/icons.svg';
import css from './AdvertModal.module.css';
import FeaturesReviews from '../FeaturesReviews/FeaturesReviews.jsx';

const AdvertModal = ({ isOpen, onClose, advert }) => {
    const [activeTab, setActiveTab] = useState('details');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnEsc={true}
            overlayClassName={css.overlay}
            className={css.modal}
            closeTimeoutMS={300}
            ariaHideApp={false}
        >
            <div className={css.nameCloseFlex}>
                <h3 className={css.title}>{advert.name}</h3>
                <button className={css.closeButton} onClick={onClose}>
                    <svg className={css.closeIcon}>
                        <use href={`${icons}#icon-close`}></use>
                    </svg>
                </button>
            </div>

            <div className={css.imageContainer}>
                {advert.gallery.map((image, index) => (
                    <img
                        key={index}
                        className={css.image}
                        src={image}
                        alt={advert.name}
                    />
                ))}
            </div>

            <FeaturesReviews
                activeTab={activeTab}
                handleTabChange={handleTabChange}
                advert={advert}
            />
        </Modal>
    );
};

export default AdvertModal;
// const AdvertModal = ({ isOpen, onClose, advert }) => {
//     const [activeTab, setActiveTab] = useState('details');
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         date: '',
//         comment: '',
//     });
//     const [errors, setErrors] = useState({});

//     const handleTabChange = (tab) => {
//         setActiveTab(tab);
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const validate = () => {
//         const newErrors = {};
//         if (!formData.name) newErrors.name = 'Name is required';
//         if (!formData.email) newErrors.email = 'Email is required';
//         if (!formData.date) newErrors.date = 'Date is required';
//         return newErrors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newErrors = validate();
//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//         } else {
//             onClose();
//         }
//     };

//     return (
//         <Modal
//             isOpen={isOpen}
//             onRequestClose={onClose}
//             shouldCloseOnEsc={true}
//             overlayClassName={css.overlay}
//             className={css.modal}
//             closeTimeoutMS={300}
//             ariaHideApp={false}
//         >
//             <div className={css.nameCloseFlex}>
//                 <h3 className={css.title}>{advert.name}</h3>
//                 <button className={css.closeButton} onClick={onClose}>
//                     <svg className={css.closeIcon}>
//                         <use href={`${icons}#icon-close`}></use>
//                     </svg>
//                 </button>
//             </div>

//             <div className={css.imageContainer}>
//                 {advert.gallery.map((image, index) => (
//                     <img
//                         key={index}
//                         className={css.image}
//                         src={image}
//                         alt={advert.name}
//                     />
//                 ))}
//             </div>

//             <div className={css.tabs}>
//                 <button
//                     className={`${css.tab} ${activeTab === 'details' ? css.active : ''}`}
//                     onClick={() => handleTabChange('details')}
//                 >
//                     Features
//                 </button>
//                 <button
//                     className={`${css.tab} ${activeTab === 'reviews' ? css.active : ''}`}
//                     onClick={() => handleTabChange('reviews')}
//                 >
//                     Reviews
//                 </button>
//             </div>

//             {activeTab === 'details' && (
//                 <div className={css.tabContent}>
//                     <h2>{advert.name}</h2>
//                     <p>{advert.description}</p>
//                     <p>Price: €{advert.price.toFixed(2)}</p>
//                     {/* Add other details here */}
//                 </div>
//             )}
//             {activeTab === 'reviews' && (
//                 <div className={css.tabContent}>
//                     {advert.reviews.map((review, index) => (
//                         <div key={index}>
//                             <p>{review}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//             <form onSubmit={handleSubmit} className={css.form}>
//                 <input
//                     className={css.input}
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//                 {errors.name && (
//                     <span className={css.error}>{errors.name}</span>
//                 )}
//                 <input
//                     className={css.input}
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//                 {errors.email && (
//                     <span className={css.error}>{errors.email}</span>
//                 )}
//                 <input
//                     className={css.input}
//                     name="date"
//                     placeholder="Booking Date"
//                     value={formData.date}
//                     onChange={handleChange}
//                 />
//                 {errors.date && (
//                     <span className={css.error}>{errors.date}</span>
//                 )}
//                 <textarea
//                     className={css.textarea}
//                     name="comment"
//                     placeholder="Comment"
//                     value={formData.comment}
//                     onChange={handleChange}
//                 />
//                 <button className={css.submitButton} type="submit">
//                     Book Now
//                 </button>
//             </form>
//         </Modal>
//     );
// };

// export default AdvertModal;
