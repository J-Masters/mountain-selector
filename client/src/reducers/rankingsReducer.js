import { SET_RANKINGS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SET_RANKINGS:
      return action.payload;
    default:
      return state;
  }
}