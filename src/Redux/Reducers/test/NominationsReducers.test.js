import Nominations from '../Nominations';
import {
  ADD_NOMINATIONS_FAILED,
  ADD_NOMINATIONS_STARTED, ADD_NOMINATIONS_SUCCESS,
  DELETE_NOMINATIONS_FAILED,
  DELETE_NOMINATIONS_STARTED, DELETE_NOMINATIONS_SUCCESS, FETCH_NOMINATIONS_FAILED,
  FETCH_NOMINATIONS_STARTED, FETCH_NOMINATIONS_SUCCESS,
} from '../../ActionTypes';

describe('NominationsReducer', () => {
  const expectedState = {
    isLoading: false,
    error: null,
    nominations: [],
    loaded: false,
  };
  test('DUMMY_ACTION does nothing', () => {
    const action = {
      type: 'DUMMY_ACTION',
    };
    expect(Nominations(undefined, action)).toEqual(expectedState);
  });

  test('STARTED actions do the same thing', () => {
    const actions = [
      FETCH_NOMINATIONS_STARTED,
      ADD_NOMINATIONS_STARTED,
      DELETE_NOMINATIONS_STARTED,
    ];

    actions.forEach((startedAction) => {
      const action = {
        type: startedAction,
      };
      const startedExpectedState = {
        ...expectedState,
        isLoading: true,
      };
      expect(Nominations(undefined, action)).toEqual(startedExpectedState);
    });
  });

  test('FAILED actions do the same thing', () => {
    const actions = [
      ADD_NOMINATIONS_FAILED,
      DELETE_NOMINATIONS_FAILED,
      FETCH_NOMINATIONS_FAILED,
    ];

    actions.forEach((startedAction) => {
      const action = {
        type: startedAction,
        payload: {
          error: 'This is an error',
        },
      };
      const startedExpectedState = {
        ...expectedState,
        error: 'This is an error',
      };
      expect(Nominations(undefined, action)).toEqual(startedExpectedState);
    });
  });

  test('FETCH_NOMINATION_SUCCESS action populate nominations properly', () => {
    const actions = [
      FETCH_NOMINATIONS_SUCCESS,
    ];

    actions.forEach((startedAction) => {
      const action = {
        type: startedAction,
        payload: [{}],
      };
      const startedExpectedState = {
        ...expectedState,
        loaded: true,
        nominations: [{}],
      };
      expect(Nominations(undefined, action)).toEqual(startedExpectedState);
    });
  });

  test('ADD_NOMINATIONS_SUCCESS action adds nominations properly', () => {
    const actions = [
      ADD_NOMINATIONS_SUCCESS,
    ];

    actions.forEach((startedAction) => {
      const action = {
        type: startedAction,
        payload: {
          Title: 'MOVIE2',
        },
      };
      const initialState = {
        ...expectedState,
        nominations: [{
          Title: 'MOVIE1',
        }],
      };

      const addExpectedState = {
        ...initialState,
        nominations: [
          ...initialState.nominations,
          {
            Title: 'MOVIE2',
          },
        ],
      };
      expect(Nominations(initialState, action)).toEqual(addExpectedState);
    });
  });

  test('DELETE_NOMINATIONS_SUCCESS action adds nominations properly', () => {
    const actions = [
      DELETE_NOMINATIONS_SUCCESS,
    ];

    actions.forEach((startedAction) => {
      const action = {
        type: startedAction,
        payload: {
          imdbID: '111',
        },
      };
      const initialState = {
        ...expectedState,
        nominations: [{
          imdbID: '222',
        },
        {
          imdbID: '111',
        },
        {
          imdbID: '333',
        }],
      };

      const deleteExpectedState = {
        ...expectedState,
        nominations: [{
          imdbID: '222',
        },

        {
          imdbID: '333',
        }],
      };
      expect(Nominations(initialState, action)).toEqual(deleteExpectedState);
    });
  });
});
