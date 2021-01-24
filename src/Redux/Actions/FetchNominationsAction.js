import { getNominationResults } from '../Service/NominationsService';
import {
  FETCH_NOMINATIONS_ENDED,
  FETCH_NOMINATIONS_FAILED,
  FETCH_NOMINATIONS_STARTED,
  FETCH_NOMINATIONS_SUCCESS,
} from '../ActionTypes';

export const fetchNominationsStartedAction = () => ({
  type: FETCH_NOMINATIONS_STARTED,
});

export const fetchNominationsSuccessAction = (nominations) => ({
  type: FETCH_NOMINATIONS_SUCCESS,
  payload: nominations,
});

export const fetchNominationsFailedAction = () => ({
  type: FETCH_NOMINATIONS_FAILED,
  payload: {
    error: FETCH_NOMINATIONS_FAILED,
  },
});

export const fetchNominationsEndedAction = () => ({
  type: FETCH_NOMINATIONS_ENDED,
});

const fetchNominations = () => (dispatch) => {
  dispatch(fetchNominationsStartedAction());
  const nominations = getNominationResults();

  if (nominations) {
    dispatch(fetchNominationsSuccessAction(nominations));
  } else {
    dispatch(fetchNominationsFailedAction());
  }
  dispatch(fetchNominationsEndedAction());
};

export default fetchNominations;
