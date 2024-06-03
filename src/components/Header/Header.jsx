import { Link } from 'react-router-dom';
import {
    MdOutlineHomeWork,
    MdFormatListBulleted,
    MdFavoriteBorder,
} from 'react-icons/md';
import css from './Header.module.css';

const Header = () => {
    return (
        <footer className={css.header}>
            <nav className={css.navContainer}>
                <Link className={css.navItem} to="/">
                    <MdOutlineHomeWork />
                    <p>Home</p>
                </Link>
                <Link className={css.navItem} to="/catalog">
                    <MdFormatListBulleted />
                    <p>Catalog</p>
                </Link>
                <Link className={css.navItem} to="/favorites">
                    <MdFavoriteBorder />
                    <p>Favorites</p>
                </Link>
            </nav>
        </footer>
    );
};

export default Header;
