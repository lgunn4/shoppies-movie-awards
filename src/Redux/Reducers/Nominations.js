import {ADD_NOMINATION, REMOVE_NOMINATION} from "../ActionTypes";

const initialState = [];

export default function Nominations(state = initialState, action) {
    switch (action.type) {
        case ADD_NOMINATION: {
            const { content } = action.payload;
            return {
                ...state,
                content,
            };
        }
        case REMOVE_NOMINATION: {
            const { imdbID } = action.payload;
            return state.filter(nomination => nomination.imdbID !== imdbID);
        }
        default:
            return state;
    }
}
