import React from 'react';
import {Button, Col, Row, Spinner} from "react-bootstrap";
import "./NominationSideBarContent.css";
import {UI_REMOVE} from "../../Redux/ActionTypes";


function NominationSideBarContent({setSideBarClosed, deleteNomination, nominations, uiLoadingActions}) {
    const nominationList = nominations.map((nomination) => {
        const button = !uiLoadingActions.some(uiLoadingAction => uiLoadingAction.id === nomination.StrapiID && uiLoadingAction.type === UI_REMOVE) ?
            (<Button type="text" variant="outline-danger" onClick={() => deleteNomination(nomination.StrapiID)}>X</Button>):
            (<Button variant="outline-danger" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
            </Button>);

        return (
            <Row key={`nomination-${nomination.imdbID}`}>
                <Col xs={1}>
                    {button}
                </Col>
                <Col xs={11}>
                    <p>{nomination.Title}</p>
                </Col>
            </Row>
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

            {nominationList}
        </div>
    );

}
export default NominationSideBarContent;