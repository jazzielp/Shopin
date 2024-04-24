import PropTypes from 'prop-types'
export function Layout ({ children }) {
  return (
    <div className='flex flex-col mt-20'>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
