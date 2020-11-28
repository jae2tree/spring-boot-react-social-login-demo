import React, {useState} from 'react';
import { connect } from 'react-redux';
import { showLoginModal, hideLoginModal} from '../redux/actions';
import { Modal, Button } from 'react-bootstrap';

const LoginModal = ({showModal, showLoginModal, hideLoginModal}) => {
  console.log('modal first', showModal);
  return (
    <>
      <Modal show={showModal} onHide={() => hideLoginModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => hideLoginModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default connect((state)=>{
  console.log('mapStateToProps', state);
  const {showModal} = state.userReducer;
  return {showModal: showModal};
}, {showLoginModal, hideLoginModal })(LoginModal);