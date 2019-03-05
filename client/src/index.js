import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore } from 'redux';
import {mainReducer} from './reducers/main-reducer.js'
import {Provider} from 'react-redux';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

let store = createStore(mainReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
