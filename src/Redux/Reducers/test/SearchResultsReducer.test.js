import SearchResults from '../SearchResults';
import {
  FETCH_SEARCH_RESULTS_ENDED,
  FETCH_SEARCH_RESULTS_FAILED,
  FETCH_SEARCH_RESULTS_STARTED,
  FETCH_SEARCH_RESULTS_SUCCESS,
} from '../../ActionTypes';

describe('SearchResultsReducer', () => {
  test('DUMMY_ACTION does nothing', () => {
    const action = {
      type: 'DUMMY_ACTION',
    };
    const initialState = {
      totalResults: '',
      searchCriteria: null,
      pageNumber: 1,
      error: null,
      isLoading: false,
      results: [],
    };
    expect(SearchResults(undefined, action)).toEqual(initialState);
  });

  test('FETCH_SEARCH_RESULTS_STARTED works properly', () => {
    const action = {
      type: FETCH_SEARCH_RESULTS_STARTED,
    };
    const expectedState = {
      totalResults: '',
      searchCriteria: null,
      pageNumber: 1,
      error: null,
      isLoading: true,
      results: [],
    };
    expect(SearchResults(undefined, action)).toEqual(expectedState);
  });

  test('FETCH_SEARCH_RESULTS_SUCCESS works properly', () => {
    const action = {
      type: FETCH_SEARCH_RESULTS_SUCCESS,
      payload: {
        searchCriteria: 'test',
        pageNumber: 1,
        response: {
          totalResults: '13',
          Search: [{}],
        },
      },
    };
    const expectedState = {
      totalResults: '13',
      searchCriteria: 'test',
      pageNumber: 1,
      error: null,
      isLoading: true,
      results: [{}],
    };
    expect(SearchResults(undefined, action)).toEqual(expectedState);
  });

  test('FETCH_SEARCH_RESULTS_FAILED works properly', () => {
    const action = {
      type: FETCH_SEARCH_RESULTS_FAILED,
      payload: {
        searchCriteria: 'test',
        error: { yes: 'yes' },
      },
    };
    const expectedState = {
      totalResults: 0,
      searchCriteria: 'test',
      pageNumber: 1,
      error: action.payload.error,
      isLoading: false,
      results: [],
    };
    expect(SearchResults(undefined, action)).toEqual(expectedState);
  });

  test('FETCH_SEARCH_RESULTS_ENDED works properly', () => {
    const action = {
      type: FETCH_SEARCH_RESULTS_ENDED,
    };
    const initialState = {
      totalResults: '166',
      searchCriteria: 'SEARCHING',
      pageNumber: 14,
      error: null,
      isLoading: true,
      results: [],
    };

    const expectedState = {
      ...initialState,
      isLoading: false,
    };

    expect(SearchResults(initialState, action)).toEqual(expectedState);
  });
});
