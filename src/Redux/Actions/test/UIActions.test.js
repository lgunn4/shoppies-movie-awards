import { SET_SIDE_BAR_CLOSED, SET_SIDE_BAR_OPEN } from '../../ActionTypes';
import { setSideBarClosed, setSideBarOpen } from '../UIActions';

describe('UIActions', () => {
  test('setSideBarOpen', () => {
    const expectedResult = { type: SET_SIDE_BAR_OPEN };

    expect(setSideBarOpen()).toEqual(expectedResult);
  });
  test('setSideBarClosed', () => {
    const expectedResult = { type: SET_SIDE_BAR_CLOSED };

    expect(setSideBarClosed()).toEqual(expectedResult);
  });
});
