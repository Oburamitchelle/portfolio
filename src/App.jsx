import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroImage from './assets/images/image3.png'
import AboutImage from './assets/images/imagee.png'
import myLogo from './assets/images/logo.png'
import githubLogo from './assets/images/github.svg'
import linkedinLogo from './assets/images/linkedin.svg'
import instagramLogo from './assets/images/instagram.svg'
import gmailLogo from './assets/images/gmail.svg'
import './App.css'

function App() {
  return (
    <body>
      {/*navigation-section*/}
      <header className="nav-container">
        <div className='nav-logo'>
          <a href="#" className='mylogo'>
            <img src={myLogo} alt="mylogo" className='mylogo' />
          </a>
        </div>
        <div className='nav-bar' >
          <button class="mobile-menu-btn">☰</button>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About me</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </header>
      {/*hero-section*/}
      <section id='home'>
        <div className='container'>
          <div className="hero-container">
            <div className="hero-text">
              <h2>Hi, I'm Mitchelle</h2>
              <p>Aspiring Software & Web developer | Building Ideas into Code</p>
              <button className="cta-button">View Projects</button>
            </div>
            <div className="hero-image">
              <img src={HeroImage} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/*about-section*/}
      <section>
        <section className='about' id='about'>
          <div className='container'>
            <div className='about-column'>
              <div className='about-col-1'>
                <img src={AboutImage} alt="aboutImage" />
              </div>
              <div className='about-col-2'>
                <h3>ABOUT ME</h3>
                <p className='tablinks'></p>
                <p className='tablinks'></p>
                <p className='tablinks'></p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/*projects-section*/}
      <section className="projects" id='projects'>
        <h2>Projects</h2>
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
      <section className="contact" id='contact'>
        <h2>CONTACT</h2>
        <p>I would love to here from you.Send me a message</p>
        <form action="post">
          <label htmlFor="Name" className="name">Name</label>
          <input type="text" id='name' name='name' placeholder='Enter your name.' /><br /><br />
          <label htmlFor="E mail" className="email">Email</label>
          <input type="email" id='email' name='email' placeholder='Enter your name.' /><br /><br />
          <label htmlFor="number" className='number'></label>
          <input type="number" id='number' name='number' placeholder='+254700000000' /><br /><br />
          <label htmlFor="message" className='message'>Subject</label>
          <input type="text" id='text' name='text' placeholder='Write your message here...' /><br /><br />
          <input type="submit" id='submit' />
        </form>
      </section>
      <footer>
        <div className="container">
          <p>Follow on social media for more information</p>
          <div className='quick-links'>
            <ul>
              <li>
                <a href="" className='quick-links'><img src={githubLogo} alt="github" className='logo' /></a>
                <a href="" className='quick-links'><img src={linkedinLogo} alt="linkedin" className='logo' /></a>
                <a href="" className='quicklinks'><img src={gmailLogo} alt="gmail" className='logo' /></a>
                <a href="" className='quick-links'><img src={instagramLogo} alt="instagram" className='logo' /></a>
              </li>
            </ul>
          </div>
          <div class="copyright">
            <p>&copy; 2025 michobura. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </body>
  )
}

export default App
