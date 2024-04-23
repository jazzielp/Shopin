import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
function App () {
  return (
    <>
      <h1 className='text-red-200'>Hello world</h1>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <NotFound />
      <SignIn />

    </>
  )
}

export default App
