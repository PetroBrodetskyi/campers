import DetailsList from '../DetailsList/DetailsList.jsx';
import css from './Features.module.css';
import VehicleDetails from '../VehicleDetails/VehicleDetails.jsx';
const Features = ({ advert }) => {
    return (
        <div className={css.featuresBookNowFlex}>
            <div className={css.featuresContainer}>
                <DetailsList
                    advert={{
                        adults: advert.adults,
                        transmission: advert.transmission,
                        engine: advert.engine,
                        kitchen: advert.details.kitchen,
                        beds: advert.details.beds,
                        airConditioner: advert.details.airConditioner,
                        CD: advert.details.CD,
                        radio: advert.details.radio,
                        hob: advert.details.hob,
                        toilet: advert.details.toilet,
                        shower: advert.details.shower,
                        freezer: advert.details.freezer,
                        gas: advert.details.gas,
                        water: advert.details.water,
                        microwave: advert.details.microwave,
                    }}
                ></DetailsList>
                <VehicleDetails
                    vehicleData={{
                        length: advert.length,
                        width: advert.width,
                        height: advert.height,
                        tank: advert.tank,
                        consumption: advert.consumption,
                    }}
                />
            </div>
        </div>
    );
};

export default Features;
