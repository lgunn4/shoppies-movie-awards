import {
  FETCH_SEARCH_RESULTS_ENDED,
  FETCH_SEARCH_RESULTS_FAILED,
  FETCH_SEARCH_RESULTS_STARTED,
  FETCH_SEARCH_RESULTS_SUCCESS,
} from '../ActionTypes';
import getOMDBResults from '../Service/SearchResultsService';

export const fetchSearchResultsStartedAction = () => ({
  type: FETCH_SEARCH_RESULTS_STARTED,
});

export const fetchSearchResultsSuccess = (searchText, pageNumber, response) => ({
  type: FETCH_SEARCH_RESULTS_SUCCESS,
  payload: {
    searchCriteria: searchText,
    pageNumber,
    response,
  },
});

export const fetchSearchResultsFailed = (searchText, error) => ({
  type: FETCH_SEARCH_RESULTS_FAILED,
  payload: {
    searchCriteria: searchText,
    error,
  },
});

export const fetchSearchResultsEnded = () => ({
  type: FETCH_SEARCH_RESULTS_ENDED,
});

const fetchSearchResults = (searchText, pageNumber) => (dispatch) => {
  dispatch(fetchSearchResultsStartedAction());
  getOMDBResults(searchText, pageNumber).then((response) => {
    dispatch(fetchSearchResultsSuccess(searchText, pageNumber, response));
  }).catch((error) => {
    dispatch(fetchSearchResultsFailed(searchText, error));
  }).finally(() => {
    dispatch(fetchSearchResultsEnded());
  });
};

export default fetchSearchResults;
