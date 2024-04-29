import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../components/Layout'
import { OrderCard } from '../../components/OrderCard'

export function MyOrder () {
  const { order } = useContext(ShoppingCartContext)

  const lastOrder = order?.slice(-1)[0]

  return (
    <Layout>
      MyOrder
      <div className='px-6 flex-1'>
        {
          lastOrder && lastOrder.products?.map(product => <OrderCard key={product.id} product={product} isMyOrder />)
        }
      </div>
    </Layout>
  )
}
