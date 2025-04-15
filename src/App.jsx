// import { useState } from 'react'
import Landing from './components/landing'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certificates from './components/Certificates';
import Services from './components/Services';
import './App.css'


function App() {

  return (
    <>
      <div>
        {/* <Landing/> */}
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Services />
        <Contact />
      </div>
    </>
  )
}

export default App
