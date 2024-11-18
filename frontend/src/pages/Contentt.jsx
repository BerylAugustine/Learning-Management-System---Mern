import React, { useState } from "react";
import "../css/Contentt.css";
import cloudpic from "../assets/logo.png";
import axios from "axios";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { Checkbox, Col, Row } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 15,
    },
  },
};

const Content = () => {
  const [details, setDetails] = useState({
    Aname: "",
    AssignmentID: "",
    Question: "",
    checkVal: [],
    SubDate: "",
  });

  const [courses, setCourses] = useState({
    category: "",
    title: "",
    review: "",
    enrolled: "",
    lessons: "",
    time: "",
    teacher: "",
    cost: "",
    image: "",
  });

  const [contentType, setContentType] = useState(
    "Search Content Type here ....."
  );
  const navigate = useNavigate();
  const dateFormat = "YYYY/MM/DD";
  const Options = [
    { label: "Design", value: "Design", name: "category" },
    { label: "Programming", value: "Design", name: "category" },
    { label: "It & Network", value: "It & Network", name: "category" },
    { label: "Lifestyle", value: "Lifestyle", name: "category" },
    { label: "Photography", value: "Photography", name: "category" },
    { label: "Business", value: "Business", name: "category" },
    {
      label: "Digital Marketing",
      value: "Digital Marketing",
      name: "category",
    },
  ];

  const OnhandleChange = (value) => {
    setContentType(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/content-submitted");
    console.log("button clicked");
    // setDetailsarr([...detailsarr, { Aname, ID, Question, SubDate }]);

    console.log(details);
    // console.log(detailsarr);

    let { Aname, AssignmentID, Question, SubDate, checkVal } = details;
    await axios
      .post(
        "http://localhost:8001/api/assigns",
        {
          Aname,
          AssignmentID,
          Question,
          SubDate,
          checkVal,
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
  };

  const handleClickCourse = async (e) => {
    e.preventDefault();
    navigate("/content-creation-complete");
    console.log("button clicked");
    console.log(courses);

    let {
      category,
      title,
      review,
      enrolled,
      lessons,
      time,
      teacher,
      cost,
      image,
    } = courses;
    await axios
      .post(
        "http://localhost:8001/api/course",
        {
          category,
          title,
          image,
          review,
          enrolled,
          lessons,
          time,
          teacher,
          cost,
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
  };

  const handleChangeCourse = (e) => {
    const { name, value } = e.target;
    setCourses((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onChangeCheck = (checkedValues) => {
    console.log("checked = ", checkedValues);
    setDetails((prev) => {
      return { ...prev, ["checkVal"]: checkedValues };
    });
  };

  const handleDateChange = (e) => {
    setDetails((prev) => {
      return { ...prev, ["SubDate"]: e.toString() };
    });
  };

  const handleChangeFile = (e) => {
    console.log("image =", e.target.files);
    setDetails((prev) => {
      return { ...prev, ["image"]: e.target.files };
    });
  };

  const options = ["Assignment", "Courses"].map((key) => ({
    label: `${key}`,
    value: `${key}`,
  }));

  return (
    <div className="selectContent">
      <h2>Update Assignments and Courses</h2>

      <Select
        variant="outlined"
        value={contentType}
        style={{
          minWidth: 200,
          width: 600,
        }}
        onChange={OnhandleChange}
        options={options}
      ></Select>

      {contentType === "Assignment" ? (
        <>
          <Form
            {...formItemLayout}
            variant="outlined"
            style={{
              maxWidth: 900,
              marginTop: 40,
            }}
          >
            <Form.Item
              label="Assignment Name"
              name="AssignmentName"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input name="Aname" onChange={handleChange} />
            </Form.Item>

            <Form.Item
              label="Assignment ID"
              name="AssignmentID"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input
                type="number"
                style={{
                  width: "100%",
                }}
                name="AssignmentID"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              label="Assignment Question"
              name="AssignmentQuestion"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input.TextArea name="Question" onChange={handleChange} />
            </Form.Item>

            <Form.Item
              label="Softwares Used"
              name="checkVal"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Checkbox.Group onChange={onChangeCheck} name="checkVal">
                <Row>
                  <Col span={8}>
                    <Checkbox value="html">HTML</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="css">CSS</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="javascript">JavaScript</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="react">React</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="mern">MERN</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              label="Submission Date"
              name="Submission Date"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <DatePicker
                type="number"
                name="SubDate"
                onChange={handleDateChange}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 12,
                span: 16,
              }}
            >
              <Button type="primary" onClick={handleClick}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </>
      ) : contentType === "Courses" ? (
        <Form
          {...formItemLayout}
          variant="outlined"
          style={{
            maxWidth: 900,
            marginTop: 40,
          }}
        >
          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <select name="category" onChange={handleChangeCourse}>
              {Options.map((option) => (
                <option value={option.value} name={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Form.Item>

          <Form.Item
            label="Course Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input name="title" onChange={handleChangeCourse} />
          </Form.Item>

          <Form.Item
            label="User Review"
            name="review"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              type="number"
              style={{
                width: "100%",
              }}
              name="review"
              onChange={handleChangeCourse}
            />
          </Form.Item>

          <Form.Item
            label="Person Enrolled"
            name="enrolled"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              type="number"
              style={{
                width: "100%",
              }}
              name="enrolled"
              onChange={handleChangeCourse}
            />
          </Form.Item>

          <Form.Item
            label="Total Lessons"
            name="lessons"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              type="number"
              style={{
                width: "100%",
              }}
              name="lessons"
              onChange={handleChangeCourse}
            />
          </Form.Item>

          <Form.Item
            label="Session Time"
            name="time"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input name="time" onChange={handleChangeCourse} />
          </Form.Item>

          <Form.Item
            label="Teacher Name"
            name="teacher"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input name="teacher" onChange={handleChangeCourse} />
          </Form.Item>

          <Form.Item
            label="Price(Rs)"
            name="cost"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input name="cost" onChange={handleChangeCourse} />
          </Form.Item>

          <Form.Item
            label="Cover Image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Input
              type="file"
              style={{
                width: "100%",
              }}
              name="image"
              onChange={handleChangeFile}
            />
            {/* <button onClick={handleUpload}>Upload</button> */}
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 12,
              span: 16,
            }}
          >
            <Button type="primary" onClick={handleClickCourse}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <img src={cloudpic} alt="Image" className="image" />
      )}
    </div>
  );
};
export default Content;
