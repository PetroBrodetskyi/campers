import { useState, useEffect } from 'react';
import AdvertCard from '../../components/AdvertCard/AdvertCard.jsx';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites =
            JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    return (
        <div>
            <h1>Favorites</h1>
            <div>
                {favorites.map((advert) => (
                    <AdvertCard key={advert.id} advert={advert} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
