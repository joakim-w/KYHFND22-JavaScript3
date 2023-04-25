import React from 'react'

const Modal = () => {
  return (
    <div className='modal-bg'>
      <div className="modal">
        <h2>Warning</h2>
        <p>Are you sure you want to remove all the items?</p>
        <div className='modal-buttons'>
          <button className='y-btn'>Yes</button>
          <button className='n-btn'>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Modal