import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={onClose}>&times;</span>
                        <p>Successfully copied</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;