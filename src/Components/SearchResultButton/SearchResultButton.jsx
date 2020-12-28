import React from 'react';
import {Button, Spinner} from "react-bootstrap";

function SearchResultButton({isLoading, isNominated, addNomination, movieResult}) {
    let nominateButton =
        isNominated ?
            (<Button disabled variant="disabled">Nominated</Button>) :
            (<Button variant="success" onClick={() => addNomination(movieResult)}>Nominate</Button>);


    if (isLoading) {
        nominateButton =
            (<Button variant="success" disabled>
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                </Button>
            );
    }

    return nominateButton;


}

export default SearchResultButton;