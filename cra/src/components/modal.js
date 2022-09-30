import React from 'react';
import { createPortal } from 'react-dom';
import './modal.css';
export const Modal = ({ setShow, children }) => {
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={setShow}>close</button>
      </div>
    </div>,
    document.body
  );
};
