
import {browserHistory} from 'react-router'

export default function recipesReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_RECIPES':
      return action.payload;
    case 'ADD_RECIPE':
      browserHistory.push('/recipes')
      return [...state, action.payload]
      case 'UPDATE_RECIPE':
      browserHistory.push('/recipes')
      const index = state.indexOf(state.find(function (recipe) {
        return recipe.id == action.payload.id;
      }))
      return state.slice(0, index).concat([action.payload]).concat(state.slice(index + 1))
    default:
      return state;
  }
};
