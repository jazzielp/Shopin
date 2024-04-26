import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Add } from '../../assets/icons/Add'

export function Card ({ product }) {
  const { count, setCount, openProductDetail, setProductToShow, setCart } = useContext(ShoppingCartContext)
  const handleClick = () => {
    setProductToShow(product)
    openProductDetail()
  }

  const addToCart = (productData) => {
    setCart(cartState => [...cartState, productData])
  }

  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={handleClick}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-pink-200 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{product?.category}</span>
        <img className='w-full h-full object-cover rounded-lg' src={product.image} alt={product.title} />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-blue-300 w-6 h-6 rounded-full m-2 p-1'
          onClick={(e) => {
            e.stopPropagation()
            setCount(count + 1)
            addToCart(product)
          }}
        >
          <Add />
        </div>
      </figure>
      <p className='flex justify-between gap-2'>
        <span className='text-xs font-light'>{product.title}</span>
        <span className='text-lg font-medium'>{product.price}</span>
      </p>
    </div>
  )
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
}
