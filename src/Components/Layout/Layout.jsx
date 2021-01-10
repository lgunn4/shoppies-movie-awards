import React from 'react';
import { Container } from 'react-bootstrap';
import './Layout.css';
import PropTypes from 'prop-types';
import PageNavigation from '../../Containers/PageNavigation/PageNavigation';
import NominationSideBar from '../../Containers/NominationSideBar/NominationSideBar';

function Layout({ children }) {
  return (
    <div className="layout">
      <NominationSideBar>
        <Container fluid>
          <PageNavigation />
          <div className="pageBody">
            {children}
          </div>
        </Container>
      </NominationSideBar>
    </div>
  );
}
export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
