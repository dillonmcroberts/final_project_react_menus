import React from 'react';

import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import css from '../src/index.css'
import ReduxThunk from 'redux-thunk'
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';
import {fetchMenus, fetchRecipes, fetchIngredients, fetchUsers } from './actions'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));

store.dispatch( fetchIngredients() );
store.dispatch( fetchUsers() );
store.dispatch( fetchRecipes() );
store.dispatch( fetchMenus() )


console.log(store.getState());

ReactDOM.render(
<div>
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
    </Provider>
    </div>,

  document.getElementById('root')
);
