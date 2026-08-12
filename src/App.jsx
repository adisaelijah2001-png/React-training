import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Blog from './Blog.jsx'
import Footer from './Footer.jsx'

const pages = {
  home: Home,
  about: About,
  blog: Blog,
}

function App() {
  const [activePage, setActivePage] = useState('home')
  const Page = pages[activePage]

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        <Page />
      </main>
      <Footer />
    </div>
  )
}

export default App
