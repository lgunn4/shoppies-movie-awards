import React from 'react';
import SearchPageForm from '../../Containers/SearchPageForm/SearchPageForm';
import SearchPageResults from '../../Containers/SearchPageResults/SearchPageResults';
import SearchPageResultsLoadableComponent from '../../Containers/SearchPageResultsLoadableComponent/SearchPageResultsLoadableComponent';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className="search-page">
      <h3>Search For a Movie</h3>
      <SearchPageForm />
      <br />
      <SearchPageResultsLoadableComponent>
        <SearchPageResults />
      </SearchPageResultsLoadableComponent>
    </div>
  );
}

export default SearchPage;
