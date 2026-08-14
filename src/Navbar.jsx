
const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'blog', label: 'Projects' },
]

import reactLogo from './assets/react.svg'

const Navbar = ({ activePage, onNavigate }) => {
  return (
    <header className="navbar">
      <div className="brand">
        <div className="brand-row">
          <span className="brand-title">Adisa Elijah</span>
          <a
            className="react-link"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            title="React docs"
          >
            <img src={reactLogo} alt="React" className="react-logo" />
          </a>
        </div>
        <span className="brand-subtitle">Computer Science — Ekiti State University (2:1)</span>
      </div>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={item.key === activePage ? 'nav-link active' : 'nav-link'}
            onClick={() => onNavigate(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Navbar