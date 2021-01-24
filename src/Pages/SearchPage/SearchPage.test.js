import React from 'react';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SearchPage from './SearchPage';

const mockStore = configureMockStore();

describe('SearchPage', () => {
  let searchResults;
  let store;

  test('renders SearchPage component when loading', async () => {
    searchResults = {
      error: null,
      isLoading: true,
      pageNumber: 1,
      results: [],
      searchCriteria: 'criteria',
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
        <SearchPage />
      </Provider>,
    );

    expect(screen.getByText('Search For a Movie')).toBeInTheDocument();
    expect(screen.queryByText('Displaying Results for: "criteria"')).not.toBeInTheDocument();
  });

  test('renders SearchPage component when not loading', async () => {
    searchResults = {
      error: null,
      isLoading: false,
      pageNumber: 1,
      results: [],
      searchCriteria: 'criteria',
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
        <SearchPage />
      </Provider>,
    );

    expect(screen.getByText('Search For a Movie')).toBeInTheDocument();
    expect(screen.queryByText('Displaying Results for: "criteria"')).toBeInTheDocument();
  });
});
