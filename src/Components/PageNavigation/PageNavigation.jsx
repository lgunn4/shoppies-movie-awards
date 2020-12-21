import React from 'react';
import {Col, Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import "./PageNavigation.css";
import {Badge} from "antd";

function PageNavigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Row className="pageHeaderRow">
                <Col md={{span: 10, offset: 1}} sm={8} xs={10}>
                    <h2>The Shoppies</h2>
                </Col>
                <Col md={1} sm={4} xs={2}>
                    <Badge count={5} offset={[3, -3]}>
                        <a><FontAwesomeIcon icon={faTrophy} /></a>
                    </Badge>
                </Col>
            </Row>
        </Navbar>
    );

};

export default PageNavigation;