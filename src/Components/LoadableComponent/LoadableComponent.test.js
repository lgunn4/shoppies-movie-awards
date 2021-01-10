import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadableComponent from './LoadableComponent';

describe('LoadableComponent', () => {
  test('renders LoadableComponent component when loading', () => {
    render(
      <LoadableComponent
        isLoading
      >
        <h1>I AM A CHILD</h1>
      </LoadableComponent>,
    );

    expect(screen.findByText('I AM A CHILD')).toBeInTheDocument.not;
  });

  test('renders LoadableComponent component when loaded', () => {
    render(
      <LoadableComponent
        isLoading={false}
      >
        <h1>I AM A CHILD</h1>
      </LoadableComponent>,
    );

    expect(screen.findByText('I AM A CHILD')).toBeInTheDocument;
  });
});
