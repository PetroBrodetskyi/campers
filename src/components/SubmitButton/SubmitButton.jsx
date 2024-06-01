import { GoPlus } from "react-icons/go";
import css from './SubminButton.module.css';

const SubmitButton = ({ buttonText, onClick }) => {
    switch (buttonText) {
        case 'Search':
            return (
                <button className={css.button} type="submit">
                    {buttonText}
                </button>
            );
        case 'Show more':
            return (
                <button className={css.button} type="button" onClick={onClick}>
                    {buttonText}
                </button>
            );
        case 'Load more':
            return (
                <button
                    className={css.buttonLoad}
                    type="button"
                    onClick={onClick}
                >
                    {buttonText}
                </button>
            );
        case 'Add':
            return (
                <button
                    className={css.buttonAdd}
                    type="button"
                    onClick={onClick}
                >
                    {buttonText}
                    <GoPlus />
                </button>
            );
        default:
            return (
                <button
                    onClick={onClick}
                    className={css.buttonWrapper}
                    type="button"
                >
                    {buttonText}
                </button>
            );
    }
};

export default SubmitButton;
