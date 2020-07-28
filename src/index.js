import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import 'tachyons';
import { searchRobots } from './reducers';

// const store = createStore(rootReducer); <---- if you had multiple reducers
const store = createStore(searchRobots);

//1) now we can pass the store to our App
// ReactDOM.render(<App store={store}/> , document.getElementById('root'));
//2) use the Provider to pass/manage the store to App and it's children 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
