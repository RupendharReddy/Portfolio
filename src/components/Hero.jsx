import React from "react";
import '../styles/hero.css'
import rupe from '../assets/rupe.png'
// import dotsbg from '../assets/dotsbg.png'
import cv from '../../public/Rupe_CV.pdf'
import { Typography } from "antd";
import { DiscordOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <section id="hero" style={{ padding: "100px 0px 100px 20px", backgroundColor: "#001529" }}>
      <div class="placeholder">
        <h5>R<br />u<br />p<br />e</h5>
      </div>
      <div className="container">
        <div className="content">
          <h1>Hi There, i'm</h1>
          <h1 id="name">RUPENDHAR REDDY VARUGU</h1>
          <h5></h5>
          <h2>Full Stack Developer</h2>
          <p>Passionate about crafting dynamic, high-performance web solutions. Focused on creating seamless user experiences, optimized systems, and impactful digital products</p>
          <a href={cv} download="Rupe_CV.pdf">
            <button>Download CV</button>
          </a>
        </div>
        <div className="imgdiv">
          {/* <img src={dotsbg} alt="Rupe" id="dotsbg"/> */}
          <div className="imgdiv2">
            <img src={rupe} alt="Rupe"/>
          </div>
          <div className="social_links">
          <div className="social_links">
            <a href="https://www.linkedin.com/in/rupendhar-reddy-varugu-390a53263/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="link" />
            </a><br />
            <a href="https://github.com/RupendharReddy" target="_blank" rel="noopener noreferrer">
              <GithubOutlined className="link" />
            </a><br />
            <a href="mailto:varugurupendharreddy@gmail.com">
              <MailOutlined className="link" />
            </a><br />
            <a href="#" target="_blank" rel="noopener noreferrer">
              <DiscordOutlined className="link" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
