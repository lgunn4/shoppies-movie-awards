import {
  ADD_NOMINATIONS_ENDED,
  ADD_NOMINATIONS_FAILED,
  ADD_NOMINATIONS_STARTED,
  ADD_NOMINATIONS_SUCCESS,
  ADD_UI_LOADING_ACTION,
  DELETE_NOMINATIONS_ENDED,
  DELETE_NOMINATIONS_FAILED,
  DELETE_NOMINATIONS_STARTED,
  DELETE_NOMINATIONS_SUCCESS,
  REMOVE_UI_LOADING_ACTION,
} from './ActionTypes';

export const addUILoadingAction = (actionType, imdbID) => ({
  type: ADD_UI_LOADING_ACTION,
  payload: {
    type: actionType,
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

export const deleteNominationStartedAction = () => ({
  type: DELETE_NOMINATIONS_STARTED,
});

export const deleteNominationSuccessAction = (imdbID) => ({
  type: DELETE_NOMINATIONS_SUCCESS,
  payload: {
    imdbID,
  },
});

export const deleteNominationFailedAction = () => ({
  type: DELETE_NOMINATIONS_FAILED,
  payload: {
    error: DELETE_NOMINATIONS_FAILED,
  },
});

export const deleteNominationEndedAction = () => ({
  type: DELETE_NOMINATIONS_ENDED,
});
