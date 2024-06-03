import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from '../components/Loader/Loader.jsx';
import AppBar from './AppBar/AppBar.jsx';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop.jsx';
import css from './App.module.css';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites.jsx'));

const appRoutes = [
    { path: '/', element: <Home /> },
    { path: '/catalog', element: <Catalog /> },
    { path: '/favorites', element: <Favorites /> },
    { path: '*', element: <Navigate to="/" /> },
];

const App = () => {
    return (
        <div className={css.container}>
            <AppBar />
            <div className={css.pageContainer}>
                <ScrollToTop />
                <Suspense fallback={<Loader />}>
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
