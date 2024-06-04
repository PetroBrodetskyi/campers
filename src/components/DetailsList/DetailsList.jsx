import css from './DetailsList.module.css';
import icons from '../../assets/icons/icons.svg';
import { createDetails } from './details';

const DetailsList = ({ advert }) => {
    const details = createDetails(advert);

    return (
        <ul className={css.detailsList}>
            {details.map((detail, index) => (
                <li key={index} className={css.detailsLink}>
                    <svg className={css.icon}>
                        <use href={`${icons}#${detail.icon}`} />
                    </svg>
                    {detail.label}
                </li>
            ))}
        </ul>
    );
};

export default DetailsList;
