import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './rtk-files/store';

// create root per dom
const root = ReactDOM.createRoot(document.getElementById('root'));

// configure store, render app
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
