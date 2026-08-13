import { useState } from 'react'
import heroImg from './assets/hero.png'

const Home = () => {
  const [clicks, setClicks] = useState(0)
  const handleClick = () => {
    setClicks((current) => current + 1)
  }
  
  return (
    <section className="page-card home-page">
      <div className="hero-copy">
        <span className="eyebrow">React training project</span>
        <h1>Build a polished React app with component navigation.</h1>
        <p>
          This project demonstrates reusable components, page switching, and
          interactive UI with React state.
        </p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={handleClick}>
            Click me {clicks > 0 ? `(${clicks})` : ''}
          </button>
          <p className="hero-note">
            {clicks === 0
              ? 'Try the button to see state updates in action.'
              : `Button clicked ${clicks} time${clicks === 1 ? '' : 's'}.`}
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Illustration for React training" />
      </div>
    </section>
  )
}

export default Home
