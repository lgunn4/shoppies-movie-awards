import {
  DELETE_NOMINATIONS_ENDED,
  DELETE_NOMINATIONS_FAILED,
  DELETE_NOMINATIONS_STARTED, DELETE_NOMINATIONS_SUCCESS,
  UI_REMOVE,
} from '../ActionTypes';
import { getNominationResults, postDeleteNomination } from '../Service/NominationsService';
import { addUILoadingAction, removeUILoadingAction } from './UIActions';

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

const deleteNomination = (imdbID) => (dispatch) => {
  dispatch(addUILoadingAction(UI_REMOVE, imdbID));
  dispatch(deleteNominationStartedAction());

  postDeleteNomination(imdbID);

  if (!getNominationResults().some((cacheNomination) => cacheNomination.imdbID === imdbID)) {
    dispatch(deleteNominationSuccessAction(imdbID));
  } else {
    dispatch(deleteNominationFailedAction());
  }
  dispatch(deleteNominationEndedAction());
  dispatch(removeUILoadingAction(imdbID));
};

export default deleteNomination;
