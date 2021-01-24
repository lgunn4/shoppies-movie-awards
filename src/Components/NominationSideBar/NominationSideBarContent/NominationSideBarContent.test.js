import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NominationSideBarContent from './NominationSideBarContent';

describe('NominationSideBarContent', () => {
  test('renders NominationSideBarContent component with 0 nominations', async () => {
    const setSideBarClosed = jest.fn();
    const deleteNomination = jest.fn();
    render(
      <NominationSideBarContent
        setSideBarClosed={setSideBarClosed}
        deleteNomination={deleteNomination}
        nominations={[]}
      />,
    );

    await userEvent.click(screen.getByText('X'));
    expect(setSideBarClosed).toBeCalledTimes(1);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Nominations')).toBeInTheDocument();
    expect(screen.getByText('There are currently 0 nominations')).toBeInTheDocument();
  });

  test('renders NominationSideBarContent component with nominations', async () => {
    const setSideBarClosed = jest.fn();
    const deleteNomination = jest.fn();
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
      <NominationSideBarContent
        setSideBarClosed={setSideBarClosed}
        deleteNomination={deleteNomination}
        nominations={nominations}
      />,
    );

    nominations.forEach((nomination) => {
      const posterAltText = `${nomination.imdbID}-poster`;

      expect(screen.getByText(nomination.Title)).toBeInTheDocument();
      expect(screen.getByText(nomination.Year)).toBeInTheDocument();
      expect(screen.getByAltText(posterAltText)).toBeInTheDocument();
    });

    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.getByText('Nominations')).toBeInTheDocument();

    await userEvent.click(screen.getByText('X'));
    expect(setSideBarClosed).toBeCalledTimes(1);

    const removeButtons = screen.getAllByText('Remove');
    await userEvent.click(removeButtons[0]);
    await userEvent.click(removeButtons[1]);
    expect(deleteNomination).toBeCalledTimes(2);
  });
});
