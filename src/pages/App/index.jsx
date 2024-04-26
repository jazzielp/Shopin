import { useRoutes, BrowserRouter } from 'react-router-dom'
import { useContext } from 'react'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { NavBar } from '../../components/Navbar'
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'
import { ShoppingCartContext } from '../../Context'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/signin', element: <SignIn /> },
    { path: '*', element: <NotFound /> }

  ])

  return routes
}

function App () {
  const { isCheckoutSideMenuOpen } = useContext(ShoppingCartContext)

  return (
    <>
      <BrowserRouter>
        {isCheckoutSideMenuOpen && <CheckoutSideMenu />}
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
