import { useState } from 'react'

const ChangeItem = ({item, changeItem}) => {
  const [text, setText] = useState(item.product)

  const handleSub = e => {
    e.preventDefault()
    changeItem(text)
  }

  return (
    <form className='ChangeItem' onSubmit={handleSub}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button className='btn btn-check'><i className="fa-solid fa-circle-check"></i></button>
    </form>
  )
}

export default ChangeItem