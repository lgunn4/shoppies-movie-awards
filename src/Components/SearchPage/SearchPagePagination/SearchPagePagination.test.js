import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPagePagination from './SearchPagePagination';

describe('SearchPagePagination', () => {
  test('renders SearchPagePagination component', () => {
    const searchResults = {
      error: null,
      isLoading: false,
      pageNumber: 1,
      results: [],
      searchCriteria: '',
      totalResults: '100',
    };
    const fetchSearchResults = jest.fn();
    render(<SearchPagePagination
      searchResults={searchResults}
      fetchSearchResults={fetchSearchResults}
    />);

    expect(screen.getByText('«')).toBeInTheDocument();
    expect(screen.getByText('»')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('Prev')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });
});
