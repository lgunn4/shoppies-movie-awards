import { combineReducers } from "redux";
import Nominations from "./Nominations";
import uiReducer from "./uiReducer";
import SearchResults from "./SearchResults";

export const reducers = combineReducers({ Nominations, uiReducer, SearchResults });
