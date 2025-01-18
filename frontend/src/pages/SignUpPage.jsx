import React, { useContext} from 'react';
import { Button, Checkbox, Form, Input, Space,Menu,theme} from 'antd';
import cloudline from '../assets/logo.png'
import '../css/LogInPage.css'
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import {SettingOutlined, LockOutlined, UnlockOutlined, GithubOutlined, GoogleOutlined,MailOutlined } from '@ant-design/icons';



const SignUpPage = () => {

const navigate = useNavigate();
const {Login} = useContext(LoginContext);
const onFinish = (values) => {
    console.log('Success:', values);
    Login(values)
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

    return (
    <div className='loginrow'>
        
        <div className="logo">
        <img src={cloudline} alt="logo" className='icon'/>
        </div>
        <h3 className='logintext'>Learn the comfort of your own home</h3>

        <div className="h1"></div>
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
          message: 'Please input your username!',
        },
      ]}
      style={{width:400}}
    ><span className="set"><SettingOutlined/>
      <Input className= "user" placeholder="Username: Admin or User"/></span>
      </Form.Item>

    <Form.Item
      // label="Username"
      name="Email ID"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
      style={{width:400}}
    ><span className="set"><MailOutlined />
      <Input className= "user" placeholder="Enter your Mail ID here"/></span>
    </Form.Item>

    <Form.Item
      // label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      style={{width:400}}
    ><span className="pass"><UnlockOutlined />
      <Input.Password className='user' placeholder="Password: ant design"/></span>
    </Form.Item>

    <Form.Item
      // label="Password"
      name="confirmpassword"
      rules={[
        {
          required: true,
          message: 'Confirm your password!',
        },
      ]}
      style={{width:400}}
    ><span className="pass"><UnlockOutlined />
      <Input.Password className='user' placeholder="Confirm Password: ant design"/></span>
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      // wrapperCol={{
      //   offset: 8,
      //   span: 16,
      // }}
    >
      <Checkbox className='term'>I agree to the terms and Conditions</Checkbox>
      </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button className="signinBtn" type='primary' htmlType="submit" >
        Sign Up
      </Button>
    </Form.Item>
  </Form>
  
  <p className='term'>By signing Up, I agree to <a href="" className="terms"> Terms of Use</a> and <a href="" className="policy">Privacy Policy</a>.</p>
  </div>
  // </div>
)};
export default SignUpPage;