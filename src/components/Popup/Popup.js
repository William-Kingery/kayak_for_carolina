import React from "react";
import "./Popup.scss";

const PamphletModal = ({ isOpen, onClose }) => {
   if (!isOpen) return null;

   return (
      <div className="modal-overlay">
         <div className="modal-content">
            <button className="close-button" onClick={onClose}>×</button>
            <iframe
               src="/WNC_pamphlet.pdf"
               width="100%"
               height="500px"
               title="Pamphlet"
            ></iframe>
         </div>
      </div>
   );
};

export default PamphletModal;