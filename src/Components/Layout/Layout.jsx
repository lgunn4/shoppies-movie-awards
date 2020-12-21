import React from 'react';
import {Container} from "react-bootstrap";
import PageNavigation from "../PageNavigation/PageNavigation";
import "./Layout.css";

function Layout({children}) {
    return (
        <Container fluid>
            <PageNavigation/>
            <div clasName="pageBody">
                {children}
            </div>
        </Container>
    )
}
export default Layout;