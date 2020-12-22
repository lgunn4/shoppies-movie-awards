import React from 'react';
import {Container} from "react-bootstrap";
import PageNavigation from "../PageNavigation/PageNavigation";
import "./Layout.css";

function Layout({children, setSideBarOpen}) {
    return (
        <Container fluid>
            <PageNavigation setSideBarOpen={setSideBarOpen}/>
            <div ClassName="pageBody">
                {children}
            </div>
        </Container>
    )
}
export default Layout;