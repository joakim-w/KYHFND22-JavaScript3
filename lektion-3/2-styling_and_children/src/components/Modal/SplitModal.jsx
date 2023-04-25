import React from 'react'

const SplitModal = ({ left, right }) => {
  return (
    <div className='modal-bg'>
      <div className="modal">
        <div className="split">
          <div className="left">
            {left}
          </div>
          <div className="right">
            {right}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplitModal