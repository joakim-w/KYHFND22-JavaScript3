import React from 'react'
import CartProduct from './CartProduct'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {

  const { cart } = useSelector(state => state.shoppingCart)

  return (
    <div onClick={e => e.stopPropagation()}>
      {cart.length < 1 && (
        <div className='p-2 text-center'>
          Your cart is empty
        </div>
      )}
      { cart.map(item => <CartProduct key={'cart' + item.product.id} item={item} />) }
      <div className="dropdown-divider"></div>
      <div className='d-flex justify-content-between align-items-center p-2'>
        <div>
          <p className='m-0'>Total Price: 1000</p>
          <small className='text-muted'>inkl. vat</small>
        </div>
        <div>
          <button className='btn btn-warning'>Clear Cart</button>
          <button className='btn btn-info ms-2'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart