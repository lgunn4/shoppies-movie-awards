import { render, screen } from '@testing-library/react';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SearchPageResults from './SearchPageResults';

const mockStore = configureMockStore();

describe('SearchPageResults', () => {
  let searchResults;
  let store;

  test('renders SearchPageResults component when successful search with 1 result', async () => {
    searchResults = {
      error: null,
      isLoading: false,
      pageNumber: 1,
      results: [
        {
          Title: 'The Best Movie Ever',
          Year: '2021',
          imdbID: '223344',
          Type: 'movie',
          Poster: 'poster1_url',
        },
      ],
      searchCriteria: 'successful search',
      totalResults: '1',
    };
    store = mockStore({
      SearchResults: searchResults,
      Nominations: {
        nominations: [],
      },
    });

    render(
      <Provider store={store}>
        <SearchPageResults
          searchResults={searchResults}
        />
      </Provider>,
    );
    const expectedTitleText = `Displaying Results for: "${searchResults.searchCriteria}"`;
    const expectedParagaphText = `${searchResults.totalResults} results returned`;
    expect(screen.getByText(expectedTitleText)).toBeInTheDocument();
    expect(screen.getByText(expectedParagaphText)).toBeInTheDocument();
    expect(screen.queryByText('No results match this search criteria!')).not.toBeInTheDocument();
    expect(screen.queryAllByRole('link').length).toEqual(0);
  });

  test('renders SearchPageResults component when unsuccessful search', async () => {
    searchResults = {
      error: {},
      isLoading: false,
      pageNumber: 1,
      results: [],
      searchCriteria: 'successful search',
      totalResults: '0',
    };
    store = mockStore({
      SearchResults: searchResults,
      Nominations: {
        nominations: [],
      },
    });

    render(
      <Provider store={store}>
        <SearchPageResults
          searchResults={searchResults}
        />
      </Provider>,
    );

    const expectedTitleText = `Displaying Results for: "${searchResults.searchCriteria}"`;
    const expectedParagaphText = `${searchResults.totalResults} results returned`;
    expect(screen.getByText(expectedTitleText)).toBeInTheDocument();
    expect(screen.getByText(expectedParagaphText)).toBeInTheDocument();
    expect(screen.getByText('No results match this search criteria!')).toBeInTheDocument();
    expect(screen.queryAllByRole('link').length).toEqual(0);
  });

  test('renders SearchPageResults component on page load', async () => {
    searchResults = {
      error: null,
      isLoading: false,
      pageNumber: 1,
      results: [],
      searchCriteria: null,
      totalResults: '',
    };

    store = mockStore({
      SearchResults: searchResults,
      Nominations: {
        nominations: [],
      },
    });

    render(
      <Provider store={store}>
        <SearchPageResults
          searchResults={searchResults}
        />
      </Provider>,
    );

    expect(screen.queryByText('Displaying Results for: ""')).not.toBeInTheDocument();
    expect(screen.queryAllByRole('link').length).toEqual(0);
  });

  test('renders SearchPageResults component on successful search with more than 10 results', async () => {
    const numResults = 12;
    searchResults = {
      error: null,
      isLoading: false,
      pageNumber: 1,
      results: [],
      searchCriteria: 'valid Search Criteria',
      totalResults: `${numResults}`,
    };

    for (let i = 0; i < 10; i += 1) {
      searchResults.results.push(
        {
          Title: 'The Best Movie Ever',
          Year: '2021',
          imdbID: `${1 + i}`,
          Type: 'movie',
          Poster: 'poster1_url',
        },
      );
    }
    store = mockStore({
      SearchResults: searchResults,
      Nominations: {
        nominations: [],
      },
    });

    render(
      <Provider store={store}>
        <SearchPageResults
          searchResults={searchResults}
        />
      </Provider>,
    );

    expect(screen.queryAllByText('The Best Movie Ever').length).toEqual(10);
    expect(screen.queryAllByText('2021').length).toEqual(10);

    expect(screen.queryAllByRole('img').length).toEqual(10);
    expect(screen.queryAllByRole('button').length).toEqual(10);

    expect(screen.getByRole('link', { name: 'Go to first page' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to previous page' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to page number 1' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to page number 2' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Go to page number 3' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to next page' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to last page' })).toBeInTheDocument();
  });
});
