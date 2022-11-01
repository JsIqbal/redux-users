import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './modules/core/components/App.component';
import userReducer from './modules/core/user-reducer';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
    reducer: {
        users: userReducer
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
