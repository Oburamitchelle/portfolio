import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      {/*navigation-section*/}
      <nav className="navbar">
        <ul>
          <li><a href="#about"></a>About</li>
          <li><a href="#projects"></a>Projects</li>
          <li><a href="#contact"></a>Contact</li>
        </ul>
      </nav>
      {/*hero-section*/}
      <header className="hero" id='about'>
        <h2>Hi, I'm Mitchelle</h2>
        <p>Aspiring Software & Web developer | Building Ideas into Code</p>
        <button className="cta-button">View Projects</button>
      </header>
      {/*about-me-section*/}

      {/*projects-section*/}
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project one</h3>
          </div>
          <div className="project-card">
            <h3>Project two</h3>
          </div>
          <div className="project-card">
            <h3>Project three</h3>
          </div>
          <div className="project-card">
            <h3>Project four</h3>
          </div>
        </div>
      </section>
      {/*contact-section*/}
      <section className="contact">
        <label htmlFor="name" className="name">Name</label>
        <input type="text" id='name' name='name' placeholder='Enter your name.' />
        <br /><br />
        <label htmlFor="email" className="email">Email</label>
        <input type="email" id='email' name='' placeholder='Enter your name.' />
      </section>
    </div>
  )
}

export default App
