import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../utils'

import { Close } from '../../assets/icons/Close'
import { OrderCard } from '../OrderCard'
export function CheckoutSideMenu () {
  const { cart, closeCheckoutSideMenu } = useContext(ShoppingCartContext)
  const handleClick = () => closeCheckoutSideMenu()
  return (
    <aside className='flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] z-50 overflow-y-scroll'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <button onClick={handleClick}>
          <Close />
        </button>
      </div>
      <div className='px-6'>
        {
          cart && cart.map(product => <OrderCard key={product.id} product={product} />)
        }
      </div>
      <footer className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(cart)}</span>
        </p>
      </footer>
    </aside>
  )
}
