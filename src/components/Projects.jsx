import React from "react";
import { Card, Col, Row, Typography } from "antd";
import "../styles/projects.css";
import Meta from "antd/es/card/Meta";

const { Title } = Typography;

const Projects = () => {
  return (
    <section id="projects" style={{ padding: "80px 20px" }}>
      <h1 className="outlined-text-project">PROJECTS</h1>
      <h1 className="title"><b>- </b>MY PROJECTS <b>-</b></h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, impedit voluptate perspiciatis magni aliquam saepe tempora numquam nisi ex commodi ducimus alias asperiores repellendus ea. Fugit officiis blanditiis veniam consectetur.</p>
      <Card
      className="project-card"
      hoverable
      cover={
        <iframe src="https://drive.google.com/file/d/1YZjyf6AaR6uxykm8T6-LweXOYy1W84tc/preview"  allowFullScreen popouter="false"></iframe>

      }
    >
      <Meta className="card-meta" title="Europe Street beat" description="www.instagram.com" />
    </Card>
    </section>
  );
};

export default Projects;
