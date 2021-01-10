import { combineReducers } from 'redux';
import Nominations from './Nominations';
import uiReducer from './uiReducer';
import SearchResults from './SearchResults';

const reducers = combineReducers({ Nominations, uiReducer, SearchResults });

export default reducers;
