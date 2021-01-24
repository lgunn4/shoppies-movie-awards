import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  let fetchNominationFunction;
  beforeEach(() => {
    fetchNominationFunction = jest.fn();
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
    expect(screen.queryByText('I AM A CHILD')).not.toBeInTheDocument();
  });
});
