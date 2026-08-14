const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'blog', label: 'Blog' },
]

const Navbar = ({ activePage, onNavigate }) => {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-title">Eliad</span>
        {/* <span className="brand-subtitle">React project</span> */}
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
