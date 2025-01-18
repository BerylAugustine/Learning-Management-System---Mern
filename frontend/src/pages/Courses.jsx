import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  EditOutlined,
  BugOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import DigitalImg from "../assets/DigitalMarketing.jpeg";
import ElenorImg from "../assets/Elenor.jpg";
import UIimg from "../assets/UIUX.jpg";
import Scientistimg from "../assets/dataScience.png";
import DeveloperImg from "../assets/Webdeveloper.jpg";
import PythonImg from "../assets/pythonimg.jpg";
import FlutterImg from "../assets/flutter.jpg";
import JavaImg from "../assets/java.jpg";
import AIimg from "../assets/artificial-inteligience-jpg.webp";
import FirewallImg from "../assets/firewall.jpg";
import datacenterImg from "../assets/datacenter.jpg";
import hypnoImg from "../assets/hypno.jpg";
import PhotoImg from "../assets/photography.jpg";
import BusinessImg from "../assets/business.jpg";
import FullStackImg from "../assets/fullStack.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Carousel } from "antd";

import { Rate, Space, Menu } from "antd";
import "../css/Courses.css";
const items = [
  "All Catagories",
  "Design",
  "Programming",
  "IT & Network",
  "Lifestyle",
  "Photography",
  "Business",
  "Digital Marketing",
];
const item = items.map((key) => ({
  key: `/${key}`,
  label: `${key}`,
}));

// const contentStyle = {
//   margin: 0,
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

// const allcourses = [
//   {
//     category: "design",
//     title: "UI/UX Design Course",
//     images: UIimg,
//     review: 65,
//     enrolled: 70,
//     lessons: 35,
//     time: "2hrs 15mins",
//     teacher: "Darrel Daniel",
//     cost: "₹30000/-",
//   },

//   {
//     category: "programming",
//     title: "Full Stack Development",
//     images: FullStackImg,
//     review: 55,
//     enrolled: 85,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Rogland",
//     cost: "₹20000/-",
//   },
//   {
//     category: "programming",
//     title: "Python Basics to Advanced",
//     images: PythonImg,
//     review: 55,
//     enrolled: 85,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Rogland",
//     cost: "₹20000/-",
//   },
//   {
//     category: "programming",
//     title: "Flutter",
//     images: FlutterImg,
//     review: 55,
//     enrolled: 85,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Fiona Giselle",
//     cost: "₹20000/-",
//   },
//   {
//     category: "programming",
//     title: "Web Development",
//     images: DeveloperImg,
//     review: 65,
//     enrolled: 45,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Sharon Reshma",
//     cost: "₹30000/-",
//   },
//   {
//     category: "programming",
//     title: "Java",
//     images: JavaImg,
//     review: 55,
//     enrolled: 85,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "John Nathaniel",
//     cost: "₹20000/-",
//   },
//   {
//     category: "network",
//     title: "Artificial Intelligence",
//     images: AIimg,
//     review: 55,
//     enrolled: 85,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Areline Raveena",
//     cost: "₹20000/-",
//   },

//   {
//     category: "network",
//     title: "Super Firewall Master Program",
//     images: FirewallImg,
//     review: 55,
//     enrolled: 85,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Areline Raveena",
//     cost: "₹20000/-",
//   },
//   {
//     category: "network",
//     title: "CCIE Data Center",
//     images: datacenterImg,
//     review: 55,
//     enrolled: 85,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Areline Raveena",
//     cost: "₹20000/-",
//   },
//   {
//     category: "network",
//     title: "Data Science and Machine learning",
//     images: Scientistimg,
//     review: 45,
//     enrolled: 45,
//     lessons: 30,
//     time: "2hrs 00mins",
//     teacher: "Feronica Emmlyn",
//     cost: "₹40000/-",
//   },

//   {
//     category: "lifestyle",
//     title: "Certificate in Hypnotherapy",
//     images: hypnoImg,
//     review: 65,
//     enrolled: 45,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Dan Jones",
//     cost: "₹30000/-",
//   },

//   {
//     category: "photography",
//     title: "Photography Masterclass",
//     images: PhotoImg,
//     review: 65,
//     enrolled: 45,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Shiksha",
//     cost: "₹30000/-",
//   },

//   {
//     category: "business",
//     title: "A Complete business Plan Course",
//     images: BusinessImg,
//     review: 65,
//     enrolled: 45,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Ben Tennison",
//     cost: "₹30000/-",
//   },
//   {
//     category: "marketing",
//     title: "Advaned Digital Market Strategies",
//     images: DigitalImg,
//     review: 55,
//     enrolled: 85,
//     lessons: 40,
//     time: "3hrs 45mins",
//     teacher: "Elenor Pena",
//     cost: "₹20000/-",
//   },
// ];

const Courses = () => {
  const [allcourses, setAllcourses] = useState([]);

  const handleCourses = async (e) => {
    const response = await axios.get("http://localhost:8001/api/course");
    let x = "all";

    if (e.key.slice(1, 4).toLowerCase() === x) {
      setAllcourses(response.data);
      console.log(response.data);
    } else {
      console.log(e.key);
      const category = e.key.slice(1, 20).toLowerCase();
      console.log(category);
      const updatedPosts = response.data.filter(
        (course) => course.category === category
      );
      console.log(
        response.data.filter((course) => course.category === category)
      );
      setAllcourses(updatedPosts);
      console.log(updatedPosts);
    }
  };

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:8001/api/course");
    setAllcourses(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="courses">
      <h1 className="head">Our Courses Feature</h1>
      <p className="subText">20k Students are enrolled</p>

      <Menu
        mode="horizontal"
        items={item}
        onClick={(e) => handleCourses(e)}
        className="navBar"
      />
      <div className="container">
        <Slider {...settings}>
          {allcourses.length > 0 ? (
            allcourses.map((course) => (
              <Card
                className="courseCard"
                cover={
                  <img
                    alt="example"
                    src={course.images}
                    style={{ height: 200, margin: 0, padding: 0 }}
                  />
                }
              >
                <Space>
                  <Rate allowHalf defaultValue={4.5} />
                  <p className="review">{course.review} reviews</p>
                </Space>
                <div className="title" style={{ height: 50 }}>
                  {" "}
                  {course.title}
                </div>
                <Space className="hint">
                  <p className="enroll">
                    <span className="enrollIcon">
                      <BugOutlined />
                    </span>
                    {course.enrolled}Persons Enrolled
                  </p>
                  <p className="enroll">
                    <span className="enrollIcon">
                      <EditOutlined />
                    </span>
                    {course.lessons} lessons
                  </p>
                  <p className="enroll">
                    <span className="enrollIcon">
                      <ClockCircleOutlined />
                    </span>
                    {course.time}
                  </p>
                </Space>
                <div className="details">
                  <div className="staff">
                    <img src={ElenorImg} alt="" className="img" />
                    <p className="name">{course.teacher}</p>
                  </div>
                  <p className="price">{course.cost}</p>
                </div>
                <button className="enrollButton">Enroll Now</button>
              </Card>
            ))
          ) : (
            <h1>No Courses Available</h1>
          )}
        </Slider>
      </div>
    </div>
  );
};
export default Courses;
