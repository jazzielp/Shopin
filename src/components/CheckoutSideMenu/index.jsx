import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'

import { Close } from '../../assets/icons/Close'
import { OrderCard } from '../OrderCard'
export function CheckoutSideMenu () {
  const { cart, closeCheckoutSideMenu, count, setOrder, setCart, setCount } = useContext(ShoppingCartContext)
  const handleClick = () => closeCheckoutSideMenu()
  const handleCheckout = () => {
    const orderToAdd = {
      data: '01.02.23',
      products: cart,
      totalProducts: count,
      totalPrice: totalPrice(cart)
    }
    setOrder(state => [...state, orderToAdd])
    setCart([])
    setCount(null)
  }
  return (
    <aside className='flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] z-50 overflow-y-scroll'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <button onClick={handleClick}>
          <Close />
        </button>
      </div>
      <div className='px-6 flex-1'>
        {
          cart && cart.map(product => <OrderCard key={product.id} product={product} />)
        }
      </div>
      <footer className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(cart)}</span>
        </p>
        <Link to='my-orders/last'>
          <button className='bg-black py-3 text-white w-full rounded-lg hover:opacity-80' onClick={handleCheckout}>Checkout</button>
        </Link>
      </footer>
    </aside>
  )
}
