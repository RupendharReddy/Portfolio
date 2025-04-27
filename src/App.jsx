// import { useState } from 'react'
import Landing from './components/landing'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from './components/Certificates';
import Services from './components/Services';

import ScreenWarningPopup from './components/ScreenWarningPopup';
import './App.css'
// import { useEffect, useState } from 'react';


function App() {
  // const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setLocation({
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         });
  //       },
  //       (error) => {
  //         console.error('Error getting location:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Geolocation is not supported by this browser.');
  //   }
  // }, []);
  return (
    <>
      <div>
        {/* <Landing/> */}
        <ScreenWarningPopup />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Services />
        <Contact />
        {/* <MapComponent latitude={location.latitude} longitude={location.longitude} /> */}
      </div>
    </>
  )
}

export default App
