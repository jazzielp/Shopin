import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

import { Close } from '../../assets/icons/Close'
export function ProductDetail () {
  const { closeProductDetail, productToShow } = useContext(ShoppingCartContext)
  const { image, price, title, description } = productToShow
  const handleClick = () => closeProductDetail()
  return (
    <aside className='flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={handleClick}>
          <Close />
        </button>
      </div>
      <figure className='px-6'>
        <img src={image} alt={title} className='w-full h-full rounded-lg' />
      </figure>
      <p className='flex flex-col p-6 gap-2'>
        <span className='font-medium text-2xl'>${price}</span>
        <span className='font-medium text-md'>{title}</span>
        <span className='font-light text-sm text-pretty'>{description}</span>

      </p>
    </aside>
  )
}
