import axios from 'axios';
import { FETCH_MOUNTAINS, SET_RANKINGS } from './types';

export const fetchMountains = () => async dispatch => {
  const res = await axios.get('/mountains');

  dispatch({ type: FETCH_MOUNTAINS, payload: res.data });
};

export const setRankings = rankings => {
  return { type: SET_RANKINGS, payload: rankings };
};
