import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { Link as ScrollLink } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { key: "hero", label: "HOME" },
    { key: "about", label: "ABOUT_ME" },
    { key: "projects", label: "PROJECTS" },
    { key: "certificates", label: "CERTIFICATES" },
    { key: "services", label: "SERVICES" },
    { key: "contact", label: "CONTACT" },
  ];

  const renderLink = (key, label) => (
    <ScrollLink
      key={key}
      to={key}
      activeClass="active-link"
      spy={true}
      smooth={true}
      offset={-64}
      duration={500}
      onClick={() => setVisible(false)}
    >
      {label}
    </ScrollLink>
  );

  return (
    <div className="navbar-container">
      <div className="logo">MyPortfolio</div>

      <div className="desktop-menu">
        {menuItems.map(({ key, label }) => (
          <div key={key} className="nav-link">
            {renderLink(key, label)}
          </div>
        ))}
      </div>

      <div className="mobile-menu-icon">
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: 24, color: "white" }} />}
          onClick={() => setVisible(true)}
        />
      </div>

      <Drawer
        placement="top"
        onClose={() => setVisible(false)}
        open={visible}
        height="45vh"
        zIndex={100}
        className="custom-drawer"
      >
        <div className="drawer-links">
          {menuItems.map(({ key, label }) => (
            <div key={key} className="drawer-link">
              {renderLink(key, label)}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
