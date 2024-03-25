import React, { useEffect, useRef } from 'react';
import './Modal.css';

function Modal({ children, isOpen, onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      modalRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        ref={modalRef}
      >
        {children}
        <button className="modal-close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default Modal;
