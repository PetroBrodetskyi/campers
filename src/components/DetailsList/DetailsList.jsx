import css from './DetailsList.module.css';
import icons from '../../assets/icons/icons.svg';

const DetailsList = ({ advert }) => {
    const {
        adults,
        transmission,
        engine,
        kitchen,
        beds,
        airConditioner,
        CD,
        radio,
        hob,
        toilet,
        shower,
        freezer,
        gas,
        water,
        microwave,
    } = advert;

    const details = [
        { label: `${adults} adults`, icon: 'icon-adults', value: adults },
        { label: transmission, icon: 'icon-automatic', value: transmission },
        { label: engine, icon: 'icon-petrol', value: engine },
        { label: 'kitchen', icon: 'icon-kitchen', value: kitchen },
        { label: `${beds} beds`, icon: 'icon-beds', value: beds },
        { label: 'AC', icon: 'icon-ac', value: airConditioner },
        { label: 'CD', icon: 'icon-cd', value: CD },
        { label: 'Radio', icon: 'icon-radio', value: radio },
        { label: `${hob} Hob`, icon: 'icon-hob', value: hob },
        { label: 'Toilet', icon: 'icon-toilet', value: toilet },
        { label: 'Shower', icon: 'icon-shovertwo', value: shower },
        { label: 'Freezer', icon: 'icon-freezer', value: freezer },
        { label: `Gas`, icon: 'icon-gas', value: gas },
        { label: `Water`, icon: 'icon-water', value: water },
        { label: 'Microwave', icon: 'icon-microwave', value: microwave },
    ].filter((detail) => detail.value !== undefined && detail.value !== 0);

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
