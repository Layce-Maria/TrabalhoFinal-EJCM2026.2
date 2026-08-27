import { AuthProvider } from './contexts/AuthContext'
import { TopBanner } from './components/TopBanner'
import { Header } from './components/Header'
import { Login } from './pages/login'
import { Perfil } from './pages/perfil'
import './App.css'

function User() {
  return (
    <AuthProvider>
      <div className="page-container">
        
        <Header />
        <Perfil/>
        
      </div>
    </AuthProvider>
  )
}

export default User