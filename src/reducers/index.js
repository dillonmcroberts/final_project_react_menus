import { combineReducers } from 'redux';
import recipesReducer from './recipes_reducer';
import menusReducer from './menus_reducer';
import ingredientsReducer from './ingredients_reducer';
import usersReducer from './users_reducer';
import sessionsReducer from './sessions_reducer';

const rootReducer =  combineReducers({
  menus: menusReducer,
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  users: usersReducer,
  sessions: sessionsReducer
});

export default rootReducer;
