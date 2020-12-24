import {
    ADD_NOMINATIONS_ENDED,
    ADD_NOMINATIONS_FAILED,
    ADD_NOMINATIONS_STARTED, ADD_NOMINATIONS_SUCCESS,
    DELETE_NOMINATIONS_ENDED, DELETE_NOMINATIONS_FAILED,
    DELETE_NOMINATIONS_STARTED, DELETE_NOMINATIONS_SUCCESS,
    FETCH_NOMINATIONS_ENDED,
    FETCH_NOMINATIONS_FAILED,
    FETCH_NOMINATIONS_STARTED,
    FETCH_NOMINATIONS_SUCCESS,

} from "../ActionTypes";

const initialState = {
    isLoading: false,
    error: null,
    nominations: [],
};

export default function Nominations(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOMINATIONS_STARTED:
        case ADD_NOMINATIONS_STARTED:
        case DELETE_NOMINATIONS_STARTED: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case FETCH_NOMINATIONS_SUCCESS: {
            return {
                ...state,
                nominations: action.payload.response.map(nomination => ({...nomination, StrapiID: nomination.id, id:null})),
                error: null
            };
        }
        case FETCH_NOMINATIONS_FAILED: {
            return {
                ...state,
                nominations: [],
                error: action.payload.error,
            }
        }
        case ADD_NOMINATIONS_SUCCESS: {
            return {
                ...state,
                nominations: [
                    ...state.nominations,
                    {
                        ...action.payload.response,
                        StrapiID: action.payload.response.id,
                    }
                ]
            }
        }
        case ADD_NOMINATIONS_FAILED:
        case DELETE_NOMINATIONS_FAILED: {
            return {
                ...state,
                error: action.payload.error,
            }
        }
        case DELETE_NOMINATIONS_SUCCESS: {
            return {
                ...state,
                nominations: state.nominations.filter(nomination => nomination.StrapiID !== action.payload.StrapiID),
            }
        }
        case FETCH_NOMINATIONS_ENDED:
        case ADD_NOMINATIONS_ENDED:
        case DELETE_NOMINATIONS_ENDED: {
            return {
                ...state,
                isLoading: false,
            }
        }
        default:
            return state;
    }
}
