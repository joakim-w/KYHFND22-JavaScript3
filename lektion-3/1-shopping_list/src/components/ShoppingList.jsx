import React from 'react'
import ListItem from './ListItem'

const ShoppingList = ({ listItems, removeItem, toggleComplete, changeText, increment, decrement }) => {
  return (
    <div className='ShoppingList'>
      { 
        listItems.map(item => (
          <ListItem 
          key={item.id} 
          item={item} 
          removeItem={removeItem} 
          toggleComplete={toggleComplete} 
          changeText={changeText}
          increment={increment}
          decrement={decrement}
          />
        ))
      }
    </div>
  )
}

export default ShoppingList