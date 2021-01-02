import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import "./HomePage.css";
import {Link} from "react-router-dom";
import NominationCards from "../../Containers/NominationCards/NominationCards";

function HomePage(){
    return(
        <div className="home-page-container">
            <div className="home-page-title-image"></div>
            <Row className="home-page-title-row">
                <Col md={{span: "8", offset: "2"}} className="home-page-title-col">
                    <h3>Welcome to the Shoppies Movie Awards Official Site!</h3>
                </Col>
            </Row>

            <br/>
            <br/>

                <Row className="home-page-nomination-search-row">
                    <Col className="home-page-nominations" xs={{span: "10", offset: "1"}} md={{span: "5", offset: "1"}}>
                        <h3>Current Nominations</h3>
                        <br/>
                        <NominationCards />
                    </Col>
                    <Col className="home-page-search-row" xs={12} md={5}>
                        <div className="home-page-search-box">
                            <p>To Nominate Movies Go to the Search page </p>
                            <h3>Start Searching</h3>
                            <Link to="/search">
                                <Button variant="success">Go To Search Page!</Button>
                            </Link>
                        </div>
                    </Col>

                </Row>


        </div>);
}

export default HomePage;