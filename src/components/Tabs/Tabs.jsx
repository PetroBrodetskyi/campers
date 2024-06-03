import css from './Tabs.module.css';

const Tabs = ({ activeTab, onTabChange }) => {
    return (
        <div className={css.tabsLineFlex}>
            <div className={css.tabsContainer}>
                <button
                    className={`${css.tabDetails} ${activeTab === 'details' ? css.active : ''}`}
                    onClick={() => onTabChange('details')}
                >
                    Features
                </button>
                <button
                    className={`${css.tabReviews} ${activeTab === 'reviews' ? css.active : ''}`}
                    onClick={() => onTabChange('reviews')}
                >
                    Reviews
                </button>
            </div>
            <div className={css.line}></div>
        </div>
    );
};

export default Tabs;
