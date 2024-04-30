export function OrdersCard ({ totalPrice, totalProducts }) {
  return (
    <div className='flex justify-between items-center mb-6 border border-black rounded-lg p-4 w-80'>
      <p className='flex justify-between w-full'>
        <div className='flex flex-col'>
          <span className='font-light'>01.02.23</span>
          <span className='font-light'>{totalProducts} articles</span>
        </div>
        <span className='font-medium text-2xl'>${totalPrice}</span>
      </p>
    </div>
  )
}
