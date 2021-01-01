import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import AnimatedButton from "../../LoadingButton/AnimatedButton";

function SearchResult({movieResult, addNomination, nominations}) {
    const isNominated = nominations.some(nomination => nomination.imdbID === movieResult.imdbID);
    const nominateButton = (
        <AnimatedButton
            onClickActionParameter={movieResult}
            onClickAction={addNomination}
            isDisabled={isNominated}
            variant="success"
            buttonText="Nominate"
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
            <hr/>

        </div>
    )

}

export default SearchResult;