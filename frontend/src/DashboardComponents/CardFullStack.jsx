import React from 'react'
import './CardFullStack.css'
import MernImg from '../assets/mern.webp'
import HtmlImg from '../assets/html&css.png'
import PythonImg from '../assets/python.jpg'
import DataImg from '../assets/React.png'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Card, Row, Space} from 'antd'
import {CalendarOutlined,SearchOutlined,AccountBookOutlined,HolderOutlined,CustomerServiceOutlined,PushpinOutlined,LaptopOutlined} from '@ant-design/icons';
import BarChart from './BarChart'
import BarProgressChart from './BarChart'

 const CardData = [
  {
    class: "fullstack",
    title: 'Full Stack Development',
    text: "20 lessons",
    color: {
      backGround: "linear-gradient (180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6ff5"
    },
    barValue:25,
    Png: MernImg,
  },

  {
    class:'htmlCss',
    title: 'HTML & CSS',
    text: "60 lessons",
    color: {
      backGround: "linear-gradient (180deg, #ff919D 0%, #FC92D 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6ff5",
    },
    barValue:75,
    Png: HtmlImg,
  },

  {
    class:"python",
    title: 'Python',
    text: "75 lessons",
    color: {
      backGround: "linear-gradient (180deg, #ff919D 0%, #FC92D 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6ff5",
    },
    barValue:50,
    Png: PythonImg,
  },
  {
    class:'dataScience',
    title: 'Data Science',
    text: "40 lessons",
    color: {
      backGround: "linear-gradient (180deg, #ff919D 0%, #FC92D 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6ff5",
    },
    barValue:60,
    Png: DataImg,
  }
]

const smallCardData = [
  {
    id:"topic1",
    icon: <AccountBookOutlined />,
    topic:"Reading-Beginner Topic1",
    time:"8.00 AM - 10.00 AM",
  },
  {
    id:"topic2",
    icon: <PushpinOutlined />,
    topic:"Reading-Beginner Topic2",
    time:"01.00 PM - 02.00 PM",
  },
  {
    id:"topic3",
    icon: <CustomerServiceOutlined />,
    topic:"Listening-Intermediate Topic1",
    time:"3.00 PM - 4.00 PM",
  },
  {
    id:"topic4",
    icon: <LaptopOutlined />,
    topic:"Reading-Advanced Topic1",
    time:"8.00 AM - 10.00 AM",
  }
]
const CardFullStack = () => {

    var time = new Date()
   var curDate = time.getDate()
   var curMonth =  time.toLocaleString('default', { month: 'long' })
   var curYear = time.getFullYear()
   
  return (
 <Row className='row'>
<div className="column1" >
  <h1 className='greet'>Hello BERYL Welcome Back!</h1>
  <div className="course">
<Space>
<h1 className="myCourses">My Courses</h1>
<button className="viewAll">View All</button>
</Space>
<span className="search"><SearchOutlined style={{padding:5, color:'#888',fontSize:22}}/><input type="text" className='searchBox' placeholder='Search..' /></span>
</div>

     <div className='Container1' > 
     <Space size={[8, 16]} wrap>
     { CardData.map((d)=>(
      <Card className='card'id={d.class}>
 <p className="cardTitle" >{d.title}</p>
<p className="cardText">{d.text}</p>
 <Space direction = 'horizontal'className='circular'>
 <div style={{ width: 50, height: 50 }}>
<CircularProgressbar value={d.barValue} text={`${d.barValue}%`} />;
</div>
<img src= {d.Png} alt="Image" className='MernImg' />

</Space>
 </Card> ))}</Space>

  </div>
<div className="plan">
<div className="planning">
 <Space>
<h1 className="plan">Planning</h1>
<button className="viewAll">View All</button>
</Space>
<p className="calender"><CalendarOutlined className='calenderIcon' />{curDate}/{curMonth}/{curYear}</p>
</div>
</div>

<div className="planDiv">
<Space size={[8, 16]} wrap>
{ smallCardData.map((d)=>(
  <div className="beginnerCard" id={d.id}>
<span className='bookIcon'>{d.icon}</span>
<div className="detail">
<div className="topic">{d.topic}</div>
<div className="time">{d.time}</div>
</div>
<span className='holderIcon'><HolderOutlined /></span>
</div>
))}</Space>
  </div>
</div>

<div class="vl"></div>


<div className="column2">
  <div className="statistics">
    <div className="statTitle">Statistics</div>
    <Space>
    <div className="aboutCourse">
      <div className="courseTitle">Courses Completed</div>
      <div className="count">
      <div class="v2"></div> 
      <div className="number">02</div>
      </div>
    </div>

    <div className="aboutCourse">
      <div className="courseTitle">Courses Completed</div>
      <div className="count">
      <div class="v2"></div> 
      <div className="number">02</div>
      </div>
    </div>
    </Space>
    <br />
<Space>
    <div className="aboutCourse">
      <div className="courseTitle">Courses Completed</div>
      <div className="count">
      <div class="v2"></div> 
      <div className="number">02</div>
      </div>
    </div>

    <div className="aboutCourse">
      <div className="courseTitle">Courses Completed</div>
      <div className="count">
      <div class="v2"></div> 
      <div className="number">02</div>
      </div>
    </div>
    </Space>
  </div>
  <div className="Activity">
    <div className="actDetail">
    <div className="actTitle">Activity</div>
    <div className="option">
      <a href="" className="day">Day</a>
      <a href="" className="week active">Week</a>
      <a href="" className="month">Month</a>
    </div>
</div>

<BarProgressChart/>

    </div>
</div>
 </Row> 


  )
}

export default CardFullStack




