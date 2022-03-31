import React from 'react';
import './Navbar.css';

// import ProjectImage from '../ProjectImage';
// import Button from '../Button';
// import ImageBlock from '../ImageBlock';
// import Tabs from '../Tabs';
// import CircleButton from '../CircleButton';
// import ContentBlock from '../ContentBlock';
// import './ClassicHome.css';

const Navbar = ({isScrolling}) => {
  const toTheTop = () => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  
      return (
          <nav className={`navbar ${isScrolling > 20  ? "scrolling" : null}`}>
              <div className="navbar-logo" onClick={toTheTop}>Paulo</div>



              
          </nav>
      )
  }
  
  export default Navbar;