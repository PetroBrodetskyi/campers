import { useState, useEffect } from 'react';
import AdvertCard from '../../components/AdvertCard/AdvertCard.jsx';
import css from './Favorites.module.css';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    const updateFavorites = (updatedFavorites) => {
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <div className={css.favoritesContainer}>
            <h1>Favorites</h1>
            <div className={css.favoritesList}>
                {favorites.map((advert) => (
                    <AdvertCard key={advert._id} advert={advert} updateFavorites={updateFavorites} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
