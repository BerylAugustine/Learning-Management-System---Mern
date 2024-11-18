// import { createContext, useState } from "react";

// export const AuthContext = createContext();
// const initialLoggedInState = localStorage.getItem("isLoggedin") === true;

// export const AuthProvider = ({ children }) => {
//   const [isLoggedin, setisLoggedin] = useState(initialLoggedInState);

//   const Login = (values) => {
//     // {values.username === 'admin' && values.password === 'admin'? s:s}
//   };
//   const Logout = () => {
//     setisLoggedin(false);
//     localStorage.getItem("isLoggedin", "false");
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedin, Logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";
// Get the isLoggedIn value from local session
const initialLoggedInState = localStorage.getItem("isLoggedIn") === "true";
// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedInState);

  // Function to handle login
  const login = (values) => {
    // Perform login logic here
    if (values.username === "admin" && values.password === "admin") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Invalid credentials");
    }
  };

  // Function to handle logout
  const logout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
