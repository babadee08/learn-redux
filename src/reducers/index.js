import counterReducer from './counter';
import loggedInReducer from './isLoggedIn';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: loggedInReducer
});

export default allReducers;