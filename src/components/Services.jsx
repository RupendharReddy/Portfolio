import { Typography, Row, Col, Card } from "antd";
import {
  CodeOutlined,
  DeploymentUnitOutlined,
  MobileOutlined,
  CloudServerOutlined,
  RiseOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../styles/services.css";

const { Title, Paragraph } = Typography;

const serviceData = [
  {
    icon: <CodeOutlined style={{ fontSize: "36px", color: "yellow" }} />,
    title: "Full-Stack Development",
    description: "End-to-end solutions, from front-end to back-end, including APIs and databases.",
  },
  {
    icon: <MobileOutlined style={{ fontSize: "36px", color: "#eb2f96" }} />,
    title: "Responsive Design",
    description: "Beautiful, mobile-first designs that provide seamless experiences across all devices.",
  },
  {
    icon: <RiseOutlined style={{ fontSize: "36px", color: "lightgreen" }} />,
    title: "Commercial Websites",
    description: "Scale up your business with business websites that are clean, fast, and easy to navigate.",
  },
  {
    icon: <UserOutlined style={{ fontSize: "36px", color: "#1890ff" }} />,
    title: "Personal Websites",
    description: "Personal websites that reflect your unique style and personality.",
  },
  {
    icon: <CloudServerOutlined style={{ fontSize: "36px", color: "#faad14" }} />,
    title: "Backend & APIs",
    description: "Robust backend services with Express.js, MongoDB, and powerful APIs.",
  },
  {
    icon: <DeploymentUnitOutlined style={{ fontSize: "36px", color: "brown" }} />,
    title: "Feature Additions",
    description: "Enhance your existing website with new features and improved functionality.",
  },
];


const Services = () => {
  return (
    <section id="services" style={{ padding: "80px 20px", backgroundColor: "#001529" ,marginTop:"0px"}}>
      <div style={{ textAlign: "center", marginBottom: "60px", color: "#fff" }}>
        <Title style={{ color: "#fff"}} id="services-title" >SERVICES OFFERED</Title>
        <h3 style={{ color: "#d9d9d9" }} id="service-info">Things I can help you with...</h3>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {serviceData.map((service, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              bordered={false}
              style={{
                width: 260,
                textAlign: "center",
                backgroundColor: "#001e35",
                borderRadius: 12,
              }}
              hoverable
            >
              <div style={{ marginBottom: 16 }}>{service.icon}</div>
              <Title level={4} style={{ color: "#fff" }}>{service.title}</Title>
              <Paragraph style={{ color: "#d9d9d9" }}>{service.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
