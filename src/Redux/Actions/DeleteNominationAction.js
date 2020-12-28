import {
    ADD_UI_LOADING_ACTION,
    DELETE_NOMINATIONS_ENDED,
    DELETE_NOMINATIONS_FAILED,
    DELETE_NOMINATIONS_STARTED,
    DELETE_NOMINATIONS_SUCCESS,
    REMOVE_UI_LOADING_ACTION,
    UI_REMOVE,
} from "../ActionTypes";
import {deleteAPINomination} from "../Service/NominationsService";

export const deleteNomination = (strapiID) => (dispatch) => {
    dispatch({
        type: ADD_UI_LOADING_ACTION,
        payload: {
            type: UI_REMOVE,
            id: strapiID,
        }
    });
    dispatch({
        type: DELETE_NOMINATIONS_STARTED,
    });
    deleteAPINomination(strapiID).then(response => {
        dispatch({
            type: DELETE_NOMINATIONS_SUCCESS,
            payload: {
                StrapiID: strapiID,
            },
        });
        dispatch({
            type: REMOVE_UI_LOADING_ACTION,
            payload: {
                id: strapiID,
            }
        });
    }).catch((error) => {
        dispatch({
            type: DELETE_NOMINATIONS_FAILED,
            payload: {
                error
            },
        });
    }).finally(() => {
        dispatch({
            type: DELETE_NOMINATIONS_ENDED
        })
    })
};