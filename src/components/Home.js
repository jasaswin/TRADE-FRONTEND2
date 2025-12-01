
// frontend/src/components/Home.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../landing_page/Home/Header";
import Signup from "../landing_page/Home/Signup";
import Login from "../landing_page/Home/Login";
import Learning from "../landing_page/Home/Learning"; // if missing, I’ll create it
import Landing from "../landing_page/Home/Landing";   // if missing, I’ll create it

const Home = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
    </>
  );
};

export default Home;
