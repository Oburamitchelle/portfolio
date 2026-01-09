import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import myHeroImage from '/image.png'
import myAboutImage from './assets/images/imagee.png'
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
      <section className="hero">
        <div className="hero-text">
          <h2>Hi, I'm Mitchelle</h2>
          <p>Aspiring Software & Web developer | Building Ideas into Code</p>
          <button className="cta-button">View Projects</button>
        </div>
        <div className="hero-image">
          <img src={myHeroImage} alt='myHeroImage'/>
        </div>
      </section>
      {/*about-me-section*/}
      <section className="about-me">
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="about-col-">
                <img src={myAboutImage} alt="myAboutImage" />
              </div>
              <div className="about-col-"></div>
            </div>
          </div>
        </div>
        <h1>About Me</h1>
        <h3>I am a passionate software developer with strong interests in creating scalable, efficient and user friendly applications and websites. I enjoy turning complex problems into elegant solution and continuously improving my skills by learnnng new technologies.ith focus in creating clean, maintainable code, i aim to create a software that delivers real value and great user experience</h3>
        <div className="tab-titles">
          <p className="tab-links">Skills</p>
          <p className="tab-links">Experience</p>
          <p className="tab-links">Education</p>
        </div>
      </section>

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
