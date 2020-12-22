import React from 'react';
import {nominationList} from "../../Constants/Constants";
import {Col, Row} from "react-bootstrap";
import "./NominationSideBarContent.css";
import {Button} from "antd";


function NominationSideBarContent() {
    const nominations = nominationList.map((nomination, index) => {
        return (
            <Row className={`nomination-${index}`}>
                <Col md={1}>
                    <Button type="text" danger>X</Button>
                </Col>
                <Col md={11}>
                    <p>{nomination.title}</p>
                </Col>
            </Row>
        )
    });

    return(
        <div className="nomination-side-bar-content">
            <br/>
            <h3>Nominations</h3>

            {nominations}
        </div>
    );

}
export default NominationSideBarContent;