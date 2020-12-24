import {
    ADD_NOMINATIONS_ENDED,
    ADD_NOMINATIONS_FAILED,
    ADD_NOMINATIONS_STARTED,
    ADD_NOMINATIONS_SUCCESS,
} from "../ActionTypes";
import {postNomination} from "../Service/NominationsService";

export const addNomination = (nomination) => (dispatch) => {
    dispatch({
        type: ADD_NOMINATIONS_STARTED,
    });
    postNomination(nomination).then(response => {
        dispatch({
            type: ADD_NOMINATIONS_SUCCESS,
            payload: {
                response
            },
        })
    }).catch((error) => {
        dispatch({
            type: ADD_NOMINATIONS_FAILED,
            payload: {
                error
            },
        });
    }).finally(() => {
        dispatch({
            type: ADD_NOMINATIONS_ENDED
        })
    })
};