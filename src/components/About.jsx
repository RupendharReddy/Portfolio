import React from "react";
import { Typography } from "antd";
import "../styles/about.css";
import about from "../assets/about.png";
import aboutBG from "../assets/aboutBG.png";
import BarChartComponent from "./charts/bar";
import RoseChart from "./charts/rosechart";
import PolarAreaChart from "./charts/polar";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const skills = [
    "React.js", "Node.js", "Express.js", "MySql", "MongoDB","MVC - Architecture",
    "HTML", "CSS", "JavaScript", "Antd",
    "Python", "C", "Java", "Go lang", "Git", "AI tools"
  ];

  return (
    <section id="about">
      <Text className="outlined-text">ABOUT</Text>
      <div className="about-container">
        <div className="about-image-div">
          <img src={aboutBG} alt="about" className="about-image-bg" />
          <img src={about} alt="about" className="about-image" />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p id="info">
            Hello, my name is Rupendhar Reddy Varugu and i am a full-stack developer
          </p>
          <p className="about-paragraph">
            Innovative Full Stack Developer passionate about crafting dynamic, high-performance web solutions.
            Focused on creating seamless user experiences, optimized systems, and impactful digital products.
          </p>
          <br />
          <h1>Technologies and Skills</h1>
          <div className="tags-container">
            {skills.map((skill, index) => (
              <tag key={index} id="tag">{skill}</tag>
            ))}
          </div>
          <div className="edu">
            <h1>Education</h1>
            <p>Secondary Schooling</p>
            <p className="about-paragraph">Sri Chaitanya School - 9.5 CGPA (2018-2019)</p>
            <p>Higher Secondary Schooling</p>
            <p className="about-paragraph">Sri Chaitanya junior college - 719 (2019-2021)</p>
            <p>Bachelor of Engineering in Computer Science</p>
            <p className="about-paragraph">R.M.D Engineering College - 7.78 CGPA (2021-2025)</p>
          </div>
        </div>
      </div>
      <div id="charts-div">
        <div className="chart">
          
          <BarChartComponent/>
        </div>
        <div className="chart">
          <RoseChart/>
        </div>
        {/* <>
          <PolarAreaChart/>
        </> */}
      </div>
    </section>
  );
};

export default About;
