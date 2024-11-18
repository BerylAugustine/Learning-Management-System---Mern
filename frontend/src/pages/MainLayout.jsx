import React, { useContext } from "react";
import "../css/MainLayout.css";
import { Space } from "antd";
import Header from "../components/Header";
import Sidemenu from "../components/Sidemenu";
import Footer from "../components/Footer";
import Appcontent from "../components/Appcontent";
import { LoginContext } from "../context/LoginContext";
import Dashboard from "./Dashboard";
import LogInPage from "./LogInPage";

function MainLayout() {
  const { isLoggedin } = useContext(LoginContext);
  return isLoggedin ? (
    <LogInPage />
  ) : (
    <div className="MainLayout">
      <Header />
      <Space>
        <Sidemenu className="sideContent"></Sidemenu>
        <Appcontent className="pageContent">
          <Dashboard />
        </Appcontent>
      </Space>
      <Footer />
    </div>
  );
}

export default MainLayout;
