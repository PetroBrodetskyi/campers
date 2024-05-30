import { useState, useEffect } from 'react';
import css from './LocationSelect.module.css';
import { icons } from 'assets/icons';

const LocationSelect = () => {
    const [inputValue, setInputValue] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [showLocations, setShowLocations] = useState(false);

    useEffect(() => {
        const savedLocation = localStorage.getItem('selectedLocation');
        if (savedLocation) {
            setSelectedLocation(savedLocation);
            setInputValue(savedLocation);
        }
    }, []);

    const locations = [
        { id: 'locationkiiv', name: 'Kiiv, Ukraine' },
        { id: 'locationodesa', name: 'Odesa, Ukraine' },
        { id: 'locationlviv', name: 'Lviv, Ukraine' },
    ];

    const handleInputClick = () => {
        setInputValue('');
        setShowLocations(true);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setSelectedLocation(null);
        setShowLocations(true);
    };

    const handleResultClick = (locationName) => {
        setInputValue(locationName);
        setSelectedLocation(locationName);
        setShowLocations(false);
        localStorage.setItem('selectedLocation', locationName);
    };

    const filteredLocations = locations.filter(
        (loc) => loc.name.toLowerCase().includes(inputValue.toLowerCase())
    );

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
                    {filteredLocations.map((location) => (
                        <div
                            key={location.id}
                            className={css.locationResult}
                            onClick={() => handleResultClick(location.name)}
                        >
                            {location.name}
                        </div>
                    ))}
                </div>
            )}
            {selectedLocation && !showLocations && (
                <div
                    className={css.locationResult}
                    onClick={() => handleResultClick(selectedLocation)}
                ></div>
            )}
        </div>
    );
};

export default LocationSelect;
