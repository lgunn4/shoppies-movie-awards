import React from 'react';
import {Spinner} from "react-bootstrap";
import "./LoadableComponent.css";
import {PropTypes} from "prop-types";

function LoadableComponent({isLoading, children}) {
    return isLoading ?
        (<div className="spinner"><Spinner variant="dark" animation="border"/></div>) :
        (<div>{children}</div>);
}

export default LoadableComponent;

LoadableComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
};