import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home.jsx'

function App() {

  const title = 'Welcome to church';
  const links = 50;
 return (<div className="text-center">
  
  <h1 className="text-blue-600" >{title}</h1>
  <p>This is TCNJ, located around Lagos business school</p>
  <p>links {links} is available</p>
  <p>{10}</p>
  <p>{"Hello, Ninja's!"}</p>
  <p>{ [1,2,3,4,5] }</p>
  <Home />
  </div>)

  
}

export default App
