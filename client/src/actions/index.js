import axios from 'axios';

export const fetchMountains = () => async dispatch => {
  const response = await axios.get('/');

  dispatch({ type: "FETCH_MOUNTAINS", payload: response.data});
};