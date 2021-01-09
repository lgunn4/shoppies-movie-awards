import React, {useState} from 'react';
import {Button, Col, Form} from "react-bootstrap";

import "./SearchForm.css";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {PropTypes} from "prop-types";

function SearchForm({fetchSearchResults, customSubmitFunction}) {
    const [searchText, changeSearchText] = useState("");
    const onFormSubmit = (e) => {
        e.preventDefault();
        fetchSearchResults(searchText, 1);

        if (customSubmitFunction) {
            customSubmitFunction();
        }
    };

    return (
        <div className="search-form">
                <Form onSubmit={onFormSubmit} >
                    <Form.Row>
                        <Col md="10" sm="10" xs="9">
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                                Search
                            </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Type in a Movie Title"
                                onChange={(e) => changeSearchText(e.target.value)}
                            />
                        </Col>
                        <Col md="2" sm="2" xs="3">
                            <Button type="submit" className="mb-2">
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>

        </div>
    );
}

export default SearchForm;

SearchForm.propTypes = {
    fetchSearchResults: PropTypes.func.isRequired,
    customSubmitFunction: PropTypes.func,
};