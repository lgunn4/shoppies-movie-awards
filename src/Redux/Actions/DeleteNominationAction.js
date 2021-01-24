import {
  UI_REMOVE,
} from '../ActionTypes';
import { getNominationResults, postDeleteNomination } from '../Service/NominationsService';
import {
  addUILoadingAction, deleteNominationEndedAction, deleteNominationFailedAction,
  deleteNominationStartedAction,
  deleteNominationSuccessAction,
  removeUILoadingAction,
} from '../Actions';

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
