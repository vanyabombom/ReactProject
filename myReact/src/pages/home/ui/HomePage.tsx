import { Link } from 'react-router-dom'
import './HomePage.css'
import Header from '../../../widgets/header/ui/Header'

export default function HomePage() {
  return (
    <div className="home-page">
      <aside className="sidebar">
        <Header />
        
      </aside>
      
      <main className="main-content">
        <h1>Добро пожаловать</h1>
        <p>Основное содержание страницы размещается здесь</p>
      </main>
    </div>
  )
}