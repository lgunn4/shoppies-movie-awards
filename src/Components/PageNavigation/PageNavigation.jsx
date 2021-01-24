import React from 'react';
import {
  Col, Navbar, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import './PageNavigation.css';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { NOMINATIONS_PROP_TYPES } from '../../Assets/Constants';
import NotificationBar from '../NotificationBar/NotificationBar';

const PageNavigation = ({ setSideBarOpen, nominations }) => (
  <div className="PageHeader">
    <Navbar className="pageHeader" bg="dark" variant="dark" fixed="top">
      <Row className="pageHeaderRow">
        <Col md={10} sm={7} xs={8}>
          <div className="page-navigation-title">
            <Link to="/">
              <h2>The Shoppies</h2>
            </Link>
          </div>
        </Col>
        <Col className="page-navigation-search" md={1} sm={2} xs={2}>
          <Link to="/search">
            <h6>Search</h6>
          </Link>
        </Col>

        <Col className="page-navigation-trophy" md={1} sm={2} xs={2}>

          <Badge count={nominations.length} onClick={() => setSideBarOpen()} size="small">
            <FontAwesomeIcon icon={faTrophy} />
          </Badge>
        </Col>
      </Row>
    </Navbar>

    <NotificationBar numNominations={nominations.length} />

  </div>
);

export default PageNavigation;

PageNavigation.propTypes = {
  setSideBarOpen: PropTypes.func.isRequired,
  nominations: NOMINATIONS_PROP_TYPES.isRequired,
};
