import {
    DELETE_NOMINATIONS_ENDED,
    DELETE_NOMINATIONS_FAILED,
    DELETE_NOMINATIONS_STARTED,
    DELETE_NOMINATIONS_SUCCESS,
} from "../ActionTypes";
import {deleteAPINomination} from "../Service/NominationsService";

export const deleteNomination = (strapiID) => (dispatch) => {
    dispatch({
        type: DELETE_NOMINATIONS_STARTED,
    });
    deleteAPINomination(strapiID).then(response => {
        dispatch({
            type: DELETE_NOMINATIONS_SUCCESS,
            payload: {
                StrapiID: strapiID,
            },
        })
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