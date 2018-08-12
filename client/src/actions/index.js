import axios from 'axios';
import { FETCH_MOUNTAINS } from './types';

export const fetchMountains = () => async dispatch => {
  const res = await axios.get('/mountains');

  dispatch({ type: FETCH_MOUNTAINS, payload: res.data});
};