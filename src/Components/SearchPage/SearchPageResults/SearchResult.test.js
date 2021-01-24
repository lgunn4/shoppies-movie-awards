import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SearchResult from './SearchResult';

describe('SearchResult', () => {
  let nominations;
  let movieResult;
  let addNomination;
  let deleteNomination;
  beforeEach(() => {
    nominations = [
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
    [movieResult] = nominations;
    addNomination = jest.fn();
    deleteNomination = jest.fn();
  });
  test('renders SearchResult component when is not nominated', async () => {
    render(
      <SearchResult
        addNomination={addNomination}
        deleteNomination={deleteNomination}
        nominations={[]}
        movieResult={movieResult}
      />,
    );

    expect(screen.queryByRole('button', { name: 'Nominate' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Nominated' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Remove' })).not.toBeInTheDocument();
    expect(screen.getByText(movieResult.Title)).toBeInTheDocument();
    expect(screen.getByText(movieResult.Year)).toBeInTheDocument();

    await userEvent.click(screen.queryByRole('button', { name: 'Nominate' }));

    expect(addNomination).toBeCalledTimes(1);
  });

  test('renders SearchResult component when is nominated', async () => {
    render(
      <SearchResult
        addNomination={addNomination}
        deleteNomination={deleteNomination}
        nominations={nominations}
        movieResult={movieResult}
      />,
    );

    expect(screen.queryByRole('button', { name: 'Nominate' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Nominated' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();
    expect(screen.getByText(movieResult.Title)).toBeInTheDocument();
    expect(screen.getByText(movieResult.Year)).toBeInTheDocument();

    await userEvent.click(screen.queryByRole('button', { name: 'Nominated' }));
    await userEvent.click(screen.queryByRole('button', { name: 'Remove' }));

    expect(addNomination).not.toBeCalledTimes(1);
    expect(deleteNomination).toBeCalledTimes(1);
  });
});
