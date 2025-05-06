import React, { useState } from "react";
import { Form, Input, Button, Typography, notification } from "antd";
import {
  MailOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { submitContactForm } from "../store/actions/contactActions";
import "../styles/contact.css";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false); // Prevent multiple clicks

  const handleFinish = async (values) => {
    if (loading) return; // block multiple submissions
    setLoading(true);

    const result = await dispatch(submitContactForm(values));

    if (result.success) {
      api.success({
        message: "Message Sent",
        description: "Your message was sent successfully!",
        placement: "topRight",
        duration: 3,
      });
      form.resetFields();
    } else {
      api.error({
        message: "Message Failed",
        description:
          "Error sending the message. Please try again or contact me manually at varugurupendharreddy@gmail.com.",
        placement: "topRight",
        duration: 5,
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      {contextHolder}
      <h1 className="contact-title">
        <b>- </b>CONTACT ME <b>-</b>
      </h1>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h1 className="contact-info-title">Get in Touch</h1>
          <p className="contact-info-desc">
            Feel free to reach out to me via any of the following ways:
          </p>

          <div className="contact-item">
            <MailOutlined className="contact-icon" />
            <span>varugurupendharreddy@gmail.com</span>
          </div>

          <div className="contact-item">
            <EnvironmentOutlined className="contact-icon" style={{ fontSize: "30px" }} />
            <span>Willing to relocate to Hyderabad, Chennai, Bangalore</span>
          </div>

          <br />
          <h1 className="contact-info-title">Social Media Links</h1>

          <div className="contact-item">
            <LinkedinOutlined className="contact-icon" style={{ color: "#fff" }} />
            <a
              href="https://www.linkedin.com/in/rupendhar-reddy-varugu-390a53263/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#40a9ff" }}
            >
              LinkedIn
            </a>
          </div>

          <div className="contact-item">
            <GithubOutlined className="contact-icon" style={{ color: "#fff" }} />
            <a
              href="https://github.com/varugurupendharreddy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#40a9ff" }}
            >
              GitHub
            </a>
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
              <Input placeholder="Your Name" style={{ fontSize: "20px" }} className="input-field" />
            </Form.Item>

            <Form.Item
              label={<span className="form-label">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Your Email" style={{ fontSize: "20px" }} />
            </Form.Item>

            <Form.Item
              label={<span className="form-label">Message</span>}
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>

            <Form.Item className="form-button">
              <Button
                type="primary"
                htmlType="submit"
                className="submit-button"
                loading={loading}
                disabled={loading}
              >
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
