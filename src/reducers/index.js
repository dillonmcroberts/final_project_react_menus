import { combineReducers } from 'redux';
import menusReducer from './menus_reducer';

const rootReducer =  combineReducers({
  menus: menusReducer,
});


export default rootReducer;
