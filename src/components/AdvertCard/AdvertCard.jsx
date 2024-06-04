import { useState, useEffect } from 'react';
import AdvertModal from '../AdvertModal/AdvertModal.jsx';
import css from './AdvertCard.module.css';
import SubmitButton from '../SubmitButton/SubmitButton.jsx';
import DetailsList from '../DetailsList/DetailsList.jsx';
import icons from '../../assets/icons/icons.svg';
import RatingLocation from '../RatingLocation/RatingLocation.jsx';

const AdvertCard = ({ advert, updateFavorites }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.some((fav) => fav._id === advert._id));
    }, [advert._id]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isModalOpen]);

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
                    <RatingLocation
                        rating={advert.rating}
                        reviews={advert.adults}
                        location={advert.location}
                    />
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
                            AC: advert.details.AC,
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
