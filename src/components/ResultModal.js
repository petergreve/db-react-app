import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap'

const ResultModal = ({ close, content }) => (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Resultat</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {content}
      </Modal.Body>

      <Modal.Footer>
        <Button bsStyle="primary" onClick={close}>Ok</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);

ResultModal.propTypes = {
  close: PropTypes.func.isRequired,
  content: PropTypes.number.isRequired,
}

export default ResultModal;