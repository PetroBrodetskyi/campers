import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import {
    MdOutlineHomeWork,
    MdFormatListBulleted,
    MdFavoriteBorder,
} from 'react-icons/md';
import css from './AppBar.module.css';

const AppBar = () => {
    return (
        <div className={css.navFlex}>
            <nav className={css.navContainer}>
                <Link className={css.navItem} to="/home">
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
            <Sidebar />
        </div>
    );
};

export default AppBar;
