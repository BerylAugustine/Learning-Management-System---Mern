import React from "react";
import { Route, Routes } from "react-router-dom";
import Assignment from "../pages/Assignment";
import Courses from "../pages/Courses";
import Dashboard from "../pages/Dashboard";
import Notes from "../pages/Notes";
import Team from "../pages/Team";
import Settings from "../pages/Settings";
import Content from "../pages/Contentt";
import ContentCreationComplete from "../pages/Content-creation-complete";
import AssignmentUpoad from "../pages/AssignmentUpload";
import ContentSubmitted from "../pages/Content-Submitted";
import CourseTab from "../pages/notes/CourseTabs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />}>
        {" "}
      </Route>
      <Route path="/" element={<Dashboard />}>
        {" "}
      </Route>
      <Route path="/Assignment" element={<Assignment />}>
        {" "}
      </Route>
      <Route path="/Courses" element={<Courses />}>
        {" "}
      </Route>
      <Route path="/Team" element={<Team />}>
        {" "}
      </Route>
      <Route path="/Settings" element={<Settings />}>
        {" "}
      </Route>
      <Route path="/Content" element={<Content />}>
        {" "}
      </Route>
      <Route
        path="/content-creation-complete"
        element={<ContentCreationComplete />}
      >
        {" "}
      </Route>
      <Route path="/content-submitted" element={<ContentSubmitted />}>
        {" "}
      </Route>
      <Route path="/AssignmentUpload" element={<AssignmentUpoad />}>
        {" "}
      </Route>
      <Route path="/Notes" element={<CourseTab />}>
        {" "}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
