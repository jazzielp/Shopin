import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { NavLink } from 'react-router-dom'
import { Shop } from '../../assets/icons/Shop'
export function NavBar () {
  const activeStyle = 'underline underline-offset-4'
  const { count, openCheckoutSideMenu } = useContext(ShoppingCartContext)
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
            all
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-blue-400'>
          jazziel@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
            My account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center gap-1 cursor-pointer' onClick={() => openCheckoutSideMenu()}>
          <Shop />
          <span className='flex justify-center items-center w-6 h-6 rounded-full bg-pink-300'>{count}  </span>
        </li>
      </ul>
    </nav>
  )
}
