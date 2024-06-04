import Errors from '../Errors/Errors.jsx';
import css from './CustomInput.module.css';

const CustomInput = ({ field, form, ...props }) => {
    return (
        <>
            <input {...field} {...props} className={css.input} />
            <Errors field={field} form={form} />
        </>
    );
};

export default CustomInput;
