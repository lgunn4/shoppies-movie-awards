import React from "react";
import {Card, CardColumns} from "react-bootstrap";
import "./NominationCards.css";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function NominationCards({nominations}) {
    const nominationCards = nominations.map(nomination => {
        const posterImageSource = nomination.Poster === "N/A" ?
            "poster-not-available.jpg" :
            nomination.Poster;

        return (
            <CSSTransition
            key={nomination.imdbID}
            timeout={500}
            classNames="item">
                <Card>
                    <Card.Img variant="top" src={posterImageSource} />
                    <Card.Body>
                        <Card.Text><strong>{nomination.Title}</strong></Card.Text>
                        <Card.Text>{nomination.Year}</Card.Text>
                    </Card.Body>
                </Card>
            </CSSTransition>)
        });

    return(
        <div className="nomination-cards">
            {nominationCards.length > 0 ?
                (<TransitionGroup><CardColumns>{nominationCards}</CardColumns></TransitionGroup>) :
                (<p>No movies have been nominated yet... </p>) }
        </div>
    )
}
export default NominationCards;