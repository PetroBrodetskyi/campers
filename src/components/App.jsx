import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from '../components/Loader/Loader.jsx';
import AppBar from './AppBar/AppBar.jsx';
import css from './App.module.css';

const Home = lazy(() => import('../Pages/Home/Home.jsx'));
const Catalog = lazy(() => import('../Pages/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('../Pages/Favorites/Favorites.jsx'));

const appRoutes = [
    { path: '/home', element: <Home /> },
    { path: '/catalog', element: <Catalog /> },
    { path: '/favorites', element: <Favorites /> },
    { path: '*', element: <Navigate to="/home" /> },
];

const App = () => {
    return (
        <div className={css.container}>
            <AppBar />
            <div className={css.pageContainer}>
                <Suspense
                    fallback={
                        <div>
                            <Loader />
                        </div>
                    }
                >
                    <Routes>
                        {appRoutes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default App;
