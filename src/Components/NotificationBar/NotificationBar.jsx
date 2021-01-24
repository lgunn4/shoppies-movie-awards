import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Alert, Navbar } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const NotificationBar = ({ numNominations }) => {
  const notificationBar = numNominations >= 5 ? (
    <CSSTransition timeout={500} classNames="alert-transition">
      <Navbar className="alert-navbar" fixed="top">
        <Alert variant="warning">
          You have nominated
          {' '}
          {numNominations}
          {' '}
          movies!
        </Alert>
      </Navbar>
    </CSSTransition>
  ) : null;

  return (
    <TransitionGroup>
      {notificationBar}
    </TransitionGroup>
  );
};

export default NotificationBar;

NotificationBar.propTypes = {
  numNominations: PropTypes.number.isRequired,
};
