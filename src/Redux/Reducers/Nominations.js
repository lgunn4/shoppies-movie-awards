import {ADD_NOMINATION, REMOVE_NOMINATION} from "../ActionTypes";

const initialState = [];

export default function Nominations(state = initialState, action) {
    switch (action.type) {
        case ADD_NOMINATION: {
            const { id, content } = action.payload;
            return {
                ...state,
                nominations: {
                    ...state.nominations,
                    [id]: {
                        content,
                    }
                }
            };
        }
        case REMOVE_NOMINATION: {
            const { id } = action.payload;
            return {
                ...state,
                [id] : null,
            };
        }
        default:
            return state;
    }
}
