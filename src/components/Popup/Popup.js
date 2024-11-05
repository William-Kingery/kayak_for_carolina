import React from 'react';
import './Popup.scss'; 

const Popup = ({ isOpen, onClose, urls }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup__overlay" onClick={onClose}></div>
      <div className="popup__content">
        <button className="popup__close" onClick={onClose}>×</button>
        <h2 className="popup__header">Donation Options</h2>
        <p className='popup__description'>
            Please donate any way you would like from your favorite app, 
            100% Donations go to the Kayak for Carolina fund, to benefit our recipients.
        </p>
        <div className="popup__options">
          <a href={urls.venmo} target="_blank" rel="noopener noreferrer" className='popup__tag'>
            <h2 className='popup__company'>Venmo</h2>
          </a>
          {/* <a href={urls.paypal} target="_blank" rel="noopener noreferrer" className='popup__tag'>
            <h2 className='popup__company'>PayPal</h2>
          </a> */}
          <a href={urls.fareharbor} target="_blank" rel="noopener noreferrer" className='popup__tag'>
            <h2 className='popup__company'>Fareharbor</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;





