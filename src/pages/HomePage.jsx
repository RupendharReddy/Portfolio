import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Certificates from '../components/Certificates';
import Services from '../components/Services';
import ScreenWarningPopup from '../components/ScreenWarningPopup';
import Navbar from '../components/Navbar';
import '../styles/homepage.css';
import { FloatButton } from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';

const HomePage = () => {

  return (
    <>
      <ScreenWarningPopup />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Services />
      <Contact />
      <FloatButton.BackTop duration={1000} className='float-button' />
    </>
  );
};

export default HomePage;