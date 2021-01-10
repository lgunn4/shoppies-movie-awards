import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import SearchResultButtons from '../SearchResultButtons/SearchResultButtons';
import { NOMINATIONS_PROP_TYPES } from '../../../Assets/Constants';

function SearchResult({
  movieResult, addNomination, deleteNomination, nominations,
}) {
  const isNominated = nominations.some((nomination) => nomination.imdbID === movieResult.imdbID);
  const resultButtons = (
    <SearchResultButtons
      isNominated={isNominated}
      movieResult={movieResult}
      addNomination={addNomination}
      deleteNomination={deleteNomination}
    />
  );

  const posterImage = movieResult.Poster === 'N/A'
    ? (<Image src="poster-not-available.jpg" thumbnail />)
    : (<Image src={movieResult.Poster} thumbnail />);

  return (
    <div key={movieResult.imdbID}>
      <Row>
        <Col md={2}>
          {posterImage}
        </Col>
        <Col md={10}>
          <h5>{movieResult.Title}</h5>
          <p>{movieResult.Year}</p>
          {resultButtons}
        </Col>
      </Row>
      <hr />

    </div>
  );
}

export default SearchResult;

SearchResult.propTypes = {
  movieResult: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
  }).isRequired,
  addNomination: PropTypes.func.isRequired,
  deleteNomination: PropTypes.func.isRequired,
  nominations: NOMINATIONS_PROP_TYPES.isRequired,
};
