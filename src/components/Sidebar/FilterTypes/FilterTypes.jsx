import { useEffect, useState } from 'react';
import css from './FilterTypes.module.css';
import { icons } from 'assets/icons';

const FilterTypes = () => {
    const [selectedOption, setSelectedOption] = useState('icon-camperone');

    const radioOptions = [
        { id: 'icon-camperone', title: 'Van' },
        { id: 'icon-campertwo', title: 'Fully Integrated' },
        { id: 'icon-camperthree', title: 'Alcove' },
    ];

    useEffect(() => {}, [selectedOption]);

    const handleRadioButtons = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className={css.typeContainer}>
            <h2 className={css.typeTitle}>Vehicle type</h2>
            <div className={css.radioGroup}>
                {radioOptions.map(({ id, title }) => (
                    <div key={id} className={css.radioItem}>
                        <input
                            className={css.input}
                            type="radio"
                            id={id}
                            name="group"
                            value={id}
                            onChange={(e) => handleRadioButtons(e)}
                            checked={selectedOption === id}
                        />
                        <label htmlFor={id} className={css.label}>
                            <svg className={css.icon}>
                                <use href={`${icons}#${id}`}></use>
                            </svg>
                            <p className={css.labelTitle}>{title}</p>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterTypes;
