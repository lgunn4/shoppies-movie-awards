import React from 'react';
import {Button, Spinner} from "react-bootstrap";

function LoadableButton({isLoading, isDisabled, onClickAction, onClickActionParameter, variant, buttonText}) {
    let button =
        isDisabled ?
            (<Button disabled variant="disabled">{buttonText}</Button>) :
            (<Button variant={variant} onClick={() => onClickAction(onClickActionParameter)}>{buttonText}</Button>);


    if (isLoading) {
        button =
            (<Button variant={variant} disabled>
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

    return button;
}
export default LoadableButton;