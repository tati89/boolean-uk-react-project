import { useState } from "react";

function Modal({ buttonLabel, children }) {
  const [show, setShow] = useState(false);

  function openModal() {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

  return (
    <div className="">
      <button className="button-reset-styles" onClick={openModal}>
        {buttonLabel}
      </button>
      {show && (
        <div className="modal-bg">
          <div className="modal">
            {children}
            <button onClick={closeModal} className="modal-close">
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
