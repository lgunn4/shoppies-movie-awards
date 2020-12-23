import {
    FETCH_SEARCH_RESULTS_ENDED,
    FETCH_SEARCH_RESULTS_FAILED,
    FETCH_SEARCH_RESULTS_STARTED,
    FETCH_SEARCH_RESULTS_SUCCESS
} from "../ActionTypes";
import {getOMDBResults} from "../Service/SearchResultsService";

export const fetchSearchResults = (searchText) => (dispatch) => {
    dispatch({
        type: FETCH_SEARCH_RESULTS_STARTED,
    });
    getOMDBResults(searchText).then(response => {
        dispatch({
            type: FETCH_SEARCH_RESULTS_SUCCESS,
            payload: response,
        })
    }).catch((error) => {
        dispatch({
            type: FETCH_SEARCH_RESULTS_FAILED,
            payload: error,
        });
    }).finally(() => {
        dispatch({
            type: FETCH_SEARCH_RESULTS_ENDED
        })
    })
};