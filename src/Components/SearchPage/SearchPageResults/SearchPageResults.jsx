import React from 'react';
import "./SearchPageResults.css";
import SearchPagePagination from "../../../Containers/SearchPagePagination/SearchPagePagination";
import SearchResult from "../../../Containers/SearchResult/SearchResult";


function SearchPageResults({searchResults}) {
    const resultsTitle = searchResults.searchCriteria === "" ? null :
        (<div>
            <h3>Displaying Results for: "{searchResults.searchCriteria}"</h3>
            <p>{searchResults.totalResults} results returned</p>
        </div>);

    const movieResultRows = searchResults.error !== null ?
        (<p>No results match this search criteria!</p>) :
        searchResults.results.map(movieResult => {
            return (<SearchResult movieResult={movieResult}/>);
    });

    return(
        <div className="search-page-results">
            {resultsTitle}
            <br/>
            {movieResultRows}
            <SearchPagePagination/>
        </div>
    )
}

export default SearchPageResults;
