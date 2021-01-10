import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  const fetchSearchResults = jest.fn();
  const customSubmitFunction = jest.fn();

  test('renders SearchForm component', () => {
    render(<SearchForm
      fetchSearchResults={fetchSearchResults}
      customSubmitFunction={customSubmitFunction}
    />);

    expect(screen.getByPlaceholderText('Type in a Movie Title')).toBeInTheDocument;
  });

  test('search button press calls input functions', async () => {
    render(<SearchForm
      fetchSearchResults={fetchSearchResults}
      customSubmitFunction={customSubmitFunction}
    />);

    await userEvent.click(screen.getByRole('button'));

    expect(fetchSearchResults).toHaveBeenCalledTimes(1);
    expect(customSubmitFunction).toHaveBeenCalledTimes(1);
  });
});
