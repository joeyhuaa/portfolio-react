import React from 'react';
import './About.css';
// import Moi from '../../media/profil.png';
const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me</h3>
                <p>  With a vested passion for various fields such as programming and 3D, I'm currently following a bootcamp at BeCode.org. This allows me to polish my skills in JS, PHP, CSS, Saas in addition to frameworks like React.js, Vue.js and React-Native. Which makes me think I'd like to get started with other frameworks and 3D-oriented tools, of which Three.js, 3Dmax and zbrush.
                </p>
            </div>
            <div className="about-img">
                {/* <img src={Moi}  alt="about" width={600}/> */}
            </div>
        </div>
    )
}

export default About;
