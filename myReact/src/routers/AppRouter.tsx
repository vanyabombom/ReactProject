import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home/ui/HomePage'
import RegisterPage from '../pages/register/ui/ArticlesPage'


export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}