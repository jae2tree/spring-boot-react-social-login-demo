import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/app';
import configrationStore from './redux/configrationStore';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configrationStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ,document.getElementById('root')
);