import css from './DetailsList.module.css';
import { icons } from 'assets/icons';

const toTitleCase = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const DetailsList = ({ advert }) => {
    const { adults, transmission, engine, kitchen, beds, airConditioner } =
        advert;
    const details = [
        { label: `${adults} adults`, icon: 'icon-adults' },
        { label: transmission, icon: 'icon-automatic' },
        { label: engine, icon: 'icon-petrol' },
        {
            label: 'Kitchen',
            icon: 'icon-kitchen',
            isValid: kitchen !== undefined,
        },
        { label: `${beds} beds`, icon: 'icon-beds' },
        { label: 'AC', icon: 'icon-ac', isValid: airConditioner !== undefined },
    ];

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
