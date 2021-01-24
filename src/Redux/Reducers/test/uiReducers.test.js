import uiReducer from '../uiReducer';
import {
  ADD_UI_LOADING_ACTION, REMOVE_UI_LOADING_ACTION, SET_SIDE_BAR_CLOSED, SET_SIDE_BAR_OPEN, UI_ADD,
} from '../../ActionTypes';

describe('UIReducer', () => {
  test('correctly ignores incorrect action', () => {
    const action = {
      type: 'DUMMY_ACTION',
    };
    const initialState = {
      sideBarOpen: false,
      loading: [],
    };

    expect(uiReducer(undefined, action)).toEqual(initialState);
  });

  test('works with SET_SIDE_BAR_OPEN', () => {
    const action = {
      type: SET_SIDE_BAR_OPEN,
    };
    const expectedState = {
      sideBarOpen: true,
      loading: [],
    };

    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  test('Works with SET_SIDE_BAR_CLOSED', () => {
    const action = {
      type: SET_SIDE_BAR_CLOSED,
    };
    const initialState = {
      sideBarOpen: true,
      loading: [],
    };
    const expectedState = {
      sideBarOpen: false,
      loading: [],
    };

    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  test('Works with ADD_UI_LOADING_ACTION', () => {
    const action = {
      type: ADD_UI_LOADING_ACTION,
      payload: {
        type: UI_ADD,
        id: 'id',
      },
    };
    const expectedState = {
      sideBarOpen: false,
      loading: [
        {
          type: UI_ADD,
          id: 'id',
        },
      ],
    };

    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  test('Works with REMOVE_UI_LOADING_ACTION', () => {
    const action = {
      type: REMOVE_UI_LOADING_ACTION,
      payload: {
        id: 'id',
      },
    };
    const intialState = {
      sideBarOpen: false,
      loading: [
        {
          type: UI_ADD,
          id: 'id',
        },
      ],
    };

    const expectedState = {
      sideBarOpen: false,
      loading: [],
    };

    expect(uiReducer(intialState, action)).toEqual(expectedState);
  });
});
