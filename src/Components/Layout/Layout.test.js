import React from 'react';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

const mockStore = configureMockStore();

// eslint-disable-next-line no-unused-expressions
describe('Layout', () => {
  let fetchNominationFunction;
  let store;
  beforeEach(() => {
    fetchNominationFunction = jest.fn();
    store = mockStore({
      uiReducer: {
        sideBarOpen: true,
      },
      Nominations: {
        isLoading: false,
        error: null,
        nominations: [],
        loaded: true,
      },
    });
  });

  test('renders Layout component', () => {
    render(
      <Layout
        isLoading
        fetchNominations={fetchNominationFunction}
      >
        <h1>I AM A CHILD</h1>
      </Layout>,
    );

    expect(fetchNominationFunction).toBeCalledTimes(1);
    expect(screen.findByText('I AM A CHILD')).toBeInTheDocument.not;
  });

  test('renders LoadableComponent component when loaded', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Layout
            isLoading={false}
            fetchNominations={fetchNominationFunction}
          >
            <h1>I AM A CHILD</h1>
          </Layout>
        </Provider>
      </BrowserRouter>,
    );

    expect(fetchNominationFunction).toBeCalledTimes(1);
    expect(screen.getByText('The Shoppies')).toBeInTheDocument;
    expect(screen.getByText('Search')).toBeInTheDocument;
    expect(screen.getByRole('button')).toBeInTheDocument;
    expect(screen.getByText('Nominations')).toBeInTheDocument;
    expect(screen.getByText('There are currently 0 nominations')).toBeInTheDocument;
    expect(screen.getByText('I AM A CHILD')).toBeInTheDocument;
  });
});
