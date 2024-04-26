import { Delete } from '../../assets/icons/Delete'
export function OrderCard ({ product }) {
  const { image, title, price } = product
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <Delete />
      </div>
    </div>
  )
}
