import css from './Errors.module.css';
import { HiOutlineExclamation } from 'react-icons/hi';

const Errors = ({ field, form }) => {
    const errorMessage = form.errors[field.name];
    const touched = form.touched[field.name];
    return (
        <>
            {errorMessage && touched && (
                <div className={css.errorStyle}>
                    <HiOutlineExclamation style={{ height: '22px' }} />
                    {errorMessage}
                </div>
            )}
        </>
    );
};

export default Errors;
