import { combineReducers } from 'redux';
import postReducer from './postReducer';
import displayReducer from './displayReducer';

export default combineReducers({
    stocks: postReducer,
    // myStocks: displayReducer
});