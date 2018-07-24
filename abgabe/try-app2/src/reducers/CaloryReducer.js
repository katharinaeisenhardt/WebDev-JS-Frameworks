import { FETCH_CALORYS, NEW_CALORY } from '../actions/ActionTypes';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CALORYS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_CALORY:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}