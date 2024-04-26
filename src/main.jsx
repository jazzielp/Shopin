import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { ShoppingCartProvider } from './Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShoppingCartProvider>
    <App />
  </ShoppingCartProvider>
)
