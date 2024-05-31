import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from '../Pages/Home/Home.jsx';
import Catalog from '../Pages/Catalog/Catalog.jsx';
import Favorites from '../Pages/Favorites/Favorites.jsx';
import AppBar from './AppBar/AppBar.jsx';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

const App = () => {
    const location = useLocation();
    const baseName = location.pathname.split('/')[1];

    return (
        <div className={css.container}>
            <AppBar />
            <div className={css.pageContainer}>
                <Routes basename={baseName}>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
