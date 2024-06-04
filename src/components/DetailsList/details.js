export const createDetails = (advert) => {
    const {
        adults,
        transmission,
        engine,
        kitchen,
        beds,
        airConditioner,
        CD,
        AC,
        radio,
        hob,
        toilet,
        shower,
        freezer,
        gas,
        water,
        microwave,
    } = advert;

    return [
        { label: `${adults} adults`, icon: 'icon-adults', value: adults },
        { label: transmission, icon: 'icon-automatic', value: transmission },
        { label: engine, icon: 'icon-petrol', value: engine },
        { label: 'kitchen', icon: 'icon-kitchen', value: kitchen },
        { label: `${beds} beds`, icon: 'icon-beds', value: beds },
        { label: 'AC', icon: 'icon-ac', value: AC },
        { label: 'CD', icon: 'icon-cd', value: CD },
        { label: 'Radio', icon: 'icon-radio', value: radio },
        { label: `${hob} Hob`, icon: 'icon-hob', value: hob },
        { label: `${airConditioner} Air conditioner`, icon: 'icon-conditioner', value: airConditioner },
        { label: 'Toilet', icon: 'icon-toilet', value: toilet },
        { label: 'Shower', icon: 'icon-shovertwo', value: shower },
        { label: 'Freezer', icon: 'icon-freezer', value: freezer },
        { label: `Gas`, icon: 'icon-gas', value: gas },
        { label: `Water`, icon: 'icon-water', value: water },
        { label: 'Microwave', icon: 'icon-microwave', value: microwave },
    ].filter((detail) => detail.value !== undefined && detail.value !== 0);
};
