import React from 'react'
import Header from './components/Header'
import ShoppingList from './components/ShoppingList'
import AddItemForm from './components/AddItemForm'

const App = () => {
  return (
    <div className='App container'>
      <div className="card">
        <Header title="Shopping List" />
        <ShoppingList />
        <AddItemForm />
      </div>
    </div>
  )
}

export default App
