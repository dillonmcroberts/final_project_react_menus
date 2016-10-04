export default function menusReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_MENUS':
      return action.payload;
    case 'ADD_MENU':
      return [...state, action.payload]
    default:
      return state;
  }
};
