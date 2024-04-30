import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../components/Layout'
import { OrdersCard } from '../../components/OrdersCard'

export function MyOrders () {
  const { order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className=''>
        <h1>
          My orders
        </h1>
      </div>
      {order.map((item, index) =>
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard totalProducts={item.totalProducts} totalPrice={item.totalPrice} />
        </Link>)}
    </Layout>
  )
}
