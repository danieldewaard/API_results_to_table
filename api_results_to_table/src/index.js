import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { users, UserState } from './users/reducers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

export interface MainState {
    users: UserState;
}

const reducers = combineReducers({
    users
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


