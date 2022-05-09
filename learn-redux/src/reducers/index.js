import counterReducer from "./counter";
import loggedReducer from "./isLogged";

import {combineReducers} from 'redux';

const allCombineReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})

export default allCombineReducers