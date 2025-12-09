// Exercise 3.2 – Modal using React Portal
import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className="modal-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          padding: 20,
          maxWidth: 400,
          margin: '100px auto',
          borderRadius: 8,
        }}
      >
        {children}
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
}
