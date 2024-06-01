import { useState, useEffect } from 'react';
import AdvertModal from '../AdvertModal/AdvertModal.jsx';
import css from './AdvertCard.module.css';
import SubmitButton from '../SubmitButton/SubmitButton.jsx';
import DetailsList from '../DetailsList/DetailsList.jsx';
import icons from '../../assets/icons/icons.svg';

const AdvertCard = ({ advert, updateFavorites }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.some((fav) => fav._id === advert._id));
    }, [advert._id]);

    const toggleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            favorites = favorites.filter((fav) => fav._id !== advert._id);
        } else {
            favorites.push(advert);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
        if (updateFavorites) {
            updateFavorites(favorites);
        }
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
                    <h2 className={css.title}>{advert.name}</h2>
                    <div className={css.priceFavoriteFlex}>
                        <p className={css.price}>€{advert.price.toFixed(2)}</p>
                        <button
                            onClick={toggleFavorite}
                            className={`${css.heartFavorite} ${isFavorite ? css.favorite : ''}`}
                        >
                            <svg className={css.icon}>
                                <use href={`${icons}#icon-hert`}></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={css.container}>
                    <div className={css.ratingLocationFlex}>
                        <div className={css.iconsFlex}>
                            <svg className={css.iconStar}>
                                <use href={`${icons}#icon-star`}></use>
                            </svg>
                            <p className={css.rating}>
                                {advert.rating} ({advert.adults} Reviews)
                            </p>
                        </div>
                        <div className={css.iconsFlex}>
                            <svg className={css.iconLocation}>
                                <use href={`${icons}#icon-location`}></use>
                            </svg>
                            <p className={css.location}>{advert.location}</p>
                        </div>
                    </div>
                    <div className={css.textContainer}>
                        <p className={css.description}>{advert.description}</p>
                    </div>
                    <DetailsList
                        advert={{
                            adults: advert.adults,
                            transmission: advert.transmission,
                            engine: advert.engine,
                            kitchen: advert.details.kitchen,
                            beds: advert.details.beds,
                            airConditioner: advert.details.airConditioner,
                        }}
                    />
                    <SubmitButton
                        buttonText="Show more"
                        onClick={() => {
                            setIsModalOpen(true);
                        }}
                    />
                    {isModalOpen && (
                        <AdvertModal
                            advert={advert}
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdvertCard;
