import React from 'react';
import {Spinner} from "react-bootstrap";
import "./LoadableComponent.css";

function LoadableComponent({isLoading, children}) {
    return isLoading ?
        (<div className="spinner"><Spinner variant="dark" animation="border"/></div>) :
        (<div>{children}</div>);
}

export default LoadableComponent;