import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/register">Регистрация</Link>
      </nav>
    </header>
  )
}