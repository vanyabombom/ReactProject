import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className="sidebar-header" role="banner">
      <nav className="pill-nav" role="navigation" aria-label="primary">
        <Link to="/" className="pill-link active">Home</Link>
        <Link to="/articles" className="pill-link">Articles</Link>
        <Link to="/about" className="pill-link">About</Link>
      </nav>
    </div>
  )
}