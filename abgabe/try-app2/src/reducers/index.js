import { combineReducers } from 'redux';
import caloryReducer from './CaloryReducer';

export default combineReducers({
  Calories: caloryReducer
});