import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home/ui/HomePage'
import RegisterPage from '../pages/register/ui/RegisterPage'
import Header from '../widgets/header/ui/Header'

export function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}