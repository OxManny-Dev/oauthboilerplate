import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import authReducer from './authReducer';

export default combineReducers({
    counter: counterReducer,
    auth: authReducer
});