import * as types from '../actions/ActionTypes';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = [], action) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      sessionStorage.setItem('jwt', action.payload.jwt)
      sessionStorage.setItem('currentUserId', action.payload.currentUserId)
      browserHistory.push('/')
      return !!sessionStorage.jwt
    case 'LOG_OUT':
      sessionStorage.clear();
      browserHistory.push('/')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
