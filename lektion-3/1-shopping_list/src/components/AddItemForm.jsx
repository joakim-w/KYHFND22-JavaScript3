import React from 'react'

const AddItemForm = () => {

  return (
    <form className='AddItemForm'>
      <div className="form-group">
        <input type="text" />
        <input type="number" />
      </div>
      <button>ADD</button>
    </form>
  )
}

export default AddItemForm