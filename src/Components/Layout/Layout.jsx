import React from 'react';
import {Container} from "react-bootstrap";
import "./Layout.css";
import PageNavigation from "../../Containers/PageNavigation/PageNavigation";

function Layout({children}) {
    return (
        <Container fluid>
            <PageNavigation />
            <div className="pageBody">
                {children}
            </div>
        </Container>
    )
}
export default Layout;