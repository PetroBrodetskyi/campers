import css from './CustomTextarea.module.css';

const CustomTextarea = ({ field, form, ...props }) => {
    return (
        <>
            <textarea {...field} {...props} className={css.textarea} />
            {form.touched[field.name] && form.errors[field.name] && (
                <span className={css.error}>{form.errors[field.name]}</span>
            )}
        </>
    );
};

export default CustomTextarea;
