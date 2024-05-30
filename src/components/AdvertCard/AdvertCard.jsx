import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import css from './AdvertCard.module.css';
import SubmitButton from 'components/SubmitButton/SubmitButton.jsx';

const AdvertCard = ({ advert }) => {
    const [isFavorite, setIsFavorite] = useState(
        JSON.parse(localStorage.getItem('favorites'))?.some(
            (fav) => fav.id === advert.id
        ) || false
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            favorites = favorites.filter((fav) => fav.id !== advert.id);
        } else {
            favorites.push(advert);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={css.advertContainer}>
            <img
                className={css.image}
                src={advert.gallery[0]}
                alt={advert.name}
            />
            <div className={css.info}>
                <div className={css.namePriceFlex}>
                    <h2>{advert.name}</h2>
                    <p>Price: {advert.price.toFixed(2)}</p>
                </div>
                <div className={css.ratingLocationFlex}>
                    <p>Rating: {advert.rating}</p>
                    <p>Location: {advert.location}</p>
                </div>
                <div className={css.container}>
                    <p className={css.description}>{advert.description}</p>
                </div>
                {/* <div>
                    <ul>
                        {Object.entries(advert.details).map(([key, value]) => (
                            <li key={key}>
                                {key}: {value}
                            </li>
                        ))}
                    </ul>
                </div> */}
                <button
                    onClick={toggleFavorite}
                    style={{ color: isFavorite ? 'red' : 'black' }}
                >
                ♥
                </button>
                <SubmitButton
                    buttonText="Show more"
                    onClick={() => setIsModalOpen(true)}
                />
                {isModalOpen && (
                    <Modal
                        advert={advert}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default AdvertCard;
