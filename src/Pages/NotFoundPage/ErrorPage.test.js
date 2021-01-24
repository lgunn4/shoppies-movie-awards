import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  test('renders ErrorPage component', async () => {
    render(
      <ErrorPage />,
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Does Not Exist')).toBeInTheDocument();
    expect(screen.getByTitle('skull-cross-bones')).toBeInTheDocument();
  });
});
