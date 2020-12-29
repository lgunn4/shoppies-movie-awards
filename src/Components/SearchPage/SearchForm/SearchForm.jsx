import React, {useState} from 'react';
import {Button, Col, Form} from "react-bootstrap";

import "./SearchForm.css";

function SearchForm({fetchSearchResults}) {
    const [searchText, changeSearchText] = useState("");
    const onFormSubmit = (e) => {
        e.preventDefault();
        fetchSearchResults(searchText, 1);
    };

    return (
        <div className="search-form">

                <Form onSubmit={onFormSubmit} >
                    <Form.Row>
                        <Col md="11" xs="9">
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
                        <Col md="1" xs="3">
                            <Button type="submit" className="mb-2">
                                Search
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>

        </div>
    );
}

export default SearchForm;