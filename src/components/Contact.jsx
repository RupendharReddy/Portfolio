import React from "react";
import { Form, Input, Button, Typography, message } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { submitContactForm } from "../store/actions/contactActions";
import "../styles/contact.css";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleFinish = async (values) => {
    try {
      await dispatch(submitContactForm(values));
      message.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Something went wrong to send the message. Please try again.", error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Title level={2} className="contact-title">Contact Me</Title>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          <Title level={2} className="contact-info-title">Get in Touch</Title>
          <Paragraph className="contact-info-desc">
            Feel free to reach out to me via any of the following ways:
          </Paragraph>

          <div className="contact-item">
            <EnvironmentOutlined className="contact-icon" />
            <span>Bangalore, India</span>
          </div>

          <div className="contact-item">
            <MailOutlined className="contact-icon" />
            <span>your-email@example.com</span>
          </div>

          <div className="contact-item">
            <PhoneOutlined className="contact-icon" />
            <span>+91 98765 43210</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <Form layout="vertical" form={form} onFinish={handleFinish}>
            <Form.Item
              label={<span className="form-label">Name</span>}
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>

            <Form.Item
              label={<span className="form-label">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>

            <Form.Item
              label={<span className="form-label">Message</span>}
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>

            <Form.Item className="form-button">
              <Button type="primary" htmlType="submit" className="submit-button">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
