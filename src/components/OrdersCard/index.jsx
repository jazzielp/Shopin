import { Arrow } from '../../assets/icons/Arrow'
export function OrdersCard ({ totalPrice, totalProducts }) {
  return (
    <div className='flex justify-between items-center mb-6 border border-black'>
      <p>
        <span>01.02.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}
