import React from 'react';
import {Alert, Col, Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import "./PageNavigation.css";
import {Badge} from "antd";


function PageNavigation({setSideBarOpen, nominations}) {
    const notificationBar = nominations.length >= 5 ?
        ( <Navbar className="alert-navbar" fixed="top">
            <Alert variant="warning">
                You have nominated {nominations.length} movies!
            </Alert>
        </Navbar>) : null;

    return (
        <div className="PageHeader">
            <Navbar className="pageHeader" bg="dark" variant="dark" fixed="top">
                <Row className="pageHeaderRow">
                    <Col md={{span: 10, offset: 1}} sm={8} xs={10}>
                        <a href="/">
                            <h2>The Shoppies</h2>
                        </a>
                    </Col>

                    <Col md={1} sm={4} xs={2}>
                            <Badge count={nominations.length} offset={[3, -3]} onClick={() => setSideBarOpen()}>
                                <FontAwesomeIcon icon={faTrophy} />
                            </Badge>
                    </Col>
                </Row>
            </Navbar>

            {notificationBar}

        </div>
    );

}

export default PageNavigation;