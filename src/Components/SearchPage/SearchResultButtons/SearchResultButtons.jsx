import React from 'react';
import { Button } from 'react-bootstrap';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './SearchResultButtons.css';
import { PropTypes } from 'prop-types';

function SearchResultButtons({
  isNominated, addNomination, movieResult, deleteNomination,
}) {
  const button = isNominated
    ? (
      <div>
        <Button variant="outline" disabled>Nominated</Button>
        <Button variant="outline-danger" onClick={() => deleteNomination(movieResult.imdbID)}>Remove</Button>
      </div>
    )
    : (<Button variant="success" onClick={() => addNomination(movieResult)}>Nominate</Button>);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={isNominated} timeout={500} classNames="fade">
        {button}
      </CSSTransition>
    </SwitchTransition>
  );
}
export default SearchResultButtons;

SearchResultButtons.propTypes = {
  isNominated: PropTypes.bool.isRequired,
  addNomination: PropTypes.func.isRequired,
  movieResult: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    Type: PropTypes.string,
    Poster: PropTypes.string,
  }).isRequired,
  deleteNomination: PropTypes.func.isRequired,
};
