export default function recipesReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_RECIPES':
      return action.payload;
    case 'ADD_RECIPE':
      return [...state, action.payload]
    default:
      return state;
  }
};
