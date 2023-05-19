import React from 'react'
import CartProduct from './CartProduct'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../store/features/shoppingCart/shoppingCartSlice'
import { Link } from 'react-router-dom'

const ShoppingCart = ({ checkout }) => {

  const { cart, totalAmount } = useSelector(state => state.shoppingCart)
  const dispatch = useDispatch()

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
          <p className='m-0'>Total Price: { totalAmount }</p>
          <small className='text-muted'>inkl. vat</small>
        </div>
        <div>
          {!checkout &&
            <>
              <button className='btn btn-warning' onClick={() => dispatch(clearCart())} >Clear Cart</button>
              <Link to="checkout" className='btn btn-info ms-2'>Checkout</Link>
            </>
          }
          {/* { checkout &&
            <>
              <button className='btn btn-success'>Place Order</button>
            </>
          } */}
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart