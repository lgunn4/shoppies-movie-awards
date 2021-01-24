import { getNominationResults, postNomination } from '../Service/NominationsService';
import {
  ADD_NOMINATIONS_ENDED,
  ADD_NOMINATIONS_FAILED,
  ADD_NOMINATIONS_STARTED,
  ADD_NOMINATIONS_SUCCESS,
  UI_ADD,
} from '../ActionTypes';
import { addUILoadingAction, removeUILoadingAction } from './UIActions';

export const addNominationStartedAction = () => ({
  type: ADD_NOMINATIONS_STARTED,
});

export const addNominationSuccessAction = (nomination) => ({
  type: ADD_NOMINATIONS_SUCCESS,
  payload: nomination,
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

const addNomination = (nomination) => (dispatch) => {
  dispatch(addUILoadingAction(UI_ADD, nomination.imdbID));
  dispatch(addNominationStartedAction());

  postNomination(nomination);
  if (getNominationResults()
    .some((cacheNomination) => cacheNomination.imdbID === nomination.imdbID)) {
    dispatch(addNominationSuccessAction(nomination));
  } else {
    dispatch(addNominationFailedAction());
  }
  dispatch(addNominationEndedAction());
  dispatch(removeUILoadingAction(nomination.imdbID));
};

export default addNomination;
