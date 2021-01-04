import React from "react";
import {Col, Row} from "react-bootstrap";
import "./HomePage.css";
import {useHistory} from "react-router-dom";
import NominationCards from "../../Containers/NominationCards/NominationCards";
import SearchPageForm from "../../Containers/SearchPageForm/SearchPageForm";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HomePage(){
    const history = useHistory();

    const customSubmitFunction = () => {
        history.push("/search");
    };

    return(
        <div className="home-page-container">
            <div className="home-page-title-image" />
            <Row className="home-page-title-row">
                <Col md={12} className="home-page-title-col-text">
                    <h3>Welcome to the Shoppies Movie Awards Official Site!</h3>
                </Col>
                <Col className="home-page-title-col-chevron" md={12}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </Col>
            </Row>

            <br/>
            <br/>

            <Row className="home-page-nomination-search-row">
                <Col className="home-page-search-row" xs={12} md={{span: 8, offset: 2}}>
                    <div className="home-page-search-box">
                        <p>Search for a Movie to Nominate it</p>
                        <h3>Start Searching</h3>
                        <SearchPageForm customSubmitFunction={customSubmitFunction}/>
                    </div>
                </Col>
                <Col className="home-page-nominations" xs={{span: 9, offset: 1}} sm={{span: 8, offset: 2}} md={{span: 8, offset: 2}}>
                    <h3>Current Nominations</h3>
                    <br/>
                    <NominationCards />
                </Col>
            </Row>
        </div>);
}

export default HomePage;