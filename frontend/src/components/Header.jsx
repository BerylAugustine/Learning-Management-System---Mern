import React, { useContext } from "react";
import "../css/Header.css";
import { UserOutlined, DockerOutlined } from "@ant-design/icons";
import cloudline from "../assets/logo.png";
import { Space } from "antd";
import { LoginContext } from "../context/LoginContext";

const Header = () => {
  const { Logout } = useContext(LoginContext);
  const handleLogout = () => {
    Logout();
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={cloudline} alt="logo" className="icon" />
      </div>

      <Space>
        <p className="text">
          <span className="icon">{/* <DockerOutlined /> */}</span>
          {/* Hello Admin */}
        </p>
        <button onClick={handleLogout}>Logout</button>
        <div className="usericon">
          <UserOutlined />
        </div>
      </Space>
    </div>
  );
};

export default Header;
