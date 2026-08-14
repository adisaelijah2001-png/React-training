import { useState } from 'react'
import heroImg from './assets/hero.png'

const Home = ({ onNavigate }) => {
  const [clicks, setClicks] = useState(0)
  const handleClick = () => setClicks((c) => c + 1)

  return (
    <section className="page-card home-page">
      <div className="hero-copy">
        <span className="eyebrow">Adisa Elijah Abisola</span>
        <h1>Front-end developer — HTML, JavaScript, CSS, React</h1>
        <p>
          I graduated from Ekiti State University with a Second Class Upper in
          Computer Science. I build responsive interfaces and interactive web
          applications using React and modern tooling.
        </p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate && onNavigate('blog')}>
            View projects
          </button>
          <button className="primary-btn" onClick={handleClick}>
            Say hi {clicks > 0 ? `(${clicks})` : ''}
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Illustration for portfolio" />
      </div>
    </section>
  )
}

export default Home
