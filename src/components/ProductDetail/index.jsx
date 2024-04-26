import { Close } from '../../assets/icons/Close'
export function ProductDetail () {
  return (
    <aside className='flex flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button>
          <Close />
        </button>
      </div>
    </aside>
  )
}
