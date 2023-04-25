import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ handleClose }) => {
  return ReactDOM.createPortal((
    <div className='modal-bg'>
      <div className="modal">
        <h2>varning</h2>
        <p>är du säker på att du vill ta bort?</p>
        <button className='btn' onClick={handleClose}>Close</button>
      </div>
    </div>
  ), document.querySelector('#modals'))
}

export default Modal