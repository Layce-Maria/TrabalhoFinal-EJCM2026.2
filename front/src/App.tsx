import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { TopBanner } from './components/TopBanner'
import { Header } from './components/Header'
import { Login } from './pages/login'
import { Home } from './pages/home'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <TopBanner />
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App