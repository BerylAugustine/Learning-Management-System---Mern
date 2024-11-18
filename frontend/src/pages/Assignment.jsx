import React, { useState, useContext, useEffect } from "react";
import { Table, Tag } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "../css/Assignment.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AssignmentUpoad from "./AssignmentUpload";

const AssignmentTable = () => {
  const [posts, setPosts] = useState([]);
  const [isUpload, setisUpload] = useState(false);
  const [uploadPost, setUploadPost] = useState([]);

  // const navigate = useNavigate();
  const handleUpload = (id) => {
    // navigate("/AssignmentUpload");
    console.log(id);
    const updatedPost = posts.filter((post) => post._id === id);
    console.log(updatedPost);
    setUploadPost(updatedPost);
    console.log(uploadPost);
    setisUpload(true);
  };
  const handleDelete = async (id) => {
    console.log(id);
    if (window.confirm("Are you sure want to Delete")) {
      await axios.delete("http://localhost:8001/api/assigns/" + id);
    }
    const updatedPosts = posts.filter((post) => post._id !== id);
    setPosts(updatedPosts);
    console.log(updatedPosts);
  };

  const columns = [
    {
      title: "S.NO",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Project Name",
      dataIndex: "Aname",
      key: "Aname",
      render: (text) => <div>{text}</div>,
    },
    {
      title: "Tags",
      key: "checkVal",
      dataIndex: "checkVal",

      render: (_, { checkVal }) => (
        <>
          {checkVal.map((tag) => {
            let color =
              tag == "html"
                ? "geekblue"
                : tag == "css"
                ? "volcano"
                : tag == "javascript"
                ? "green"
                : tag == "react"
                ? "orange"
                : "gold";

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Submission Date",
      dataIndex: "subDate",
      key: "subDate",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "_id",
      render: (id) => (
        <>
          {" "}
          <button
            onClick={() => {
              handleUpload(id);
            }}
          >
            Upload
          </button>
          <button onClick={() => handleDelete(id)}>
            <DeleteOutlined />
          </button>
        </>
      ),

      // render: (_, record) => (
      //   <Space size="middle">
      //     <button
      //       style={{
      //         backgroundColor: "transparent",
      //         border: "none",
      //         color: "#0fbcf9",
      //       }}
      //       onClick={() => {
      //         handleChange(record["_id"]);
      //       }}
      //     >
      //       Upload
      //     </button>
      //     <a
      //       style={{ color: "#2C3A47", fontSize: 15 }}
      //       onClick={() => {
      //         handleDelete();
      //       }}
      //     >
      //       <DeleteOutlined />
      //     </a>
      //   </Space>
      // ),
    },
  ];

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:8001/api/assigns");
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {!isUpload ? (
        <div className="assignment-container">
          <p className="AssignmentList">Assignment List</p>
          <p className="AssignmentSub">
            Reflects your understanding and Knowledge application
          </p>

          <Table columns={columns} dataSource={posts} className="table" />
        </div>
      ) : (
        <AssignmentUpoad uploadPost={uploadPost} />
      )}
    </div>
  );
};
export default AssignmentTable;
