/**Combine reducers into single rootReducer */

import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import userReducer from './userReducer';
import attractionsReducer from './attractionsReducer';

const rootReducer = combineReducers({
    userReducer,
    searchReducer,
    attractionsReducer
});

export default rootReducer;