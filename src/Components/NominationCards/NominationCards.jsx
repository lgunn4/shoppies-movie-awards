import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './NominationCards.css';
import { HOME_PAGE_CARD_ROW_SIZE, NOMINATION_TEXT_LENGTH, NOMINATIONS_PROP_TYPES } from '../../Assets/Constants';

function NominationCards({ nominations }) {
  const nominationCards = nominations.map((nomination) => {
    const posterImageSource = nomination.Poster === 'N/A'
      ? 'poster-not-available.jpg'
      : nomination.Poster;

    const nominationText = nomination.Title.length > NOMINATION_TEXT_LENGTH
      ? `${nomination.Title.substring(0, NOMINATION_TEXT_LENGTH)}...`
      : nomination.Title;

    return (
      <Card key={nomination.imdbID}>
        <Card.Img variant="top" src={posterImageSource} />
        <Card.Body>
          <Card.Text><strong>{nominationText}</strong></Card.Text>
          <Card.Text>{nomination.Year}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  const rows = Math.ceil(nominationCards.length / HOME_PAGE_CARD_ROW_SIZE);

  const nominationRows = [];

  for (let i = 0; i < rows; i += 1) {
    nominationRows.push(
      <CardDeck key={`column-${i}`}>
        {nominationCards[i * HOME_PAGE_CARD_ROW_SIZE]}
        {nominationCards[i * HOME_PAGE_CARD_ROW_SIZE + 1] ? nominationCards[i * HOME_PAGE_CARD_ROW_SIZE + 1] : <Card className="empty-card" />}
        {nominationCards[i * HOME_PAGE_CARD_ROW_SIZE + 2] ? nominationCards[i * HOME_PAGE_CARD_ROW_SIZE + 2] : <Card className="empty-card" />}
      </CardDeck>,
    );
  }

  return (
    <div className="nomination-cards">
      {nominationCards.length > 0
        ? nominationRows
        : (<p>No movies have been nominated yet... </p>) }
    </div>
  );
}
export default NominationCards;

NominationCards.propTypes = {
  nominations: NOMINATIONS_PROP_TYPES.isRequired,
};
