import React from "react";
import { Form, Input, Button, Typography, message } from "antd";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Form values:", values);
    message.success("Message sent successfully!");
    form.resetFields();
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        backgroundColor: "#001e35",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Title level={2} style={{ color: "#fff", marginBottom: 16 }}>
        Contact Me
      </Title>
      <Paragraph style={{ color: "#d9d9d9", marginBottom: 40 }}>
        Have a question, project idea, or just want to say hi? Let’s talk!
      </Paragraph>

      <Form
        layout="vertical"
        form={form}
        onFinish={handleFinish}
        style={{ maxWidth: 600, margin: "auto", backgroundColor: "#ffffff10", padding: 30, borderRadius: 12 }}
      >
        <Form.Item
          label={<span style={{ color: "#fff" }}>Name</span>}
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Your Name" />
        </Form.Item>

        <Form.Item
          label={<span style={{ color: "#fff" }}>Email</span>}
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Your Email" />
        </Form.Item>

        <Form.Item
          label={<span style={{ color: "#fff" }}>Message</span>}
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input.TextArea rows={4} placeholder="Your Message" />
        </Form.Item>

        <Form.Item style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default Contact;
