import React from "react";
import Course from "./components/Course";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      {/* <Home/>
    <Course/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
