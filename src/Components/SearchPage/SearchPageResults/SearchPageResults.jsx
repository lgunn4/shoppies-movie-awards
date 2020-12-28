import React from 'react';
import {Button, Col, Image, Row, Spinner} from 'react-bootstrap';

import "./SearchPageResults.css";
import SearchPagePagination from "../../../Containers/SearchPagePagination/SearchPagePagination";
import SearchResultButton from "../../SearchResultButton/SearchResultButton";


function SearchPageResults({searchResults, nominations, addNomination, uiLoadingActions}) {


    const movieResultRows = searchResults.error !== null ?
        (<p>No results match this search criteria!</p>) :
        searchResults.results.map(movieResult => {
            const isLoading = uiLoadingActions.loading.some(loadingAction => loadingAction.id === movieResult.imdbID);
            const isNominated = nominations.some(nomination => nomination.imdbID === movieResult.imdbID);
            const nominateButton = (
                <SearchResultButton
                    movieResult={movieResult}
                    addNomination={addNomination}
                    isLoading={isLoading}
                    isNominated={isNominated}
                />);

        const posterImage = movieResult.Poster === "N/A" ?
            (<Image src="poster-not-available.jpg" thumbnail />) :
            (<Image src={movieResult.Poster} thumbnail/>);
       return(
           <div key={movieResult.imdbID}>
               <Row>
                   <Col md={2}>
                       {posterImage}
                   </Col>
                   <Col md={10}>
                       <h5>{movieResult.Title}</h5>
                       <p>{movieResult.Year}</p>
                       {nominateButton}
                   </Col>
               </Row>
               <br/>
               <hr/>
               <br/>
           </div>
       )

    });

    const resultsTitle = searchResults.searchCriteria === "" ? null :
        (<div>
            <h3>Displaying Results for: "{searchResults.searchCriteria}"</h3>
            <p>{searchResults.totalResults} results returned</p>
        </div>);

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
