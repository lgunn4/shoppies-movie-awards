import React from "react";
import {Alert, Col, Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrophy} from "@fortawesome/free-solid-svg-icons";
import "./PageNavigation.css";
import {Badge} from "antd";
import {Link} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";


function PageNavigation({setSideBarOpen, nominations}) {

    const notificationBar = nominations.length >= 5 ? (
        <CSSTransition timeout={500} classNames="alert-transition">
            <Navbar className="alert-navbar" fixed="top">
                    <Alert variant="warning">
                        You have nominated {nominations.length} movies!
                    </Alert>
            </Navbar>
        </CSSTransition>) : null;

    return (
        <div className="PageHeader">
            <Navbar className="pageHeader" bg="dark" variant="dark" fixed="top">
                <Row className="pageHeaderRow">
                    <Col md={10} sm={7} xs={8}>
                        <div className="page-navigation-title">
                            <Link to="/">
                                <h2>The Shoppies</h2>
                            </Link>
                        </div>
                    </Col>
                    <Col className="page-navigation-search" md={1} sm={2} xs={2}>
                        <Link to="/search">
                            <h6>Search</h6>
                        </Link>
                    </Col>

                    <Col className="page-navigation-trophy" md={1} sm={2} xs={2}>

                        <Badge count={nominations.length} onClick={() => setSideBarOpen()} size="small">
                            <FontAwesomeIcon icon={faTrophy} />
                        </Badge>
                    </Col>
                </Row>
            </Navbar>

            <TransitionGroup>
                {notificationBar}
            </TransitionGroup>

        </div>
    );

}

export default PageNavigation;