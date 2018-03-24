import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, compose, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk';
import  productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';


const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension());

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})
const store = createStore(
    allReducers,
    {
        products: [{name: 'iPhone'}],
        user: 'Michael'
    },
    allStoreEnhancers

);

console.log(store.getState())


ReactDOM.render(<Provider store={store}><App
aRandomProps="whatever"/></Provider>, document.getElementById('root'));
registerServiceWorker();
