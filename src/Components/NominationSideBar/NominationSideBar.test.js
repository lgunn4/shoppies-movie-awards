import { render, screen } from '@testing-library/react';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import NominationSideBar from './NominationSideBar';

const mockStore = configureMockStore();

describe('NominationSideBar', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      Nominations: {
        isLoading: false,
        error: null,
        nominations: [],
        loaded: true,
      },
    });
  });
  test('renders NominationSideBar component with 0 nominations', () => {
    const setSideBarClosed = jest.fn();
    render(
      <Provider store={store}>
        <NominationSideBar
          sideBarOpen
          setSideBarClosed={setSideBarClosed}
        >
          <h1>I AM A CHILD</h1>
        </NominationSideBar>
      </Provider>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Nominations')).toBeInTheDocument();
    expect(screen.getByText('There are currently 0 nominations')).toBeInTheDocument();
    expect(screen.getByText('I AM A CHILD')).toBeInTheDocument();
  });
});
