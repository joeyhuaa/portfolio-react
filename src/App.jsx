import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

// import Cover from './components/cover/Cover';
// import Navbar from './components/navbar';
// import About from './components/about/About';
// import Slider from './components/slider/Slider';
// import Info from './components/info/Info';
// import Footer from './components/footer/Footer';

// function App() {
//   const [scrollHeight, setScrollHeight] = useState(0);

//   const handleScroll = () => {
//     const position = window.pageYOffset;
//     setScrollHeight(position);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//   }, [scrollHeight]);

//   return (
//     <div className="App">
//       <Navbar isScrolling={scrollHeight} />
//       <Cover />
//       <About />
//       <Slider />
//       <Info />
//       <Footer />
//     </div>
//   );
// }

// export default App;
