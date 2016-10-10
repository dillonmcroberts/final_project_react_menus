import {browserHistory} from 'react-router'

export default function usersReducer(state=[], action) {

  switch ( action.type ) {
    case 'FETCH_USERS':
      return action.payload;
      case 'ADD_USER':
        browserHistory.push('/login')
          return [...state, action.payload]
    default:
      return state;
  }
};
