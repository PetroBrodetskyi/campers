import { useState, useEffect } from 'react';
import css from './LocationSelect.module.css';
import icons from '../../assets/icons/icons.svg';
import axios from 'axios';

const LocationSelect = () => {
    const [inputValue, setInputValue] = useState(() => {
        return localStorage.getItem('selectedLocation') || '';
    });
    const [showLocations, setShowLocations] = useState(false);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const { data } = await axios.get(
                    'https://66588f105c3617052648fa9e.mockapi.io/api/campers'
                );
                const uniqueLocations = [
                    ...new Set(data.map((item) => item.location)),
                ];
                const formattedLocations = uniqueLocations.map(
                    (location, index) => ({
                        id: index.toString(),
                        name: location,
                    })
                );
                setLocations(formattedLocations);
            } catch (error) {
                console.error('Помилка при отриманні даних з бази:', error);
            }
        };

        fetchLocations();
    }, []);

    const handleInputClick = () => {
        setInputValue('');
        setShowLocations(true);
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        setShowLocations(true);
    };

    const handleResultClick = (locationName) => {
        setInputValue(locationName);
        setShowLocations(false);
        localStorage.setItem('selectedLocation', locationName);
    };

    return (
        <div className={css.locationContainer}>
            <div className={css.inputContainer}>
                <svg className={css.icon}>
                    <use href={`${icons}#icon-location`}></use>
                </svg>
                <input
                    id="location-input"
                    type="text"
                    value={inputValue}
                    onClick={handleInputClick}
                    onChange={handleInputChange}
                    placeholder="City"
                    className={css.locationInput}
                />
            </div>
            {showLocations && (
                <div className={css.locationList}>
                    {locations.map(({ id, name }) => (
                        <div
                            key={id}
                            className={css.locationResult}
                            onClick={() => handleResultClick(name)}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LocationSelect;
