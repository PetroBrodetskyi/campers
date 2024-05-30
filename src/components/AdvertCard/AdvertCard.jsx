import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';

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
        <div>
            <img src={advert.gallery[0]} alt={advert.name} />
            <h2>{advert.name}</h2>
            <p>Price: {advert.price.toFixed(2)}</p>
            <p>Rating: {advert.rating}</p>
            <p>Location: {advert.location}</p>
            <p>{advert.description}</p>
            <div>
                <h3>Equipment:</h3>
                <ul>
                    {Object.entries(advert.details).map(([key, value]) => (
                        <li key={key}>
                            {key}: {value}
                        </li>
                    ))}
                </ul>
            </div>
            <button
                onClick={toggleFavorite}
                style={{ color: isFavorite ? 'red' : 'black' }}
            >
                ♥
            </button>
            <button onClick={() => setIsModalOpen(true)}>Show more</button>
            {isModalOpen && (
                <Modal advert={advert} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
};


export default AdvertCard;
