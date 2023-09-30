import React, { ReactElement, ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useClickOutside from "../hooks/useClickOutside";

type ModalProps = {
  children: ReactNode;
  open: boolean;
  onSubmit: (msg: string) => void;
  onCancel: (msg: string) => void;
  onClose: () => void;
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: "50px",
  zIndex: 1000,
};

function Modal({ children, open, onSubmit, onCancel, onClose }: ModalProps) {
  const insideModalRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(insideModalRef, () => onClose());

  if (!open) return null;

  return ReactDOM.createPortal(
    <div>
      <div style={OVERLAY_STYLES} />
      <div ref={insideModalRef} style={MODAL_STYLES}>
        <button onClick={onClose}>&times;</button>
        {children}
        <div>
          <button onClick={() => onSubmit("Submitted")}>Submit</button>
          <button onClick={() => onCancel("Cancelled")}>Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
