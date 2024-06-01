import { useState, useEffect } from 'react';
import { CiCircleChevUp } from 'react-icons/ci';
import css from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`${css.scrollToTop} ${isVisible ? css.visible : ''}`}
        >
            <CiCircleChevUp className={css.icon} />
        </button>
    );
};

export default ScrollToTopButton;
