import css from './DetailsList.module.css';

const DetailsList = ({ advert }) => {
    return (
        <ul className={css.detailsList}>
            <li>{advert.adults} Adults</li>
            <li>{advert.transmission}</li>
            <li>{advert.engine}</li>
            <li>Kitchen {advert.kitchen}</li>
            <li>{advert.beds} Beds</li>
            <li>AC{advert.airConditioner}</li>
        </ul>
    );
};

export default DetailsList;
