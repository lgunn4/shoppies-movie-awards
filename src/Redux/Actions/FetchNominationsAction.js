import { getNominationResults } from '../Service/NominationsService';
import {
  fetchNominationsEndedAction,
  fetchNominationsFailedAction,
  fetchNominationsStartedAction,
  fetchNominationsSuccessAction,
} from '../Actions';

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
