import { Link } from 'react-router-dom'
import './HomePage.css'
import Header from '../../../widgets/header/ui/Header'

export default function HomePage() {
  return (
    <div className="home-page">
      <aside className="sidebar">
        <Header />
        <img
          src="/src/assets/left-side-pic.png"
          alt="Pic"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </aside>

      <main className="main-content">
        <div className="welcome-section">
          <div className="first-card">
            <img src="/src/assets/car.png" alt="Article" className="card-image" />

            <p className="card-category">Featured article</p>
            <h3 className="card-title">Wild Camping Along Tasmania’s East Coast</h3>
          </div>

          
            <p className="welcome-section-bottom-text">Scroll Down!</p>
          
        </div>
      </main>
    </div>
  )
}