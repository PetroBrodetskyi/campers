import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './store';
import './styles/index.css';

const baseName = '/campers';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename={baseName}>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
