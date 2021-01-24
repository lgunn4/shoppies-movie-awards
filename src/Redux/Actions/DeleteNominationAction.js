import {
  ADD_UI_LOADING_ACTION,
  DELETE_NOMINATIONS_ENDED,
  DELETE_NOMINATIONS_FAILED,
  DELETE_NOMINATIONS_STARTED,
  DELETE_NOMINATIONS_SUCCESS,
  REMOVE_UI_LOADING_ACTION,
  UI_REMOVE,
} from '../ActionTypes';
import { getNominationResults, postDeleteNomination } from '../Service/NominationsService';

const deleteNomination = (imdbID) => (dispatch) => {
  dispatch({
    type: ADD_UI_LOADING_ACTION,
    payload: {
      type: UI_REMOVE,
      id: imdbID,
    },
  });
  dispatch({
    type: DELETE_NOMINATIONS_STARTED,
  });

  postDeleteNomination(imdbID);

  if (!getNominationResults().some((cacheNomination) => cacheNomination.imdbID === imdbID)) {
    dispatch({
      type: DELETE_NOMINATIONS_SUCCESS,
      payload: {
        imdbID,
      },
    });
    dispatch({
      type: REMOVE_UI_LOADING_ACTION,
      payload: {
        id: imdbID,
      },
    });
  } else {
    dispatch({
      type: DELETE_NOMINATIONS_FAILED,
      payload: {
        error: DELETE_NOMINATIONS_FAILED,
      },
    });
  }
  dispatch({
    type: DELETE_NOMINATIONS_ENDED,
  });
};

export default deleteNomination;
