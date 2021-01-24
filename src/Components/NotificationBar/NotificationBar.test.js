import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationBar from './NotificationBar';

describe('NotificationBar', () => {
  test('renders NotificationBar component when there are 4 nominations', () => {
    render(<NotificationBar
      numNominations={0}
    />);

    expect(screen.findByText('You have nominated 4 movies!')).toBeInTheDocument.not;
  });

  test('renders NotificationBar component when there are 5 nominations', () => {
    render(<NotificationBar
      numNominations={5}
    />);

    expect(screen.getByText('You have nominated 5 movies!')).toBeInTheDocument;
  });

  test('renders NotificationBar component when there are 6 nominations', () => {
    render(<NotificationBar
      numNominations={6}
    />);

    expect(screen.getByText('You have nominated 6 movies!')).toBeInTheDocument;
  });
});
