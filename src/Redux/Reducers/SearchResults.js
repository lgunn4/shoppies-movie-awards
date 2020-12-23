import {FETCH_SEARCH_RESULTS_SUCCESS} from "../ActionTypes";

const initialState = [];

export default function SearchResults(state = initialState, action) {
    switch (action.type) {
        case FETCH_SEARCH_RESULTS_SUCCESS: {
            return action.payload.Search;
        }
        default:
            return state;
    }
}
