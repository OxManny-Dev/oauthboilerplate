import { FETCH_TODO, ADD_TODO } from './../actions/types';


export default (state = [], action) => {
    switch(action.type) {
        case FETCH_TODO:
            return action.payload;
        case ADD_TODO:
            return action.payload;
        default:
            return state;
    }
};