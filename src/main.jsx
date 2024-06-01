import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import './styles/index.css';

const baseName = '/camper';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename={baseName}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
