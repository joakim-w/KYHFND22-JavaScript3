import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import AddItemForm from './components/AddItemForm'
import Modal from './components/Modal';

const App = () => {

  const [items, setItems] = useState([
    {
      id: uuidv4(),
      product: 'Milk',
      completed: false,
      quantity: 3
    },
    {
      id: uuidv4(),
      product: 'Bread',
      completed: false,
      quantity: 1
    }
  ])

  const addItem = product => {
    setItems(items => [{ ...product, id: uuidv4(), completed: false}, ...items ])
  }

  const clearAll = () => {
    setItems([])
  }

  return (
    <div className='App container'>
      <div className="card">
        <Header title="Shopping List" />
        <ShoppingList listItems={items} />
        <AddItemForm addItem={addItem} />
      </div>
      <Modal />
    </div>
  )
}

export default App
