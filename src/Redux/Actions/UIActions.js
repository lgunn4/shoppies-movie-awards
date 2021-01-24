import {
  ADD_UI_LOADING_ACTION, REMOVE_UI_LOADING_ACTION,
  SET_SIDE_BAR_CLOSED,
  SET_SIDE_BAR_OPEN,
} from '../ActionTypes';

export const setSideBarOpen = () => ({ type: SET_SIDE_BAR_OPEN });
export const setSideBarClosed = () => ({ type: SET_SIDE_BAR_CLOSED });

export const addUILoadingAction = (actionType, imdbID) => ({
  type: ADD_UI_LOADING_ACTION,
  payload: {
    type: actionType,
    imdbID,
  },
});

export const removeUILoadingAction = (imdbID) => ({
  type: REMOVE_UI_LOADING_ACTION,
  payload: {
    id: imdbID,
  },
});
