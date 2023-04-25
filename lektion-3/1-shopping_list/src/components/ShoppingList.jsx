import React from 'react'
import ListItem from './ListItem'

const ShoppingList = ({ listItems }) => {
  return (
    <div className='ShoppingList'>
      { 
        listItems.map(item => (
          <ListItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default ShoppingList