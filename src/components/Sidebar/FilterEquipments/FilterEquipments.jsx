import { Fragment, useEffect, useState } from 'react';
import css from './FilterEquipments.module.css';
import { icons } from 'assets/icons';

const FilterEquipments = () => {
    const [selectedOptions, setSelectedOptions] = useState(['icon-camperone']);

    const checkboxOptions = [
        { id: 'icon-ac', title: 'AC' },
        { id: 'icon-authomat', title: 'Automatic' },
        { id: 'icon-knife', title: 'Kitchen' },
        { id: 'icon-tv', title: 'TV' },
        { id: 'icon-shower', title: 'Shower/WC' },
    ];

    useEffect(() => {}, [selectedOptions]);

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        const index = selectedOptions.indexOf(value);
        if (index === -1) {
            setSelectedOptions([...selectedOptions, value]);
        } else {
            const updatedOptions = [...selectedOptions];
            updatedOptions.splice(index, 1);
            setSelectedOptions(updatedOptions);
        }
    };

    return (
        <div className={css.equipmentContainer}>
            <h2 className={css.equipmentTitle}>Vehicle equipment</h2>
            <div className={css.checkboxGroup}>
                {checkboxOptions.map(({ id, title }) => (
                    <Fragment key={id} className={css.checkboxItem}>
                        <input
                            className={css.input}
                            type="checkbox"
                            id={id}
                            name={id}
                            value={id}
                            onChange={handleCheckboxChange}
                            checked={selectedOptions.includes(id)}
                        />
                        <label htmlFor={id} className={css.label}>
                            <svg className={css.icon}>
                                <use href={`${icons}#${id}`}></use>
                            </svg>
                            <p className={css.labelTitle}>{title}</p>
                        </label>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default FilterEquipments;
