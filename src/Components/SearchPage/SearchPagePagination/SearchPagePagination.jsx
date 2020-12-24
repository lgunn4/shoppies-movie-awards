import React from 'react';
import ReactPaginate from 'react-paginate';
import "./SearchPagePagination.css";


function SearchPagePagination({searchResults, fetchSearchResults}) {

    const handlePageClick = (data) => {
        fetchSearchResults(searchResults.searchCriteria, data.selected + 1);
    };

    if (searchResults.totalResults > 10) {
        return(
            <div className="search-results-pagination">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={searchResults.totalResults / 10}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        );
    } else {
        return null;
    }
}

export default SearchPagePagination;