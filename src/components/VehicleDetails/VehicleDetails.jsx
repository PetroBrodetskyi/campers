import css from './VehicleDetails.module.css';

const toTitleCase = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const VehicleDetails = ({ vehicleData }) => {
    const { length, width, height, tank, consumption } = vehicleData;

    const details = [
        { label: 'Length', value: length },
        { label: 'Width', value: width },
        { label: 'Height', value: height },
        { label: 'Tank', value: tank },
        { label: 'Consumption', value: consumption },
    ];

    return (
        <div className={css.vehicleDetailsContainer}>
            <h2>Vehicle Details</h2>
            <div className={css.line}></div>
            <div className={css.detailsContainer}>
                {details.map((detail, index) => (
                    <div key={index} className={css.detailValueFlex}>
                        <div className={css.detailLabel}>
                            <label>{toTitleCase(detail.label)}</label>
                        </div>
                        <div className={css.detailValue}>
                            <span>{detail.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VehicleDetails;
