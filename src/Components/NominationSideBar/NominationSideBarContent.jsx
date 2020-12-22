import React from 'react';
import {Col, Row} from "react-bootstrap";
import "./NominationSideBarContent.css";
import {Button} from "antd";


function NominationSideBarContent({setSideBarClosed, removeNomination, nominations}) {
    const nominationList = nominations.map((nomination) => {
        return (
            <Row key={`nomination-${nomination.imdbID}`}>
                <Col xs={1}>
                    <Button type="text" danger onClick={() => removeNomination(nomination.imdbID)}>X</Button>
                </Col>
                <Col xs={11}>
                    <p>{nomination.Title}</p>
                </Col>
            </Row>
        )
    });

    return(
        <div className="nomination-side-bar-content">
            <br/>
            <Row>
                <Col xs={{span: 1, offset: 10}}>
                    <Button type="text" onClick={() => setSideBarClosed()}>X</Button>
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