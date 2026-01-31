import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroImage from './assets/images/image5.jpg'
import AboutImage from './assets/images/imagee.png'
import myLogo from './assets/images/myLogo.png'
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
          <img src={myLogo} alt="mylogo" className='mylogo' />
        </div>
        <div className='nav-bar' >
          <ul>
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
          <div className="hero-content">
            <div className="hero-text">
              <h3>It's me</h3>
              <h1>I'm <span>M</span>itchelle</h1>
              <p>Aspiring Software & Web developer | Building Ideas into Code</p>
            </div>
            <div className="btn-sci">
              <a href="#projects"><button className='btn'>View Projects</button></a>
              <a href="#contact"><button className='btn'>Contact Me</button></a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-box">
              <div className="image-item">
                <img src={HeroImage} alt="" />
              </div>
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
        <div className="project-container">
          <h2>Projects</h2>
          <div className="project-box">
            <div className="project-grid">
              <div className="project-card">
                <div className='project-image'>
                  <img src={AboutImage} alt="" />
                </div>
                <div className="project-data">
                  <h3>Project one</h3>
                </div>
              </div>
              <div className="project-card">
                <div className="project-data">
                  <h3>Project two</h3>
                </div>
              </div>
              <div className="project-card">
                <div className="project-data">
                  <h3>Project three</h3>
                </div>
              </div>
              <div className="project-card">
                <div className="project-data">
                  <h3>Project four</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <a href="" target='blank'><button>View CV</button></a>
            <a href="" download><button>Download CV</button></a>
          </div>
        </div>
      </section>
      {/*contact-section*/}
      <section className="contact" id='contact'>
        <div className="contact-container">
          <h2>CONTACT</h2>
          <h3>I would love to here from you.Send me a message</h3>
          <form action="post">
            <label htmlFor="Name" className="name">Name*</label>
            <input type="text" id='name' name='name' placeholder='Enter your name.' required /><br /><br />
            <label htmlFor="E mail" className="email">Email*</label>
            <input type="email" id='email' name='email' placeholder='Enter your name.' required /><br /><br />
            <label htmlFor="number" className='number'>Phone No.</label>
            <input type="number" id='number' name='number' placeholder='+254700000000' /><br /><br />
            <label htmlFor="message" className='message'>Subject*</label>
            <input type="text" id='text' name='text'className='text-area' placeholder='Write your message here...' required /><br /><br />
            <button className="submit">Submit</button>
          </form>
          <p>Follow on social media for more information</p>
          <div className='quick-links'>
            <ul>
              <li>
                <a href="" className='quick-links'><img src={githubLogo} alt="github" className='githublogo' /></a>
                <a href="" className='quick-links'><img src={linkedinLogo} alt="linkedin" className='logo' /></a>
                <a href="" className='quicklinks'><img src={gmailLogo} alt="gmail" className='logo' /></a>
                <a href="" className='quick-links'><img src={instagramLogo} alt="instagram" className='logo' /></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-container">
          <div class="copyright">
            <p>&copy; 2025 michobura. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </body>
  )
}

export default App
