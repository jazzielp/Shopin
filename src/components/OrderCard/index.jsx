import { useContext } from 'react'
import { Delete } from '../../assets/icons/Delete'
import { ShoppingCartContext } from '../../Context'
export function OrderCard ({ product }) {
  const { id, image, title, price } = product
  const { cart, setCart } = useContext(ShoppingCartContext)
  const handleClick = (id) => {
    const newArray = cart.filter(product => product.id !== id)
    setCart(newArray)
  }
  return (
    <div className='flex justify-between items-center mb-6'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <button onClick={() => handleClick(id)}>
          <Delete />
        </button>
      </div>
    </div>
  )
}
