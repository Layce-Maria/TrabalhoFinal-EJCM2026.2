import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { TopBanner } from './components/TopBanner'
import { Header } from './components/Header'
import { Login } from './pages/login'
import { Perfil } from './pages/perfil'
import { Product } from './pages/product/product'
import { Home } from './pages/home'
import { Product } from './pages/product/product'
import { Wishlist } from './pages/wishlist/wishlist'
import './App.css'
import Signup from './pages/Signup/Signup'



function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <TopBanner />
        <Header />
        
        <Perfil/>
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/product/:id" element={<Product />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App