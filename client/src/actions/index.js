import { INCREMENT_COUNTER, DECREMENT_COUNTER, FETCH_USER } from './types';
import axios from  'axios';

export const incrementCounter = () => {
    return { type: INCREMENT_COUNTER };
};

export const decrementCounter = () => {
    return { type: DECREMENT_COUNTER };
};

export const fetchUser = () =>  async dispatch => {
    const res = await axios.get('/api/currentUser');
    dispatch({ type: FETCH_USER, payload: res.data});
}

