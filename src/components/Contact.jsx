import React from "react";
import { Form, Input, Button, Typography } from "antd";

const { Title } = Typography;

const Contact = () => {
  return (
    <section id="contact" style={{ padding: "80px 20px", backgroundColor: "#001e35" }}>
      <Title level={2}>Contact Me</Title>
      <Form layout="vertical" style={{ maxWidth: 600, margin: "auto" }}>
        <Form.Item label="Name" name="name">
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Your Email" />
        </Form.Item>
        <Form.Item label="Message" name="message">
          <Input.TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Send</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Send</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Send</Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Send</Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Contact;
