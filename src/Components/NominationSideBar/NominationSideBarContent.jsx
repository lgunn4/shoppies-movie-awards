import React from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import "./NominationSideBarContent.css";
import {UI_REMOVE} from "../../Redux/ActionTypes";
import LoadableButton from "../LoadingButton/LoadableButton";


function NominationSideBarContent({setSideBarClosed, deleteNomination, nominations, uiLoadingActions}) {
    const nominationList = nominations.map((nomination) => {
        const isLoading = uiLoadingActions.some(uiLoadingAction => uiLoadingAction.id === nomination.StrapiID && uiLoadingAction.type === UI_REMOVE);
        const button =
            (<LoadableButton
                onClickActionParameter={nomination.imdbID}
                onClickAction={deleteNomination}
                isDisabled={false}
                isLoading={isLoading}
                variant="outline-danger"
                buttonText="Remove"
            />);

        const posterImage = nomination.Poster === "N/A" ?
            (<Image src="poster-not-available.jpg" thumbnail />) :
            (<Image src={nomination.Poster} thumbnail/>);

        return (
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

            {nominations.length !== 0 ? nominationList : <h6>There are currently 0 nominations</h6>}
        </div>
    );

}
export default NominationSideBarContent;