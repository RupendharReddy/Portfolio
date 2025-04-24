import React, { useState } from "react";
import { Typography, Card, Flex } from "antd";
import "../styles/projects.css";

const { Title } = Typography;

const Projects = () => {
  const [projects] = useState([
    {
      title: "Student Career Hub",
      description:
        "A comprehensive platform for students to manage their career development and for companies to recruit talent.",
      features: [
        "User authentication using JWT for authentication and data privacy",
        "Dynamic dashboards with charts and graphs for student performance",
        "Job filtering based on eligibility and preferences",
        "Test integration for company evaluations",
        "Certificate upload functionality for academic and professional certificates",
        "Staff access control for monitoring student activities",
        "Company features for setting eligibility criteria and managing recruitment",
      ],
      technologies: [
        "React.js",
        "Ant Design",
        "CSS",
        "Chart.js",
      ],
      github: "https://github.com/RupendharReddy/Placement-System",
      videoUrl:
        "https://drive.google.com/file/d/1YZjyf6AaR6uxykm8T6-LweXOYy1W84tc/preview",
    },
    {
      title: "TODO List Web App",
      description:
        "A feature-rich task management application to help users organize their daily activities.",
      features: [
        "User authentication with JWT for secure access",
        "Task management: add, mark as finished, delete tasks",
        "Completed tasks view on a separate page",
        "User profile with details and task progress tracking",
      ],
      technologies: ["React.js", "CSS", "Node.js", "Express.js", "SQL", "JWT"],
      github: "",
      videoUrl:
        "https://drive.google.com/file/d/1i2iweUTUc91_VUarrFlRym8Pp7ZlUmky/preview",
    },
    {
      title: "Smart Attendance System",
      description:
        "A facial recognition-based attendance platform ensuring secure, contactless, and automated attendance tracking.(Developed as a group project)",
      features: [
        "Real-time face detection and recognition using live webcam input",
        "Automatic attendance marking with date and time logging",
        "Admin dashboard for managing student records and viewing attendance reports",
        "Face data enrollment system with preprocessing for accuracy",
        "Local JSON file storage or integration-ready with SQLite",
      ],
      technologies: [
        "Python",
        "OpenCV",
        "Flask",
        "SQLite",
        "HTML",
        "CSS",
        "Javascript",
      ],
      github: "https://github.com/RupendharReddy/todo",
      videoUrl:"https://drive.google.com/file/d/1jLpkZ6ZvHojGblvxrgWRmmUrHDhKC1JI/preview",
    },
  ]);

  return (
    <section id="projects" style={{ padding: "80px 20px" }}>
      <h1 className="outlined-text-project">PROJECTS</h1>
      <h1 className="title">
        <b>- </b>MY PROJECTS <b>-</b>
      </h1>
      <Flex gap="middle" align="start" vertical>
        {projects.map((project, idx) => (
          <Card key={idx} id="project-card" bordered={false}>
            <div className="project-content">
              <div className="project-left">
                <Title level={3} style={{ color: "white",textTransform:"uppercase" }}><b style={{color:"red"}}>- </b>{project.title} <b style={{color:"red"}}>-</b></Title>
                <p>{project.description}</p>
                <ul className="feature-list">
                  {project.features.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="tech-used">
                  <span>Technologies Used:</span>
                  <div className="tech-tags">
                    {project.technologies.map((tech) => (
                      <span className="tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="buttons">
                  <button className="github-btn" onClick={() => window.open(project.github, "_blank")}>GitHub</button>
                </div>
              </div>
              {project.videoUrl && (
                <div className="project-right">
                  <div className="video-wrapper">
                    <div className="video-hover-container">
                      <iframe
                        className="video-iframe"
                        src={project.videoUrl}
                        title={`${project.title} Demo`}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </Flex>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p style={{ color: "#dcdcdc", fontSize: "16px", marginBottom: "10px" }}>
          Interested in exploring more of my work? Check out all my projects here:
        </p>
        <button
          className="demo-btn"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => window.open("https://github.com/RupendharReddy", "_blank")}
        >
          View All Projects
        </button>
      </div>

    </section>
  );
};

export default Projects;
