import React, { useContext, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import cloudline from "../assets/logo.png";
import "../css/LogInPage.css";
import { LoginContext } from "../context/LoginContext";
import {
  SettingOutlined,
  LockOutlined,
  UnlockOutlined,
  GithubOutlined,
  GoogleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import axios from "axios";

const LogInPage = () => {
  const { isSignUp, setIsSignUp, Login, Adminlogin } = useContext(LoginContext);

  const [val, setVal] = useState({
    username: "",
    password: "",
  });
  const [userVal, setUserVal] = useState({
    username: "",
    password: "",
    mailId: "",
    confirmpassword: "",
  });

  const onFinish = async (values) => {
    Login(values);
    Adminlogin(values);
    console.log("success:", values);
    console.log(val);
    console.log(userVal);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("button clicked");

    let { username, password, mailId, confirmpassword } = userVal;
    await axios
      .post(
        "http://localhost:8001/api/register",
        {
          username,
          password,
          mailId,
          confirmpassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        alert("Data Posted Successfully");
        console.log(res);
      })
      .catch((err) => console.log(err));
    setIsSignUp(true);
  };

  const handleInput = (e) => {
    setVal((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSignUp = (e) => {
    setUserVal((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (key) => {
    key === "/Login" ? setIsSignUp(true) : setIsSignUp(false);
  };

  const item = ["Login", "SignUp"].map((key) => ({
    key: `/${key}`,
    label: `${key}`,
  }));
  console.log(item);

  return (
    <div className="loginrow">
      <div className="logo">
        <img src={cloudline} alt="logo" className="icon" />
      </div>
      <h3 className="logintext">Learn the comfort of your own home</h3>
      <Tabs defaultActiveKey="1" items={item} onChange={onChange} />
      <div className="h1"></div>
      {isSignUp ? (
        <>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              style={{ width: 400 }}
            >
              <span className="set">
                <SettingOutlined />
                <Input
                  className="user"
                  name="username"
                  placeholder="Username: Admin or User"
                  onChange={handleInput}
                />
              </span>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              style={{ width: 400 }}
            >
              <span className="pass">
                <UnlockOutlined />
                <Input.Password
                  name="password"
                  className="user"
                  placeholder="Password: ant design"
                  onChange={handleInput}
                />
              </span>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <span className="remember">
                <Checkbox>Remember me</Checkbox>
                <a href="#" className="forget">
                  <LockOutlined className="lock" />
                  Forgot Password
                </a>
              </span>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button className="signinBtn" type="primary" htmlType="submit">
                Sign In
              </Button>
            </Form.Item>
          </Form>
          <div className="lastLine">
            <div className="quick">
              <div>Quick Sign-in : </div>
              <GithubOutlined className="quickIcon" />
              <GoogleOutlined className="quickIcon" />
            </div>
            <a href="#" className="signinLink">
              Sign Up
            </a>
          </div>
          <p className="term">
            By signing Up, I agree to{" "}
            <a href="" className="terms">
              {" "}
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="" className="policy">
              Privacy Policy
            </a>
          </p>
        </>
      ) : (
        <>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              // label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              style={{ width: 400 }}
            >
              <span className="set">
                <SettingOutlined />
                <Input
                  className="user"
                  name="username"
                  placeholder="Username: Admin or User"
                  onChange={handleSignUp}
                />
              </span>
            </Form.Item>

            <Form.Item
              // label="Username"
              name="mailId"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
              style={{ width: 400 }}
            >
              <span className="set">
                <MailOutlined />
                <Input
                  className="user"
                  name="mailId"
                  placeholder="Enter your Mail ID here"
                  onChange={handleSignUp}
                />
              </span>
            </Form.Item>

            <Form.Item
              // label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              style={{ width: 400 }}
            >
              <span className="pass">
                <UnlockOutlined />
                <Input.Password
                  className="user"
                  name="password"
                  placeholder="Password: ant design"
                  onChange={handleSignUp}
                />
              </span>
            </Form.Item>

            <Form.Item
              // label="Password"
              name="confirmpassword"
              rules={[
                {
                  required: true,
                  message: "Confirm your password!",
                },
              ]}
              style={{ width: 400 }}
            >
              <span className="pass">
                <UnlockOutlined />
                <Input.Password
                  className="user"
                  name="confirmpassword"
                  placeholder="Confirm Password: ant design"
                  onChange={handleSignUp}
                />
              </span>
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              // wrapperCol={{
              //   offset: 8,
              //   span: 16,
              // }}
            >
              <Checkbox className="term">
                I agree to the terms and Conditions
              </Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                className="signinBtn"
                type="primary"
                onClick={handleClick}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <p className="term">
            By signing Up, I agree to{" "}
            <a href="" className="terms">
              {" "}
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="" className="policy">
              Privacy Policy
            </a>
            .
          </p>
        </>
      )}
    </div>
  );
};
export default LogInPage;
