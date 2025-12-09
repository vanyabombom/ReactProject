import './HomePage.css'
import Header from '../../../widgets/header/ui/Header'

export default function HomePage() {
  const stories = [
    {
      id: 1,
      image: '/src/assets/story1.png',
      date: 'October 10, 2025',
      title: 'Finding Stillness in the Hills of San Cristobal'
    },
    {
      id: 2,
      image: '/src/assets/story2.png',
      date: 'October 2, 2025',
      title: 'Wandering Through the Streets of Rome'
    },
    {
      id: 3,
      image: '/src/assets/story3.png',
      date: 'September 17, 2025',
      title: 'Driving Across Monument Valley'
    },
    {
      id: 4,
      image: '/src/assets/story4.png',
      date: 'September 2, 2025',
      title: 'Walking the Terraces of Northern Vietnam'
    }
  ]

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
            <h3 className="card-title">Wild Camping Along Tasmania's East Coast</h3>
          </div>
          <p className="welcome-section-bottom-text">Scroll Down!</p>
        </div>

        <section className="travel-stories-section">
          <h2 className="stories-title">Latest travel stories</h2>
          
          <div className="stories-grid">
            {stories.map((story) => (
              <div key={story.id} className="story-item">
                <img src={story.image} alt={story.title} className="story-image" />
                <p className="story-date">{story.date}</p>
                <h3 className="story-item-title">{story.title}</h3>
              </div>
            ))}
          </div>

          <a href="#" className="view-all-link">View all articles</a>
        </section>
      </main>
    </div>
  )
}