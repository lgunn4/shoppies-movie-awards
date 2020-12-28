import {
    ADD_UI_LOADING_ACTION,
    REMOVE_UI_LOADING_ACTION,
    SET_SIDE_BAR_CLOSED,
    SET_SIDE_BAR_OPEN
} from "../ActionTypes";

const initialState = {
    sideBarOpen: false,
    loading: [],
};

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SIDE_BAR_OPEN: {
            return {
                ...state,
                sideBarOpen: true,
            };
        }
        case SET_SIDE_BAR_CLOSED: {
            return {
                ...state,
                sideBarOpen: false,
            };
        }
        case ADD_UI_LOADING_ACTION: {
            return {
               ...state,
                loading: [
                    ...state.loading,
                    action.payload,
                ]
            }
        }
        case REMOVE_UI_LOADING_ACTION: {
            return {
                ...state,
                loading: state.loading.filter(uiAction => uiAction.id !== action.payload.id),
            }
        }
        default:
            return state;
    }
}
