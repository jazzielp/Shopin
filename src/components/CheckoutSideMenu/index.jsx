import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

import { Close } from '../../assets/icons/Close'
export function CheckoutSideMenu () {
  const { closeCheckoutSideMenu } = useContext(ShoppingCartContext)
  const handleClick = () => closeCheckoutSideMenu()
  return (
    <aside className='flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] z-50'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My order</h2>
        <button onClick={handleClick}>
          <Close />
        </button>
      </div>
    </aside>
  )
}
