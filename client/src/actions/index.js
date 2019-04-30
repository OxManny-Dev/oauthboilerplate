import { INCREMENT_COUNTER, DECREMENT_COUNTER, FETCH_USER, FETCH_TODO, ADD_TODO } from './types';
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

export const fetchTodos = () => async dispatch => {
    const res = await axios.get('/api/todos');
    dispatch({type: FETCH_TODO, payload: res.data});
}

export const handleTodoSubmit = todo => async dispatch => {
    const res = await axios.post('/api/todos', {todo});
    dispatch({type: ADD_TODO, payload: res.data});
}
