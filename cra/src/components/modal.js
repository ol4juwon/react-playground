import React from 'react';
import { createPortal } from 'react-dom';
import './modal.css';
export const Modal = ({ children }) => {
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
};
