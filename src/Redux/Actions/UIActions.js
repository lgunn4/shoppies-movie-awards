import {
    SET_SIDE_BAR_CLOSED,
    SET_SIDE_BAR_OPEN
} from "../ActionTypes";


export const setSideBarOpen = () => ({ type: SET_SIDE_BAR_OPEN });
export const setSideBarClosed = () => ({ type: SET_SIDE_BAR_CLOSED });