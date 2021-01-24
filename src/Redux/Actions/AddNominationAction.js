import { getNominationResults, postNomination } from '../Service/NominationsService';
import {
  addNominationEndedAction,
  addNominationFailedAction,
  addNominationStartedAction,
  addNominationSuccessAction,
  addUILoadingAction,
  removeUILoadingAction,
} from '../Actions';

const addNomination = (nomination) => (dispatch) => {
  dispatch(addUILoadingAction(nomination.imdbID));
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
