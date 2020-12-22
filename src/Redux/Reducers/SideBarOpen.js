import {SET_SIDE_BAR_CLOSED, SET_SIDE_BAR_OPEN} from "../ActionTypes";


const initialState = false;

export default function SideBarOpen(state = initialState, action) {
    switch (action.type) {
        case SET_SIDE_BAR_OPEN: {
            return true;
        }
        case SET_SIDE_BAR_CLOSED: {
            return false;
        }
        default:
            return state;
    }
}
