import React from 'react'

const Modal = ({ clearAll, setShowModal }) => {
  return (
    <div className='modal-bg'>
      <div className="modal">
        <h2>Warning</h2>
        <p>Are you sure you want to remove all the items?</p>
        <div className='modal-buttons'>
          <button className='y-btn' onClick={() => clearAll()}>Yes</button>
          <button className='n-btn' onClick={() => setShowModal(false)}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Modal