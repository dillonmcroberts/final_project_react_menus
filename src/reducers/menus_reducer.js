export default function menusReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_MENUS':
    console.log('reducer', action.payload);
      return action.payload;
    case 'ADD_MENU':
      return [...state, action.payload]
    case 'UPDATE_MENU':
      return [...state.filter(cat => cat.id !== action.cat.id),
      Object.assign({}),action.cat]
    default:
      return state;
  }
};
