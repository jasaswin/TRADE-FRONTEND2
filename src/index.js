// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import HomePage from './landing_page/Home/HomePage';
// import Signup from './landing_page/Home/Signup';
// import Login from './landing_page/Home/Login';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
   
//         <HomePage />
//            <Login  />
//            <Signup/>

//   </React.StrictMode>


  //  <React.StrictMode>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/signup" element={<Signup />} />
  //       <Route path="/login" element={<Login />} />
  //     </Routes>
  //   </BrowserRouter>
  // </React.StrictMode>

// );






// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./index.css";
// import HomePage from "./landing_page/Home/HomePage";
// import Signup from "./landing_page/Home/Signup";
// import Login from "./landing_page/Home/Login";
// import { AuthProvider } from "./AuthContext";
// import LearningPage from "./learning/LearningPage";  // import


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/Signup" element={<Signup />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/learning" element={<LearningPage />} />

//       </Routes>
//     </BrowserRouter>
//     </AuthProvider>
//   </React.StrictMode>
// );




// dashboard/src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";
// import Home from "./components/Home";

// // --- FIX: SYNC USER FROM FRONTEND LOGIN ---
// try {
//   const params = new URLSearchParams(window.location.search);
//   const encodedUser = params.get("user");

//   if (encodedUser) {
//     const decodedUser = JSON.parse(decodeURIComponent(encodedUser));

//     // overwrite dashboard localStorage user
//     localStorage.setItem("user", JSON.stringify(decodedUser));
//   }
// } catch (err) {
//   console.error("Failed to sync user:", err);
// }
// // ----------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );






// frontend/src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";

// // use the exact filenames you have in your repo
// import LandingPage from "./landing_page/Home/HomePage";        // <-- HomePage.js
// import Signup from "./landing_page/Home/Signup";               // Signup.js
// import Login from "./landing_page/Home/Login";                 // Login.js
// import LearningPage from "./landing_page/Home/learning/LearningPage"; // LearningPage.js

// // If your AuthContext is in landing_page/Home/AuthContext.js:
// import { AuthProvider } from "./landing_page/Home/AuthContext";

// const AppRoutes = () => (
//   <Routes>
//     <Route path="/" element={<LandingPage />} />
//     <Route path="/signup" element={<Signup />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/learning" element={<LearningPage />} />
//     {/* add other frontend routes here if needed */}
//   </Routes>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//       <BrowserRouter>
//         <AppRoutes />
//       </BrowserRouter>
//     </AuthProvider>
//   </React.StrictMode>
// );




// frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// use the exact filenames you have in your repo
import LandingPage from "./landing_page/Home/HomePage";        // <-- HomePage.js
import Signup from "./landing_page/Home/Signup";               // Signup.js
import Login from "./landing_page/Home/Login";                 // Login.js
import LearningPage from "./learning/LearningPage"; // LearningPage.js

// If your AuthContext is in landing_page/Home/AuthContext.js:
import { AuthProvider } from "./AuthContext";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/learning" element={<LearningPage />} />
    {/* add other frontend routes here if needed */}
  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
