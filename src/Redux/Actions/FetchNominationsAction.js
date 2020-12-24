import {
    FETCH_NOMINATIONS_ENDED,
    FETCH_NOMINATIONS_FAILED,
    FETCH_NOMINATIONS_STARTED,
    FETCH_NOMINATIONS_SUCCESS,
} from "../ActionTypes";
import {getNominationResults} from "../Service/NominationsService";

export const fetchNominations = () => (dispatch) => {
    dispatch({
        type: FETCH_NOMINATIONS_STARTED,
    });
    getNominationResults().then(response => {
        dispatch({
            type: FETCH_NOMINATIONS_SUCCESS,
            payload: {
                response
            },
        })
    }).catch((error) => {
        dispatch({
            type: FETCH_NOMINATIONS_FAILED,
            payload: {
                error
            },
        });
    }).finally(() => {
        dispatch({
            type: FETCH_NOMINATIONS_ENDED
        })
    })
};