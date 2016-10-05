export default function ingredientsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_INGREDIENTS':
      return action.payload;
    case 'ADD_INGREDIENT':
      return [...state, action.payload]
    default:
      return state;
  }
};
