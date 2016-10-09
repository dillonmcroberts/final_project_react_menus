import {browserHistory} from 'react-router'

export default function menusReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_MENUS':
    console.log('reducer', action.payload);
      return action.payload

      case 'ADD_MENU':

          return [...state, action.payload]

      case 'UPDATE_MENU':
      const index = state.indexOf(state.find(function (menu) {
        return menu.id == action.payload.id;
      }))
      return state.slice(0, index).concat([action.payload]).concat(state.slice(index + 1))

    default:
      return state;
  }
};
