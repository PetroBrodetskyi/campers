import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdvertCard from '../../components/AdvertCard/AdvertCard.jsx';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton.jsx';
import SubmitButton from '../../components/SubmitButton/SubmitButton.jsx';
import icons from '../../assets/icons/icons.svg';
import css from './Favorites.module.css';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    const updateFavorites = (updatedFavorites) => {
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const handleAddToFavorites = () => {
        navigate('/catalog');
    };

    return (
        <div className={css.favoritesContainer}>
            <div className={css.favoritesList}>
                {favorites.length === 0 ? (
                    <div className={css.emptyFavorites}>
                        <div className={css.textIconFlex}>
                            <p>No favorites yet</p>
                            <button onClick={handleAddToFavorites}>
                                <svg className={css.icon}>
                                    <use href={`${icons}#icon-hert`}></use>
                                </svg>
                            </button>
                        </div>
                        <SubmitButton
                            buttonText="Add"
                            onClick={handleAddToFavorites}
                        />
                    </div>
                ) : (
                    favorites
                        .slice(0)
                        .reverse()
                        .map((advert) => (
                            <AdvertCard
                                key={advert._id}
                                advert={advert}
                                updateFavorites={updateFavorites}
                            />
                        ))
                )}
            </div>
            <ScrollToTopButton />
        </div>
    );
};

export default Favorites;
