import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { Layout } from '../../components/Layout'
import { OrdersCard } from '../../components/OrdersCard'

export function MyOrders () {
  const { order } = useContext(ShoppingCartContext)
  console.log(order)
  return (
    <Layout>
      <div className=''>
        <h1>
          My orders
        </h1>
      </div>
      {order.map(item =>
        <Link key={item.id} to={`/my-orders/${order.id}`}>
          <OrdersCard totalProducts={item.totalProducts} totalPrice={item.totalPrice} />
        </Link>)}
    </Layout>
  )
}
