import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchResultButtons from './SearchResultButtons';

describe('SearchResultButtons', () => {
  const addNominationFunction = jest.fn();
  const deleteNominationFunction = jest.fn();
  const movieResult = {
    Title: 'movie-title',
    Year: 'year',
    imdbID: '111',
    Type: 'Movie',
    Poster: null,
  };

  test('renders SearchResultsButtons component when movieResult is nominated', async () => {
    render(<SearchResultButtons
      isNominated
      addNomination={addNominationFunction}
      deleteNomination={deleteNominationFunction}
      movieResult={movieResult}
    />);

    expect(screen.getByText('Nominated')).toBeInTheDocument;
    expect(screen.getByText('Remove')).toBeInTheDocument;

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(2);

    expect(buttons[0]).toBeDisabled;
    expect(buttons[1]).toBeDisabled.not;

    await userEvent.click(buttons[1]);

    expect(deleteNominationFunction).toBeCalledTimes(1);
  });

  test('renders SearchResultsButtons component when movieResult is not nominated', async () => {
    render(<SearchResultButtons
      isNominated={false}
      addNomination={addNominationFunction}
      deleteNomination={deleteNominationFunction}
      movieResult={movieResult}
    />);

    expect(screen.getByText('Nominate')).toBeInTheDocument;

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(1);

    expect(buttons[0]).toBeDisabled.not;

    await userEvent.click(buttons[0]);

    expect(addNominationFunction).toBeCalledTimes(1);
  });
});
