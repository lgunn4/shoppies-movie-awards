import React from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import "./NominationSideBarContent.css";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import AnimatedButton from "../LoadingButton/AnimatedButton";


function NominationSideBarContent({setSideBarClosed, deleteNomination, nominations}) {
    const nominationList = nominations.map((nomination) => {
        const button =
            (<AnimatedButton
                onClickActionParameter={nomination.imdbID}
                onClickAction={deleteNomination}
                isDisabled={false}
                variant="outline-danger"
                buttonText="Remove"
            />);

        const posterImage = nomination.Poster === "N/A" ?
            (<Image src="poster-not-available.jpg" thumbnail />) :
            (<Image src={nomination.Poster} thumbnail/>);

        return (
            <CSSTransition
                key={nomination.imdbID}
                timeout={500}
                classNames="item"
            >
            <div key={`nomination-${nomination.imdbID}`}>
                <Row>
                    <Col md={4} xs={3}>
                        {posterImage}
                    </Col>
                    <Col md={8} xs={9}>
                        <h5>{nomination.Title}</h5>
                        <p>{nomination.Year}</p>
                        {button}
                    </Col>

                </Row>
                <hr/>
            </div>
            </CSSTransition>
        )
    });
    return(
        <div className="nomination-side-bar-content">
            <Row>
                <Col xs={{span: 1, offset: 10}}>
                    <Button variant="light" onClick={() => setSideBarClosed()}>X</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Nominations</h3>
                </Col>
            </Row>
            <br/>

            {nominations.length !== 0 ? (<TransitionGroup>{nominationList}</TransitionGroup>) : <h6>There are currently 0 nominations</h6>}

        </div>
    );

}
export default NominationSideBarContent;