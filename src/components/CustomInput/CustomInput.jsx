import css from './CustomInput.module.css';

const CustomInput = ({ field, form, ...props }) => {
    return (
        <>
            <input {...field} {...props} className={css.input} />
            {form.touched[field.name] && form.errors[field.name] && (
                <span className={css.error}>{form.errors[field.name]}</span>
            )}
        </>
    );
};

export default CustomInput;
