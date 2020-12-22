import React from 'react';
import {nominationList} from "../../Constants/Constants";
import {Col, Row} from "react-bootstrap";
import "./NominationSideBarContent.css";
import {Button} from "antd";


function NominationSideBarContent({setSideBarClosed}) {
    const nominations = nominationList.map((nomination, index) => {
        return (
            <Row key={`nomination-${index}`}>
                <Col xs={1}>
                    <Button type="text" danger>X</Button>
                </Col>
                <Col xs={11}>
                    <p>{nomination.title}</p>
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

            {nominations}
        </div>
    );

}
export default NominationSideBarContent;