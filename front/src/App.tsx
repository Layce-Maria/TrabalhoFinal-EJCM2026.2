import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { TopBanner } from './components/TopBanner'
import { Header } from './components/Header'
import { Login } from './pages/login'
import { Perfil } from './pages/perfil'
import { Product } from './pages/product/product'
import './App.css'



function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <TopBanner />
        <Header />
        
        <Perfil/>
        
      </div>
    </AuthProvider>
  )
}

export default App