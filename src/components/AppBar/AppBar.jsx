import Sidebar from '../Sidebar/Sidebar.jsx';
import Footer from '../Header/Header.jsx';
import css from './AppBar.module.css';

const AppBar = () => {
    return (
        <div className={css.navFlex}>
            <Footer />
            <Sidebar />
        </div>
    );
};

export default AppBar;
