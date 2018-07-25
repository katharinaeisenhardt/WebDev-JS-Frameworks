import { FETCH_CALORYS, NEW_CALORY, GET_CALORY, UPDATE_CALORY, DELETE_CALORY } from '../actions/ActionTypes';

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
    case GET_CALORY:
    return {
      ...state,
      item: action.payload
    };
    case UPDATE_CALORY:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_CALORY:
    return {
      ...state,
      item: action.payload
    };
    default:
      return state;
  }
}