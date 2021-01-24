import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PageNavigation from './PageNavigation';

describe('PageNavigation', () => {
  test('renders PageNavigation component', async () => {
    const setSideBarOpen = jest.fn();
    const nominations = [
      {
        Title: 'The Best Movie Ever',
        Year: '2021',
        imdbID: '223344',
        Type: 'movie',
        Poster: 'poster1_url',
      },
      {
        Title: 'The Second Best Movie Ever',
        Year: '2022',
        imdbID: '223345',
        Type: 'movie',
        Poster: 'poster2_url',
      },
    ];

    render(
      <BrowserRouter>
        <PageNavigation
          setSideBarOpen={setSideBarOpen}
          nominations={nominations}
        />
      </BrowserRouter>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'The Shoppies' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Search' })).toBeInTheDocument();
    expect(screen.getByTitle('trophy-icon')).toBeInTheDocument();
    expect(screen.getByTitle('2')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('trophy-icon'));
    expect(setSideBarOpen).toBeCalledTimes(1);
  });
});
