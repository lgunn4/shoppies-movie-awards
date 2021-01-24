import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { UI_REMOVE } from '../../ActionTypes';
import { addUILoadingAction, removeUILoadingAction } from '../UIActions';
import deleteNomination, {
  deleteNominationEndedAction,
  deleteNominationStartedAction,
  deleteNominationSuccessAction,
} from '../DeleteNominationAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('DeleteNominationAction', () => {
  test('DeleteNominationAction works', () => {
    const store = mockStore();
    const imdbID = '1111';
    const expectedActions = [
      addUILoadingAction(UI_REMOVE, imdbID),
      deleteNominationStartedAction(),
      deleteNominationSuccessAction(imdbID),
      deleteNominationEndedAction(),
      removeUILoadingAction(imdbID),

    ];
    store.dispatch(deleteNomination(imdbID));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
