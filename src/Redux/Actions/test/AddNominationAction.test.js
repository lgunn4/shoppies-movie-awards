import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AddNominationAction from '../AddNominationAction';
import {
  addNominationEndedAction,
  addNominationStartedAction,
  addNominationSuccessAction,
  addUILoadingAction,
  removeUILoadingAction,
} from '../../Actions';
import { UI_ADD } from '../../ActionTypes';

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
