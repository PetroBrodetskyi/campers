import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import './styles/index.css';

const baseName = '/campers/';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename={baseName}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
