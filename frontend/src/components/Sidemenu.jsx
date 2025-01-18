import React, { useState, useContext } from "react";
import { Menu, theme } from "antd";
import {
  InboxOutlined,
  UserOutlined,
  PaperClipOutlined,
  TeamOutlined,
  BookOutlined,
  SettingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { LoginContext } from "../context/LoginContext";

const Sidemenu = () => {
  const { isAdmin } = useContext(LoginContext);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const icons = [
    <InboxOutlined />,
    <UserOutlined />,
    <PaperClipOutlined />,
    <BookOutlined />,
    <TeamOutlined />,
    <SettingOutlined />,
  ];
  const items = [
    "Dashboard",
    "Assignment",
    "Courses",
    "Notes",
    "Team",
    "Settings",
  ];

  if (isAdmin) {
    items.push("Content");
    icons.push(<PlusOutlined />);
    console.log(items);
  }
  console.log(isAdmin, "hai");
  const item = items.map((key, index) => ({
    key: `/${key}`,
    icon: icons[index],
    label: `${key}`,
    //  children: new Array(2).fill(null).map((_, j) => {
    //   const subKey =j + 1;
    //   return {
    //     key: subKey,
    //     label: `Team ${subKey}`,
    // };
    // }),
  }));
  // const newMtd=() =>{
  //   var newItems = []
  // for (let i = 0; i < items.length; i++) {
  //   var obj = {
  //     key: `/${items[i]}`,
  //     icon:icons[i],
  //     label:`${items[i]}`
  //   }
  //   if(items[i]=="Team"){
  //     let j = 0;
  //      j += 1;
  //     var Subobj={
  //     key: j,
  //     label: `Team ${j}}`,
  //     }
  //    obj.children=Subobj
  //   }
  //   newItems.push(obj)
  //   console.log(obj)
  // }
  // console.log(newItems)
  // return newItems
  // }

  return (
    <div className="sidemenu">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          style={{
            padding: 15,
            height: 1050,
            width: 270,
            fontSize: 19,
            fontFamily: '"Oswald", sans-serif',
            letterSpacing: 1,
            fontWeight: 400,
            paddingTop: 40,
          }}
          items={item}
          theme="dark"
          onClick={(item) => {
            navigate(item.key);
            console.log(item.key);
          }}
        ></Menu>
      </Sider>
    </div>
  );
};

export default Sidemenu;
