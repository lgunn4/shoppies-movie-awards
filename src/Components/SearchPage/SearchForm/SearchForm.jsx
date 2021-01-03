import React, {useState} from 'react';
import {Button, Col, Form} from "react-bootstrap";

import "./SearchForm.css";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SearchForm({fetchSearchResults}) {
    const [searchText, changeSearchText] = useState("");
    const onFormSubmit = (e) => {
        e.preventDefault();
        fetchSearchResults(searchText, 1);
    };

    return (
        <div className="search-form">
            <h3>Search For a Movie</h3>
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