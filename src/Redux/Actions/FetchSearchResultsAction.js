import {
  FETCH_SEARCH_RESULTS_ENDED,
  FETCH_SEARCH_RESULTS_FAILED,
  FETCH_SEARCH_RESULTS_STARTED,
  FETCH_SEARCH_RESULTS_SUCCESS,
} from '../ActionTypes';
import getOMDBResults from '../Service/SearchResultsService';

const fetchSearchResults = (searchText, pageNumber) => (dispatch) => {
  dispatch({
    type: FETCH_SEARCH_RESULTS_STARTED,
  });
  getOMDBResults(searchText, pageNumber).then((response) => {
    dispatch({
      type: FETCH_SEARCH_RESULTS_SUCCESS,
      payload: {
        searchCriteria: searchText,
        pageNumber,
        response,
      },
    });
  }).catch((error) => {
    dispatch({
      type: FETCH_SEARCH_RESULTS_FAILED,
      payload: {
        searchCriteria: searchText,
        error,
      },
    });
  }).finally(() => {
    dispatch({
      type: FETCH_SEARCH_RESULTS_ENDED,
    });
  });
};

export default fetchSearchResults;
