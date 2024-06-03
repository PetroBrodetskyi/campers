import { NavLink } from 'react-router-dom';
import {
    MdOutlineHomeWork,
    MdFormatListBulleted,
    MdFavoriteBorder,
} from 'react-icons/md';
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <nav className={css.navContainer}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${css.navItem} ${css.active}` : css.navItem
                    }
                    to="/"
                >
                    <MdOutlineHomeWork />
                    <p>Home</p>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${css.navItem} ${css.active}` : css.navItem
                    }
                    to="/catalog"
                >
                    <MdFormatListBulleted />
                    <p>Catalog</p>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${css.navItem} ${css.active}` : css.navItem
                    }
                    to="/favorites"
                >
                    <MdFavoriteBorder />
                    <p>Favorites</p>
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
