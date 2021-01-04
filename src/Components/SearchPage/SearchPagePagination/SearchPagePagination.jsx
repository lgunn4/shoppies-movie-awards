import React from 'react';
import "./SearchPagePagination.css";
import Pagination from "react-js-pagination";


function SearchPagePagination({searchResults, fetchSearchResults}) {

    const handlePageClick = (number) => {
        fetchSearchResults(searchResults.searchCriteria, number);
    };

    if (searchResults.totalResults > 10) {
        return(
            <div className="search-results-pagination">
                <Pagination
                    activePage={searchResults.pageNumber}
                    itemsCountPerPage={10}
                    totalItemsCount={Number(searchResults.totalResults)}
                    pageRangeDisplayed={5}
                    onChange={handlePageClick}
                    itemClass="page-item"
                    linkClass="page-link"
                    prevPageText="Prev"
                    nextPageText="Next"
                />
            </div>
        );
    } else {
        return null;
    }
}

export default SearchPagePagination;