import css from './DetailsList.module.css';
import icons from '../../assets/icons/icons.svg';

const toTitleCase = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const DetailsList = ({ advert }) => {
    const { adults, transmission, engine, kitchen, beds, airConditioner } = advert;

    const details = [
        { label: `${adults} adults`, icon: 'icon-adults', value: adults },
        { label: transmission, icon: 'icon-automatic', value: transmission },
        { label: engine, icon: 'icon-petrol', value: engine },
        { label: 'Kitchen', icon: 'icon-kitchen', value: kitchen },
        { label: `${beds} beds`, icon: 'icon-beds', value: beds },
        { label: 'AC', icon: 'icon-ac', value: airConditioner },
    ].filter((detail) => detail.value !== undefined);

    return (
        <ul className={css.detailsList}>
            {details.map((detail, index) => (
                <li key={index} className={css.detailsLink}>
                    <svg className={css.icon}>
                        <use href={`${icons}#${detail.icon}`} />
                    </svg>
                    {toTitleCase(detail.label)}
                </li>
            ))}
        </ul>
    );
};

export default DetailsList;
