import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import icons from '../../assets/icons/icons.svg';
import css from './CustomDateInput.module.css';

const CustomDateInput = ({ field, form, ...props }) => {
    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        if (field.value) {
            const dateParts = field.value.split('.');
            const savedDate = new Date(
                dateParts[2],
                dateParts[1] - 1,
                dateParts[0]
            );
            setStartDate(savedDate);
        }
    }, [field.value]);

    const handleChange = (date) => {
        setStartDate(date);
        form.setFieldValue(
            field.name,
            date ? date.toLocaleDateString('uk-UA') : ''
        );
        if (props.onChange) {
            props.onChange(date ? date.toLocaleDateString('uk-UA') : '');
        }
    };

    return (
        <div className={css.dateInputWrapper}>
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                dateFormat="dd.MM.yyyy"
                placeholderText={props.placeholder}
                customInput={
                    <div className={css.customInput}>
                        <input {...field} {...props} className={css.input} />
                        <svg className={css.icon}>
                            <use href={`${icons}#icon-calendar`} />
                        </svg>
                    </div>
                }
                wrapperClassName={css.datePickerWrapper}
                calendarClassName={css.datePicker}
            />
            {form.touched[field.name] && form.errors[field.name] && (
                <span className={css.error}>{form.errors[field.name]}</span>
            )}
        </div>
    );
};

export default CustomDateInput;
