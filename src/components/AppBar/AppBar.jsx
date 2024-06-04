import Sidebar from '../Sidebar/Sidebar.jsx';
import Header from '../Header/Header.jsx';
import css from './AppBar.module.css';

const AppBar = () => {
    return (
        <div className={css.navFlex}>
            <Header />
            <Sidebar />
        </div>
    );
};

export default AppBar;
