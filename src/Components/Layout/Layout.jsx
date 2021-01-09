import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import "./Layout.css";
import PageNavigation from "../../Containers/PageNavigation/PageNavigation";
import NominationSideBar from "../../Containers/NominationSideBar/NominationSideBar";
import LoadableComponent from "../../Containers/SearchPageResultsLoadableComponent/SearchPageResultsLoadableComponent";
import PropTypes from 'prop-types';

function Layout({fetchNominations, isLoading, children}) {
    useEffect(() => {
        fetchNominations();
    });

    return (
        <div className="layout">
            <LoadableComponent isLoading={isLoading}>
                <NominationSideBar>
                    <Container fluid>
                        <PageNavigation />
                        <div className="pageBody">
                            {children}
                        </div>
                    </Container>
                </NominationSideBar>
            </LoadableComponent>
        </div>
    )
}
export default Layout;

Layout.propTypes = {
    fetchNominations: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
};