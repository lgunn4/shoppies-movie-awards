import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import deleteNomination from '../DeleteNominationAction';
import {
  addUILoadingAction,
  deleteNominationEndedAction,
  deleteNominationStartedAction,
  deleteNominationSuccessAction, removeUILoadingAction,
} from '../../Actions';
import { UI_REMOVE } from '../../ActionTypes';

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
