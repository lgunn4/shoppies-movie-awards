import React from 'react';
import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App', () => {
  test('App renders properly', () => {
    const store = mockStore({
      Nominations: {
        isLoading: false,
        error: null,
        nominations: [],
        loaded: true,
      },
      uiReducer: {
        sideBarOpen: false,
      },
    });
    render(<Provider store={store}><App /></Provider>);

    expect(screen.getByText('Welcome to the Shoppies Movie Awards Official Site!')).toBeInTheDocument();
    expect(screen.getByText('Start Searching')).toBeInTheDocument();
    expect(screen.getByText('Current Nominations')).toBeInTheDocument();
    expect(screen.getByText('No movies have been nominated yet...')).toBeInTheDocument();
  });
});
