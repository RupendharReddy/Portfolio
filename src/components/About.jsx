import React from "react";
import { Typography } from "antd";
import "../styles/about.css";
import about from "../assets/about.png";
import aboutBG from "../assets/aboutBG.png";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  return (
    <section id="about">
      <Text className="outlined-text">ABOUT</Text>
      <div className="about-container">
        <div className="about-image-div">
          <img src={aboutBG} alt="about" className="about-image-bg"/>
          <img src={about} alt="about" className="about-image"/>
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hello, my name is Rupendhar Reddy Varugu and i am a full-stack developer
          </p>
          <p className="about-paragraph">
            Innovative Full Stack Developer passionate about crafting dynamic, high-performance web solutions.
            Focused on creating seamless user experiences, optimized systems, and impactful digital products.
          </p>
          <br/>
          <h1>Technologies and Skills</h1>
          <div>
            <tag>React.js</tag> <tag>Node.js</tag> <tag>Express.js</tag> <tag>MySql</tag><tag>MongoDB</tag><br/>
            <tag>HTML</tag> <tag>CSS</tag> <tag>JavaScript</tag> <tag>Antd</tag><br/>
            <tag>Python</tag> <tag>C</tag> <tag>Java</tag> <tag>Go lang</tag> <tag>Git</tag> <tag>AI tools </tag>
          </div>
          <div className="edu">
            <h1>Education</h1>
            <p>Secondary Schooling</p>
            <p className="about-paragraph">Sri Chaitanya School - 9.5 CGPA (2018-2019)</p>
            <p>Higher Secondary Schooling</p>
            <p className="about-paragraph">Sri Chaitanya junior college - 719 (2019-2021)</p>
            <p>Bachelor of Engineering in Computer Science</p>
            <p className="about-paragraph">R.M.D Engineering College - 7.72 CGPA up to 7th sem (2021-2025)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
