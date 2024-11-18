import { Collapse, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import NotesCollapsible from "./NotesCollapsible";
import "./Notes.css";
import { useEffect, useState } from "react";

const CourseTab = () => {
  const [courseData, setCourseData] = useState([]);

  const getDataFromServer = async () => {
    let response = await fetch(
      `http://Localhost:8001/api/notes/read?user_id=${localStorage.getItem(
        "userName"
      )}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json" },
      }
    );
    let dataFromServer = await response.json();
    console.log(dataFromServer);

    let groupedNotes = dataFromServer.reduce((acc, note) => {
      const courseId = note.course_id;

      if (!acc[courseId]) {
        acc[courseId] = {
          course_id: courseId,
          notes: [],
        };
      }
      acc[courseId].notes.push(note);
      return acc;
    }, {});
    console.log("DataFromServer", dataFromServer);
    console.log("Grouped Notes", groupedNotes);
    const result = Object.values(groupedNotes);
    setCourseData(result);
  };

  const data = [
    {
      course_id: "Full Stack ",
      notes: [
        {
          notes_id: "notes001",
          notes_title: "HTML & CSS Introduction",
          session_id: "session 01",
          course_id: "Full Stack",
          notes_content: "CSS is used to style your HTML",
        },
        {
          notes_id: "notes002",
          notes_title: "Javascript Introduction",
          session_id: "session 02",
          course_id: "Full Stack",
          notes_content: "Javascript is used to make your website interactive",
        },
      ],
    },
    {
      course_id: "DataEngineering",
      notes: [
        {
          notes_id: "notes001",
          notes_title: "Data science introduction",
          session_id: "session 01",
          course_id: "DataEngineering",
          notes_content: "content of notes",
        },
        {
          notes_id: "notes2",
          notes_title: "Introduction to Linear Regression",
          session_id: "session 02",
          course_id: "DataEngineering",
          notes_content: "content of notes",
        },
      ],
    },
    {
      course_id: "DataScience",
      notes: [
        {
          notes_id: "notes001",
          notes_title: "Data science introduction",
          session_id: "session 01",
          course_id: "DataEngineering",
          notes_content: "content of notes",
        },
        {
          notes_id: "notes2",
          notes_title: "Introduction to Linear Regression",
          session_id: "session 02",
          course_id: "DataEngineering",
          notes_content: "content of notes",
        },
      ],
    },
  ];

  useEffect(() => {
    setCourseData(data);
    getDataFromServer();
  }, []);

  return (
    <div className="notesContainer">
      <Tabs className="tab" type="card" style={{ backgroundColor: "White" }}>
        {courseData.map((course) => (
          <TabPane tab={course.course_id} key={course.course_id}>
            <NotesCollapsible notesFromParent={course.notes} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};
export default CourseTab;
