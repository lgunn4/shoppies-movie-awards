import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AddNominationAction, {
  addNominationEndedAction,
  addNominationStartedAction,
  addNominationSuccessAction,
} from '../AddNominationAction';

import { UI_ADD } from '../../ActionTypes';
import { addUILoadingAction, removeUILoadingAction } from '../UIActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('AddNominationAction', () => {
  test('AddNomination works', () => {
    const store = mockStore();
    const nomination = {
      imdbID: '1111',
    };

    const expectedActions = [
      addUILoadingAction(UI_ADD, nomination.imdbID),
      addNominationStartedAction(),
      addNominationSuccessAction(nomination),
      addNominationEndedAction(),
      removeUILoadingAction(nomination.imdbID),
    ];
    store.dispatch(AddNominationAction(nomination));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
