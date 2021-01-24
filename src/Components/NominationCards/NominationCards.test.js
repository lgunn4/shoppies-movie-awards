import React from 'react';
import { render, screen } from '@testing-library/react';
import NominationCards from './NominationCards';

describe('NominationCards', () => {
  test('renders NominationCards component when there no nominations', () => {
    render(<NominationCards
      nominations={[]}
    />);

    expect(screen.getByText('No movies have been nominated yet...')).toBeInTheDocument();
  });

  test('renders NominationCards component when there are nominations', () => {
    const nominations = [
      {
        Title: 'movie-title-1',
        Year: '2021',
        imdbID: '111',
        Type: 'Movie',
        Poster: null,
      },
    ];
    render(<NominationCards
      nominations={nominations}
    />);

    expect(screen.queryByText('No movies have been nominated yet...')).not.toBeInTheDocument();

    expect(screen.getByText('movie-title-1')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
  });
});
