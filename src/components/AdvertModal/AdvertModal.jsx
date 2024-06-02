import { useState } from 'react';
import Modal from 'react-modal';
import icons from '../../assets/icons/icons.svg';
import FeaturesReviews from '../FeaturesReviews/FeaturesReviews.jsx';
import RatingLocation from '../RatingLocation/RatingLocation.jsx';
import css from './AdvertModal.module.css';

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
            <RatingLocation
                rating={advert.rating}
                reviews={advert.adults}
                location={advert.location}
            />
            <p className={css.price}>€{advert.price.toFixed(2)}</p>
            <div className={css.imageDescContainer}>
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
                <p className={css.descText}>{advert.description}</p>
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
