import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchNominations, {
  fetchNominationsEndedAction,
  fetchNominationsStartedAction,
  fetchNominationsSuccessAction,
} from '../FetchNominationsAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('FetchNominationsAction', () => {
  test('fetchNominations works properly', () => {
    const store = mockStore();
    const expectedActions = [
      fetchNominationsStartedAction(),
      fetchNominationsSuccessAction([]),
      fetchNominationsEndedAction(),
    ];

    store.dispatch(fetchNominations());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
