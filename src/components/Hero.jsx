import React, { useEffect } from "react";
import '../styles/hero.css'
import rupe from '../assets/rupe.png'
// import dotsbg from '../assets/dotsbg.png'
import cv from '../assets/Rupe_cv.pdf'
import { Typography } from "antd";
import { DiscordOutlined, GithubOutlined, LinkedinOutlined, MailOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { TypeAnimation } from "react-type-animation";
import { trackVisitor } from "../store/actions/visitorActions";

const { Title, Paragraph } = Typography;

const Hero = () => {

  useEffect(() => {
    trackVisitor();
  }, []);  return (
    <section id="hero" style={{ padding: "100px 0px 60px 10px", backgroundColor: "#001529" }}>
      <div class="placeholder">
        <h5>R<br />u<br />p<br />e</h5>
      </div>
      <div className="container">
        <div className="content">
          <h1 id="hi">Hi There, i'm</h1>
          <h2 id="name">RUPENDHAR REDDY VARUGU</h2>
          <h5></h5>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Full Stack Developer',
              1200, // wait 1s before replacing "Mice" with "Hamsters"
              'Software Developer',
              1200,
              // 'Frontend Developer',
              // 1000,
              // 'Backend Developer',
              // 1000
            ]}
            wrapper="span"
            speed={50}
            // deletionSpeed={3}
            className="typed-text"
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
          <p id="info">Passionate about crafting dynamic, high-performance web solutions. Focused on creating seamless user experiences, optimized systems, and impactful digital products</p>
          <a href={cv} download="Rupe_CV.pdf">
            <button>Download CV</button>
          </a>
        </div>
        <div className="imgdiv">
          {/* <img src={dotsbg} alt="Rupe" id="dotsbg"/> */}
          <div className="imgdiv2">
            <img src={rupe} alt="Rupe"/>
          </div>
          {/* <div className="social_links"> */}
          <div className="social_links">
            <a href="https://www.linkedin.com/in/rupendhar-reddy-varugu-390a53263/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="link" />
            </a><br />
            <a href="https://github.com/RupendharReddy" target="_blank" rel="noopener noreferrer">
              <GithubOutlined className="link" />
            </a><br />
            <a href="https://drive.google.com/drive/folders/1NOG7MCjKDFwvV3o8NN-SMq1mIMlXIe8R?usp=drive_link">
            <SafetyCertificateOutlined className="link"/>
            </a><br />
            <a href="mailto: varugurupendharreddy@gmail.com" target="_blank" rel="noopener noreferrer">
              {/* <DiscordOutlined className="link" /> */}
              <MailOutlined className="link" />
            </a>
          {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
