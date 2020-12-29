import React from 'react';
import {Container} from "react-bootstrap";
import "./Layout.css";
import PageNavigation from "../../Containers/PageNavigation/PageNavigation";
import NominationSideBar from "../../Containers/NominationSideBar/NominationSideBar";

function Layout({children}) {
    return (
        <NominationSideBar>
            <Container fluid>
                <PageNavigation />
                <div className="pageBody">
                    {children}
                </div>
            </Container>
        </NominationSideBar>
    )
}
export default Layout;