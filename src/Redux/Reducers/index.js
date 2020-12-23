import { combineReducers } from "redux";
import Nominations from "./Nominations";
import SideBarOpen from "./SideBarOpen";
import SearchResults from "./SearchResults";


export const reducers = combineReducers({ Nominations, SideBarOpen, SearchResults });
