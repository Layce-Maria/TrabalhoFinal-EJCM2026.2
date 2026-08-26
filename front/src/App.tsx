import { AuthProvider } from './contexts/AuthContext'
import { TopBanner } from './components/TopBanner'
import { Header } from './components/Header'
import { Login } from './pages/login'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <TopBanner />
        <Header />
        <Login />
      </div>
    </AuthProvider>
  )
}

export default App