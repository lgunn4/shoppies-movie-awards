import {
  ADD_NOMINATIONS_ENDED,
  ADD_NOMINATIONS_FAILED,
  ADD_NOMINATIONS_STARTED,
  ADD_NOMINATIONS_SUCCESS,
  ADD_UI_LOADING_ACTION,
  REMOVE_UI_LOADING_ACTION,
  UI_ADD,
} from './ActionTypes';

export const addUILoadingAction = (imdbID) => ({
  type: ADD_UI_LOADING_ACTION,
  payload: {
    type: UI_ADD,
    imdbID,
  },
});

export const addNominationStartedAction = () => ({
  type: ADD_NOMINATIONS_STARTED,
});

export const addNominationSuccessAction = (nomination) => ({
  type: ADD_NOMINATIONS_SUCCESS,
  payload: nomination,
});

export const removeUILoadingAction = (imdbID) => ({
  type: REMOVE_UI_LOADING_ACTION,
  payload: {
    id: imdbID,
  },
});

export const addNominationFailedAction = () => ({
  type: ADD_NOMINATIONS_FAILED,
  payload: {
    error: ADD_NOMINATIONS_FAILED,
  },
});

export const addNominationEndedAction = () => ({
  type: ADD_NOMINATIONS_ENDED,
});
