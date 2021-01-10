import {
  FETCH_NOMINATIONS_ENDED,
  FETCH_NOMINATIONS_FAILED,
  FETCH_NOMINATIONS_STARTED,
  FETCH_NOMINATIONS_SUCCESS,
} from '../ActionTypes';
import { getNominationResults } from '../Service/NominationsService';

const fetchNominations = () => (dispatch) => {
  dispatch({
    type: FETCH_NOMINATIONS_STARTED,
  });
  const nominations = getNominationResults();

  if (nominations) {
    dispatch({
      type: FETCH_NOMINATIONS_SUCCESS,
      payload: nominations,
    });
  } else {
    dispatch({
      type: FETCH_NOMINATIONS_FAILED,
      payload: {
        error: FETCH_NOMINATIONS_FAILED,
      },
    });
  }

  dispatch({
    type: FETCH_NOMINATIONS_ENDED,
  });
};

export default fetchNominations;
