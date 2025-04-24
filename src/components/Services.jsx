import { Typography, Row, Col, Card } from "antd";
import {
  CodeOutlined,
  DeploymentUnitOutlined,
  MobileOutlined,
  CloudServerOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const serviceData = [
  {
    icon: <CodeOutlined style={{ fontSize: "36px", color: "#1890ff" }} />,
    title: "Web Development",
    description: "Modern websites with responsive design using React, Node.js, and more.",
  },
  {
    icon: <MobileOutlined style={{ fontSize: "36px", color: "#52c41a" }} />,
    title: "Mobile Design",
    description: "Mobile-first designs that look stunning on all screen sizes.",
  },
  {
    icon: <DeploymentUnitOutlined style={{ fontSize: "36px", color: "#eb2f96" }} />,
    title: "UI/UX Design",
    description: "Clean and intuitive user interfaces tailored to your audience.",
  },
  {
    icon: <CloudServerOutlined style={{ fontSize: "36px", color: "#faad14" }} />,
    title: "Backend & APIs",
    description: "Robust backend services with Express.js, MongoDB, and authentication.",
  },
];

const Services = () => {
  return (
    <section id="services" style={{ padding: "100px 20px", backgroundColor: "#001529" }}>
      <div style={{ textAlign: "center", marginBottom: "60px", color: "#fff" }}>
        <Title style={{ color: "#fff" }}>Services</Title>
        <Paragraph style={{ color: "#d9d9d9" }}>Things I can help you with...</Paragraph>
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
                backgroundColor: "#ffffff",
                borderRadius: 12,
              }}
              hoverable
            >
              <div style={{ marginBottom: 16 }}>{service.icon}</div>
              <Title level={4}>{service.title}</Title>
              <Paragraph>{service.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Services;
