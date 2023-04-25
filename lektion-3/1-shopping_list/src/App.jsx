import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import AddItemForm from './components/AddItemForm'
import Modal from './components/Modal';

const App = () => {

  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([])

  const increment = (item) => {
    item.quantity++
    setItems(items => [...items])
  }
  const decrement = (item) => {
    if(item.quantity <= 1) {
      removeItem(item.id)
      return
    }

    item.quantity--
    setItems(items => [...items])
  }

  const addItem = product => {
    setItems(items => [{ ...product, id: uuidv4(), completed: false}, ...items ])
  }

  const clearAll = () => {
    setItems([])
    setShowModal(false)
  }

  const removeItem = id => {
    setItems(items => items.filter(item => item.id !== id))
  }

  const changeText = (item, newText) => {
    item.product = newText
    setItems(items => [...items])
  }

  const toggleComplete = item => {

    // Om vi ska loopa någonting så måste det göras utanför en set-funktion
    // const newItems = items.map(_item => {
    //   if(_item.id === item.id) {
    //     _item.completed = !_item.completed
    //   }
    //   return _item
    // })

    // setItems(newItems)

    item.completed = !item.completed
    // När vi ändrar vårat state så vill vi byta ut innehållet för att vara säkra på att react ser ändringen
    setItems(items => {
      items.sort((a, b) => a.completed - b.completed)
      return [...items]
    })
  }

  return (
    <div className='App container'>
      <div className="card">
        <Header title="Shopping List" setShowModal={setShowModal} />
        <ShoppingList 
        listItems={items} 
        removeItem={removeItem} 
        toggleComplete={toggleComplete}
        changeText={changeText}
        increment={increment}
        decrement={decrement}
        />
        <AddItemForm addItem={addItem} />
      </div>
      { showModal && <Modal clearAll={clearAll} setShowModal={setShowModal} /> }
    </div>
  )
}

export default App
