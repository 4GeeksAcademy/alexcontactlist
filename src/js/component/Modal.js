import React from "react";
import PropTypes from "prop-types";

export const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose(); 
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: show ? "inline-block" : "none" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure?</h5>
            {onClose ? (
              <button onClick={onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            ) : null}
          </div>
          <div className="modal-body">
            <p>Warning: unknown consequences after this point... Kidding!</p>
          </div>
          <div className="modal-footer">
            <button onClick={onClose} type="button" className="btn btn-primary">
              Cancel
            </button>

            <button onClick={handleConfirm} type="button" className="btn btn-danger" data-dismiss="modal">
             Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  show: PropTypes.bool
};

Modal.defaultProps = {
  show: false
};




























