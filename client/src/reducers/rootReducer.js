/**Combine reducers into single rootReducer */

import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import attractionsReducer from './attractionsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    searchReducer,
    attractionsReducer,
    userReducer
});

export default rootReducer;