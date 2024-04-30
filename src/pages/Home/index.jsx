import { useState, useEffect, useContext } from 'react'
import { Card } from '../../components/Card'
import { Layout } from '../../components/Layout'
import { ProductDetail } from '../../components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
const URL = 'https://fakestoreapi.com/products'
export function Home () {
  const [products, setProducts] = useState(null)
  const { isProductDetailOpen, order } = useContext(ShoppingCartContext)
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(result => setProducts(result))
  }, [])
  return (
    <Layout>
      <div className='grid gap-7 grid-cols-4 w-full max-w-screen-lg'>
        {
          products && products.map((product) => <Card key={product.id} product={product} />)
        }
      </div>
      {isProductDetailOpen && <ProductDetail />}
    </Layout>
  )
}
