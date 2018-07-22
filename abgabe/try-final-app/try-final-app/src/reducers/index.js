import {combineReducers} from 'redux';
import CaloryReducer from './CaloryReducer';

export default combineReducers({
    calorys: CaloryReducer
});