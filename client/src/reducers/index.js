import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'
import counterReducer from './counterReducer';
import authReducer from './authReducer';
import todoReducer from './todosReducer';

export default combineReducers({
    counter: counterReducer,
    auth: authReducer,
    form: reduxForm,
    todos: todoReducer
});