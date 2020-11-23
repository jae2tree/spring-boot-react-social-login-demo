import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/app';
import configrationStore from './redux/configrationStore';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configrationStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);