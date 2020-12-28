import {
    ADD_NOMINATIONS_ENDED,
    ADD_NOMINATIONS_FAILED,
    ADD_NOMINATIONS_STARTED,
    ADD_NOMINATIONS_SUCCESS, ADD_UI_LOADING_ACTION, REMOVE_UI_LOADING_ACTION, UI_ADD,
} from "../ActionTypes";
import {postNomination} from "../Service/NominationsService";

export const addNomination = (nomination) => (dispatch) => {
    dispatch({
        type: ADD_UI_LOADING_ACTION,
        payload: {
            type: UI_ADD,
            id: nomination.imdbID,
        }
    });
    dispatch({
        type: ADD_NOMINATIONS_STARTED,
    });
    postNomination(nomination).then(response => {
        dispatch({
            type: ADD_NOMINATIONS_SUCCESS,
            payload: {
                response
            },
        });
        dispatch({
            type: REMOVE_UI_LOADING_ACTION,
            payload: {
                id: nomination.imdbID,
            }
        });
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