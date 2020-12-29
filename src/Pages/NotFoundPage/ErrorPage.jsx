import React from 'react';
import {faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./ErrorPage.css";

function ErrorPage(){
    return (
        <div className="error-page">
            <FontAwesomeIcon icon={faSkullCrossbones} />
            <h4>404</h4>
            <h5>Page Does Not Exist</h5>
        </div>
    )
}

export default ErrorPage;