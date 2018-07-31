import { combineReducers } from 'redux';
import mountainsReducer from './mountainsReducer';

export default combineReducers({
  mountains: mountainsReducer,
});