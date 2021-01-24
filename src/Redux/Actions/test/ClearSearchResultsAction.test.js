import { CLEAR_SEARCH_RESULTS } from '../../ActionTypes';
import clearSearchResults from '../ClearSearchResultsAction';

describe('ClearSearchResultsAction', () => {
  test('ClearSearchResults', () => {
    const expectedResult = { type: CLEAR_SEARCH_RESULTS };

    expect(clearSearchResults()).toEqual(expectedResult);
  });
});
