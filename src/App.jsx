import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand">MyApp</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link">Home</a></li>
            <li className="nav-item"><a className="nav-link">About</a></li>
          </ul>
        </div>
      </div>
    </nav>








    <footer className="bg-dark text-center fixed-bottom">
        <p className="text-center text-white">© 2026 MyApp. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
