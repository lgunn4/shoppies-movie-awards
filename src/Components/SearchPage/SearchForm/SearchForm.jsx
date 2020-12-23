import React, {useState} from 'react';
import {Button, Col, Form, Jumbotron} from "react-bootstrap";

import "./SearchForm.css";

function SearchForm({fetchSearchResults}) {
    const [searchText, changeSearchText] = useState("");

    return (
        <div className="search-form">
            <Jumbotron>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    fetchSearchResults(searchText, 1);
                }}>
                    <Form.Row>
                        <Col xs="10">
                            <Form.Label htmlFor="inlineFormInput" srOnly>
                                Search
                            </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Search For A Movie"
                                onChange={(e) => changeSearchText(e.target.value)}
                            />
                        </Col>
                        <Col xs="2">
                            <Button type="submit" className="mb-2">
                                Search
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Jumbotron>

        </div>
    );
}

export default SearchForm;