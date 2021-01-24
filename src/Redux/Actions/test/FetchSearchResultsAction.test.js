import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { OMDB_API_URL } from '../../../Assets/Constants';
import fetchSearchResults, {
  fetchSearchResultsStartedAction,
} from '../FetchSearchResultsAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('FetchSearchResultsAction', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  test('fetchSearchResults works', () => {
    const searchCriteria = 'yes';
    const pageNumber = 1;
    const url = `${OMDB_API_URL}&type=movie&s=${searchCriteria}&page=${pageNumber}`;
    fetchMock.getOnce(url, {
      body: {
        Search: [],
      },
      headers: { 'content-type': 'application/json' },
    });
    const store = mockStore();

    const expectedActions = [
      fetchSearchResultsStartedAction(),
    ];

    store.dispatch(fetchSearchResults(searchCriteria, pageNumber));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
