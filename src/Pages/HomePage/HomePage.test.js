import React from 'react';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import HomePage from './HomePage';

const mockStore = configureMockStore();

describe('HomePage', () => {
  let store;

  test('renders HomePage component with 0 nominations', async () => {
    store = mockStore({
      Nominations: {
        nominations: [],
      },
    });
    const clearSearchResultsFunction = jest.fn();

    render(
      <Provider store={store}>
        <HomePage clearSearchResults={clearSearchResultsFunction} />
      </Provider>,
    );

    expect(screen.getByText('Welcome to the Shoppies Movie Awards Official Site!')).toBeInTheDocument();
    expect(screen.getByText('Welcome to the Shoppies Movie Awards Official Site!')).toBeInTheDocument();
    expect(screen.getByText('Start Searching')).toBeInTheDocument();
    expect(screen.getByText('Current Nominations')).toBeInTheDocument();
    expect(screen.getByText('No movies have been nominated yet...')).toBeInTheDocument();

    screen.debug();
  });

  test('renders HomePage component with 5 nominations', async () => {
    const numNominations = 5;
    const nominations = [];
    for (let i = 0; i < numNominations; i += 1) {
      nominations.push({
        Title: 'The Best Movie Ever',
        Year: '2021',
        imdbID: `${i + 1}`,
        Type: 'movie',
        Poster: 'poster1_url',
      });
    }
    store = mockStore({
      Nominations: {
        nominations,
      },
    });

    const clearSearchResultsFunction = jest.fn();

    render(
      <Provider store={store}>
        <HomePage clearSearchResults={clearSearchResultsFunction} />
      </Provider>,
    );

    expect(screen.getByText('Welcome to the Shoppies Movie Awards Official Site!')).toBeInTheDocument();
    expect(screen.getByText('Welcome to the Shoppies Movie Awards Official Site!')).toBeInTheDocument();
    expect(screen.getByText('Start Searching')).toBeInTheDocument();
    expect(screen.getByText('Current Nominations')).toBeInTheDocument();
    expect(screen.queryByText('No movies have been nominated yet...')).not.toBeInTheDocument();

    expect(screen.queryAllByText('The Best Movie Ever').length).toEqual(numNominations);
    expect(screen.queryAllByText('2021').length).toEqual(numNominations);
    expect(screen.getAllByRole('img').length).toEqual(numNominations);

    screen.debug();
  });
});
