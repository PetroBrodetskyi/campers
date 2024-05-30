import css from './SubminButton.module.css';

const SubmitButton = ({ buttonText, onSubmit, onClick }) => {
    switch (buttonText) {
        case 'Search':
            return (
                <button className={css.button} type="submit">
                    {buttonText}
                </button>
            );
        case 'Show more':
            return (
                <button className={css.button} type="submit" onClick={onSubmit}>
                    {buttonText}
                </button>
            );
        case 'Load more':
            return (
                <button className={css.button} type="submit" onClick={onSubmit}>
                    {buttonText}
                </button>
            );
        default:
            return (
                <button
                    onClick={onClick}
                    className={css.buttonWrapper}
                    type="submit"
                >
                    {buttonText}
                </button>
            );
    }
};

export default SubmitButton;
