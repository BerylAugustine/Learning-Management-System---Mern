import React, {useState} from "react";
import "./App.css";
import MainLayout from "./pages/MainLayout";
import { LoginProvider } from "./context/LoginContext";
import NotesEditor from "./pages/notes/NotesEditor";
import CourseTab from "./pages/notes/CourseTabs";
import NotesCollapsible from "./pages/notes/NotesCollapsible";

const App = () => {
  // const [{}, dispatch] = useStateValue();
  // useEffect(() => {
  //   // will only run once when the app component loads...

  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS >>> ", authUser);

  //     if (authUser) {
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);
  return (
    <LoginProvider>
      <MainLayout />
      {/* <CourseTab /> */}
    </LoginProvider>
  );
};
export default App;
