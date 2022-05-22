import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {

  window.onscroll = () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 764 && !nav.classList.contains('scrolled')) {
      nav.classList.add('scrolled')
    }
    else if (window.scrollY < 764 && nav.classList.contains('scrolled')) {
      nav.classList.remove('scrolled')
    }
  }
  
  return (
    <div className="" id="home">
      <header>
        <div className="container">
          <div className="header-content">
            <p>Unlock your best version</p>
            <h1>Workout With<br/>Confidence</h1>
            <button className="btn"><a href="#about">Learn more</a></button>
          </div>
        </div>
      </header>
      <div className="container" id="about">
        <div className="about">
          <h1>About Me</h1>
          <div className="about-content">
            <div className="img-div" onClick={() => {console.log(window.scrollY)}}>
                <div className="overlay"></div>
                <img className="me-img" src="/img/picture1.JPG" alt="" />
              </div>
            <p className="about-text">Hey there! Welcome to my fitness page.<br/><br/> My name's Remi. I'm a full time personal trainer with the mission of helping as many people achieve their fitness goals as possible.<br/><br/> I have been training for 5+ years, so you can assure you're in safe hands.<br/><br/> <span><a href="/guides">-Explore workout guides</a></span></p>
            </div>
          </div>
      </div>
    </div>
      
  )
}

export default Home