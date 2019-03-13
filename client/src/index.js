import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {createStore } from 'redux';
// import {mainReducer} from './reducers/main-reducer.js'
// import {Provider} from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
// let store = createStore(mainReducer);

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

serviceWorker.unregister();
