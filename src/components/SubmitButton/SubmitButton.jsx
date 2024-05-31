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
                <button className={css.button} type="button" onClick={onClick}>
                    {buttonText}
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
