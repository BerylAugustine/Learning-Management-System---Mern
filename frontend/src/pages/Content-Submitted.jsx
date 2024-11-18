import React from "react";
import { Button, Result } from "antd";
import { hover } from "@testing-library/user-event/dist/hover";
import { useNavigate } from "react-router-dom";

const ContentCreationComplete = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="success"
      title="Assignment Successfully Uploaded "
      // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        // <Button
        //   type="primary"
        //   key="console"
        //   style={{
        //     fontSize: 20,
        //     padding: 20,
        //     backgroundColor: "white",
        //     color: "#888",
        //     marginRight: 10,
        //     width: 200,
        //   }}
        //   onClick={() => {
        //     navigate("/AssignmentUpload");
        //     console.log("button clicked");
        //   }}
        // >
        //   {/* UpLoad Again */}
        // </Button>,

        <Button
          type="primary"
          key="console"
          style={{ fontSize: 20, padding: 20, marginLeft: 10, width: 200 }}
          onClick={() => {
            navigate("/Content");
            console.log("button clicked");
          }}
        >
          Go Home
        </Button>,
      ]}
      style={{ marginLeft: 250, marginBottom: 500 }}
    />
  );
};
export default ContentCreationComplete;
