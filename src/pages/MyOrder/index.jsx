import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../components/Layout'
import { OrderCard } from '../../components/OrderCard'
import { ArrowReturn } from '../../assets/icons/ArrowReturn'

export function MyOrder () {
  const { order } = useContext(ShoppingCartContext)

  const lastOrder = order?.slice(-1)[0]

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mt-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ArrowReturn />
        </Link>
        <h1>
          My orders
        </h1>
      </div>
      <div className='px-6 flex-1'>
        {
          lastOrder && lastOrder.products?.map(product => <OrderCard key={product.id} product={product} isMyOrder />)
        }
      </div>
    </Layout>
  )
}
