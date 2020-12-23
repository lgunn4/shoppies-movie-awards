import {
    FETCH_SEARCH_RESULTS_ENDED,
    FETCH_SEARCH_RESULTS_FAILED,
    FETCH_SEARCH_RESULTS_STARTED,
    FETCH_SEARCH_RESULTS_SUCCESS
} from "../ActionTypes";

const initialState = {
    totalResults: "",
    searchCriteria: "",
    error: null,
    isLoading: false,
    results: []
};

export default function SearchResults(state = initialState, action) {
    switch (action.type) {
        case FETCH_SEARCH_RESULTS_STARTED: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case FETCH_SEARCH_RESULTS_SUCCESS: {
            return {
                ...state,
                searchCriteria: action.payload.searchCriteria,
                totalResults: action.payload.response.totalResults,
                results: action.payload.response.Search,
                isLoading: true,
                error: null
            };
        }
        case FETCH_SEARCH_RESULTS_FAILED: {
            return {
                ...state,
                searchCriteria: action.payload.searchCriteria,
                totalResults: 0,
                results: [],
                error: action.payload.error,
            }
        }
        case FETCH_SEARCH_RESULTS_ENDED: {
            return {
                ...state,
                isLoading: false,
            }
        }
        default:
            return state;
    }
}
