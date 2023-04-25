import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ handleClose, children, sale }) => {

  const styles = {
    modal: {
      border: '4px solid',
      textAlign: 'center',
      borderColor: sale ? 'red' : '#555'
    },
    button: {
      backgroundColor: sale ? 'red' : '#555'
    }
  }

  return ReactDOM.createPortal((
    <div className='modal-bg'>
      <div className="modal" style={styles.modal}>
        
        { children }
        <button className='btn' onClick={handleClose} style={{
          backgroundColor: sale ? 'red' : '#555'
        }}>Close</button>
      </div>
    </div>
  ), document.querySelector('#modals'))
}

export default Modal