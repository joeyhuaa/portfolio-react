import React from 'react';
import hero from '../media/hero.png';
import '../media/styles/home.css';
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
      {/* Hero Banner */}
      <div className="cover-container">
        <img className="video" src={hero} alt="" />
        <h1>Paulo Martin</h1>
        <p>Developer | Designer | 3D Creator</p>
      </div>
      {/* About Section */}
      <div className="about-container">
        <div className="about-desc">
          <h3>Let me tell you something about me</h3>
          <p>
            {' '}
            With a vested passion for various fields such as programming and 3D, I'm currently following a bootcamp at
            BeCode.org. This allows me to polish my skills in JS, PHP, CSS, Saas in addition to frameworks like
            React.js, Vue.js and React-Native. Which makes me think I'd like to get started with other frameworks and
            3D-oriented tools, of which Three.js, 3Dmax and zbrush.
          </p>
        </div>
        <div className="about-img"></div>
      </div>

      
   {/* Slider Section */}
      <Slider/>


      {/* Info Section */}
      <div className="info-container">
        <div className="info">
          <h1>Let's work together and create something unique</h1>
        </div>
      </div>

   

      {/* Footer Section */}
      <div className="footer-container">
        <div className="footer-info">
          <h1>Paulo</h1>
          <p>Based in Fresno California</p>
        </div>
        <div className="footer-contact">
          <h3>Contact me : ###-###-### </h3>
          <p>And let's get down to work</p>
        </div>
        <div className="footer-sns">
          <div className="design-by">Design By Paulo</div>
          <div className="sns-links">
            <a href="https://www.linkedin.com/in/paulo-martin90/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin linkedin"></i>
            </a>
            <a href="https://twitter.com/jeanhoudret" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter twitter"></i>
            </a>
            <a href="https://twitter.com/FancyKat__" target="_blank" rel="noreferrer">
              <i className="fab fa-github github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
