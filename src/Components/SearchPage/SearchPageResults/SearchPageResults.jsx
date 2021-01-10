import React from 'react';
import SearchPagePagination from '../../../Containers/SearchPagePagination/SearchPagePagination';
import SearchResult from '../../../Containers/SearchResult/SearchResult';
import { SEARCH_RESULTS_PROP_TYPES } from '../../../Assets/Constants';

function SearchPageResults({ searchResults }) {
  const resultsTitle = searchResults.searchCriteria === null ? null
    : (
      <div>
        <h3>
          `Displaying Results for: $
          {searchResults.searchCriteria}
          `
        </h3>
        <p>
          {searchResults.totalResults}
          {' '}
          results returned
        </p>
      </div>
    );

  const movieResultRows = searchResults.error !== null
    ? (<p>No results match this search criteria!</p>)
    : searchResults.results
      .map((movieResult) => (<SearchResult key={movieResult.imdbID} movieResult={movieResult} />));

  return (
    <div className="search-page-results">
      {resultsTitle}
      <br />
      {movieResultRows}
      <SearchPagePagination />
    </div>
  );
}

export default SearchPageResults;

SearchPageResults.propTypes = {
  searchResults: SEARCH_RESULTS_PROP_TYPES.isRequired,
};
