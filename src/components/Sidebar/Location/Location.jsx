import css from './Location.module.css';
import LocationSelect from '../../LocationSelect/LocationSelect.jsx';

const Location = () => {
    return (
        <div className={css.locationFlex}>
            <h2 className={css.locationTitle}>Location</h2>
            <LocationSelect />
        </div>
    );
};

export default Location;
