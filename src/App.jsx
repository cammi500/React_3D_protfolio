import { BrowserRouter } from "react-router-dom";
// import {
//   Navbar,
//   Hero,
//   About,
//   Experience,
//   Tech,
//   Works,
//   Feedbacks,
//   Contact,
//   StarsCanvas
// } from './components';
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Tech from "./components/tech.jsx";
import Works from "./components/works.jsx";
import Feedbacks from "./components/feedback.jsx";

import Contact from "./components/contact.jsx";
import StarsCanvas from "./components/starsCanvas.jsx";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* //header */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* body */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
