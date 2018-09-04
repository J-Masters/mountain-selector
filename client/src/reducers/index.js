import { combineReducers } from 'redux';
import mountainsReducer from './mountainsReducer';
import rankingsReducer from './rankingsReducer';

export default combineReducers({
  mountains: mountainsReducer,
  rankings: rankingsReducer
});