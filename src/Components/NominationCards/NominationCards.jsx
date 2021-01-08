import React from "react";
import {Card, CardColumns} from "react-bootstrap";
import "./NominationCards.css";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {HOME_PAGE_CARD_ROW_SIZE, NOMINATION_TEXT_LENGTH} from "../../Assets/Constants";

function NominationCards({nominations}) {
    const nominationCards = nominations.map(nomination => {
        const posterImageSource = nomination.Poster === "N/A" ?
            "poster-not-available.jpg" :
            nomination.Poster;

        const nominationText = nomination.Title.length > NOMINATION_TEXT_LENGTH ?
            nomination.Title.substring(0, NOMINATION_TEXT_LENGTH) + "..." :
            nomination.Title;

        return (
            <CSSTransition
            key={nomination.imdbID}
            timeout={500}
            classNames="card">
                <Card>
                    <Card.Img variant="top" src={posterImageSource} />
                    <Card.Body>
                        <Card.Text><strong>{nominationText}</strong></Card.Text>
                        <Card.Text>{nomination.Year}</Card.Text>
                    </Card.Body>
                </Card>
            </CSSTransition>)
        });
    const rows = Math.ceil(nominationCards.length / HOME_PAGE_CARD_ROW_SIZE);

    let nominationRows = [];

    for (let i = 0; i < rows; i++ ) {
        nominationRows.push(
            <CardColumns key={`column-${i}`}>
                <TransitionGroup key={`column-${i}`}>
                    {nominationCards[i * HOME_PAGE_CARD_ROW_SIZE]}
                    {nominationCards[i * HOME_PAGE_CARD_ROW_SIZE + 1]}
                    {nominationCards[i * HOME_PAGE_CARD_ROW_SIZE + 2]}
                </TransitionGroup>
            </CardColumns>
        )
    }

    return(
        <div className="nomination-cards">
            {nominationCards.length > 0 ?
                nominationRows :
                (<p>No movies have been nominated yet... </p>) }
        </div>
    )
}
export default NominationCards;