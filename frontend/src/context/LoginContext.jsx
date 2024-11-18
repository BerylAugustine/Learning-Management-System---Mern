import { createContext, useState, useEffect } from "react";
import axios from "axios";

const initialLoggedInState = localStorage.getItem("isLoggedin");
const initialuserState = localStorage.getItem("isLoggedin");
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedin, setisLoggedin] = useState(initialLoggedInState);
  const [isAdmin, setisAdmin] = useState(false);
  const [response, setResponse] = useState([]);
  const [isSignUp, setIsSignUp] = useState(true);
  const [userName, setuserName] = useState(initialuserState);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:8001/api/register");
    setResponse(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const Login = (values) => {
    const updatedPosts = response.filter(
      (post) => post.password === values.password
    );
    if (updatedPosts.length !== 0) {
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("userName", values.username);
      setisLoggedin(false);
    } else {
      alert("Invalid Credentials");
    }
  };
  const Logout = () => {
    localStorage.setItem("isLoggedin", "false");
    setisLoggedin(true);
  };

  const Adminlogin = (values) => {
    values.username === "admin" && values.password === "admin"
      ? setisAdmin(true)
      : setisAdmin(false);
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedin,
        Login,
        Logout,
        isAdmin,
        isSignUp,
        setIsSignUp,
        setisAdmin,
        Adminlogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
