


// // frontend/src/landing_page/Home/Header.js
// import React from "react";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../AuthContext"; // use context
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Header.css";

// export default function Header() {
//   const { isSignedUp, setIsSignedUp } = useAuth(); // get signup state & setter
//   const navigate = useNavigate();

//   // prefer checking user from context/localStorage as a fallback
//   const localUser = typeof window !== "undefined" ? localStorage.getItem("user") : null;

// // inside Header.js
// const handleDashboardClick = () => {
//   const token = localStorage.getItem("token");
//   const user = localStorage.getItem("user");

//   if (token && user) {
//     // ✅ Open Dashboard app (port 3000)
//     // window.location.href = "http://localhost:3000";
// const user = JSON.parse(localStorage.getItem("user"));
// if (token && user) {
//   const userData = encodeURIComponent(JSON.stringify(user));
//   window.location.href = `http://localhost:3000?user=${userData}`;
// }


//   } else {
//     alert("Please sign up or log in first!");
//     navigate("/signup");
//   }
// };

  

//   const logout = () => {
//     // clear local storage and context
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setIsSignedUp(false);
//     navigate("/");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar px-4">
//       {/* Left side: Logo + Name */}
//       <div className="navbar-brand d-flex align-items-center">
//         <img src="media/images/logo.png" alt="Logo" className="logo-img" />
//         <span className="ms-2 brand-name">TradeNest</span>
//       </div>

//       {/* Right side: Menu buttons */}
//       <div className="ms-auto d-flex align-items-center gap-3">
//         <NavButton text="Home" link="/" />
//         {/* <NavButton text="About" link="/about" /> */}
//         {/* <NavButton text="Contact" link="/contact" /> */}
//         <NavButton text="Learning" link="/learning" />

//         {/* Show Signup / Login+Dashboard according to auth */}
//         {!isSignedUp && !localUser ? (
//           <NavButton text="Signup" link="/signup" />
//         ) : (
//           <>
//             <NavButton text="Login" link="/login" />
//             {/* <NavButton text="Dashboard" link="/dashboard" /> */}
             

//              <motion.div whileHover={{ scale: 1.05 }}>
//   <button onClick={handleDashboardClick} className="btn custom-btn">
//     Dashboard
//   </button>
// </motion.div>


//             {/* small logout button */}
//             <motion.div whileHover={{ scale: 1.02 }}>
//               <button onClick={logout} className="btn custom-btn">
//                 Logout
//               </button>
//             </motion.div>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// // Reusable motion button
// const NavButton = ({ text, link }) => {
//   return (
//     <motion.div whileHover={{ scale: 1.05 }}>
//       <Link to={link} className="btn custom-btn">
//         {text}
//       </Link>
//     </motion.div>
//   );
// };





// frontend/src/landing_page/Home/Header.js
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../AuthContext";
// import Login from "./Login";
// import Signup from "./Signup";
// import "./Header.css";

// export default function Header() {
//   const { user, logout } = useAuth();

//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);



  // const openAuthModal = () => {
  //   if (user) {
  //     // logged-out previously → show login
  //     setShowLogin(true);
  //   } else {
  //     // new visitor → show signup
  //     setShowSignup(true);
  //   }
  // };




//   const openAuthModal = () => {
//   const hasAccount = localStorage.getItem("hasAccount");

//   if (hasAccount === "true") {
//     // user has existed before → show Login modal
//     setShowLogin(true);
//   } else {
//     // new visitor → show Signup modal
//     setShowSignup(true);
//   }
// };



//   const openDashboard = () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const token = localStorage.getItem("token");

//     if (user && token) {
//       const data = encodeURIComponent(JSON.stringify(user));
//       window.location.href = `http://localhost:3000?user=${data}`;
//     } else {
//       alert("Please login or signup first.");
//       setShowLogin(true);
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar px-4">
//       <div className="navbar-brand d-flex align-items-center">
//         <img src="media/images/logo.png" alt="Logo" className="logo-img" />
//         <span className="ms-2 brand-name">TradeNest</span>
//       </div>

//       <div className="ms-auto d-flex align-items-center gap-3">
//         <NavButton text="Home" link="/" />
//         <NavButton text="Learning" link="/learning" />

//         {!user ? (
//           <motion.div whileHover={{ scale: 1.08 }}>
//             <button className="btn custom-btn" onClick={openAuthModal}>
//               Login / Signup
//             </button>
//           </motion.div>
//         ) : (
//           <>
//             <motion.div whileHover={{ scale: 1.08 }}>
//               <button className="btn custom-btn" onClick={openDashboard}>
//                 Dashboard
//               </button>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }}>
//               <button className="btn custom-btn" onClick={logout}>
//                 Logout
//               </button>
//             </motion.div>
//           </>
//         )}
//       </div>

//       {/* POPUP MODALS */}
//       {showLogin && <Login close={() => setShowLogin(false)} />}
//       {showSignup && <Signup close={() => setShowSignup(false)} />}
//     </nav>
//   );
// }

// // Reusable button
// const NavButton = ({ text, link }) => (
//   <motion.div whileHover={{ scale: 1.05 }}>
//     <Link to={link} className="btn custom-btn">
//       {text}
//     </Link>
//   </motion.div>
// );









// frontend/src/landing_page/Home/Header.js
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../AuthContext";
// import Login from "./Login";
// import Signup from "./Signup";
// import "./Header.css";

// export default function Header() {
//   const { user, logout } = useAuth();

//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   // openAuthModal: decides which modal to show based on "hasAccount"
//   const openAuthModal = () => {
//     const hasAccount = localStorage.getItem("hasAccount");
//     if (hasAccount === "true") {
//       setShowLogin(true);
//     } else {
//       setShowSignup(true);
//     }
//   };

//   const openDashboard = () => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const token = localStorage.getItem("token");

//     if (user && token) {
//       const data = encodeURIComponent(JSON.stringify(user));
//       window.location.href = `http://localhost:3000?user=${data}`;
//     } else {
//       alert("Please login or signup first.");
//       setShowLogin(true);
//     }
//   };

//   // helper callbacks to switch between modals
//   const openSignupFromLogin = () => {
//     setShowLogin(false);
//     setShowSignup(true);
//   };

//   const openLoginFromSignup = () => {
//     setShowSignup(false);
//     setShowLogin(true);
//   };




// //   const logout = () => {
// //   localStorage.removeItem("user");
// //   localStorage.removeItem("token");
// //   localStorage.removeItem("hasAccount");

// //   // CLEAR dashboard localStorage copy too
// //   fetch("http://localhost:3000/?clearUser=true");

// //   window.location.href = "/";
// // };




//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar px-4">
//       <div className="navbar-brand d-flex align-items-center">
//         <img src="media/images/logo.png" alt="Logo" className="logo-img" />
//         <span className="ms-2 brand-name">TradeNest</span>
//       </div>

//       <div className="ms-auto d-flex align-items-center gap-3">
//         <NavButton text="Home" link="/" />
//         <NavButton text="Learning" link="/learning" />

//         {!user ? (
//           <motion.div whileHover={{ scale: 1.08 }}>
//             <button className="btn custom-btn" onClick={openAuthModal}>
//               Login / Signup
//             </button>
//           </motion.div>
//         ) : (
//           <>
//             <motion.div whileHover={{ scale: 1.08 }}>
//               <button className="btn custom-btn" onClick={openDashboard}>
//                 Dashboard
//               </button>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.05 }}>
//               <button className="btn custom-btn" onClick={logout}>
//                 Logout
//               </button>
//             </motion.div>
//           </>
//         )}
//       </div>

//       {/* POPUP MODALS */}
//       {showLogin && (
//         <Login
//           close={() => setShowLogin(false)}
//           openSignup={() => openSignupFromLogin()}
//         />
//       )}
//       {showSignup && (
//         <Signup
//           close={() => setShowSignup(false)}
//           openLogin={() => openLoginFromSignup()}
//         />
//       )}
//     </nav>
//   );
// }

// const NavButton = ({ text, link }) => (
//   <motion.div whileHover={{ scale: 1.05 }}>
//     <Link to={link} className="btn custom-btn">
//       {text}
//     </Link>
//   </motion.div>
// );





// frontend/src/landing_page/Home/Header.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import Login from "./Login";
import Signup from "./Signup";
import "./Header.css";

export default function Header() {
  const { user, logout } = useAuth();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // Decides whether to open login or signup
  const openAuthModal = () => {
    const hasAccount = localStorage.getItem("hasAccount");

    if (hasAccount === "true") {
      setShowLogin(true);
    } else {
      setShowSignup(true);
    }
  };

  // Dashboard opener - passes user to dashboard
  const openDashboard = () => {
    const token = localStorage.getItem("token");
    const userObj = JSON.parse(localStorage.getItem("user") || "{}");

    if (token && userObj.username) {
      const data = encodeURIComponent(JSON.stringify(userObj));
      window.location.href = `http://localhost:3000?user=${data}`;
    } else {
      alert("Please login first.");
      setShowLogin(true);
    }
  };

  // Switch modal to Signup
  const goToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  // Switch modal to Login
  const goToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  // Clean logout
  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4">
      <div className="navbar-brand d-flex align-items-center">
        <img src="media/images/logo.png" alt="Logo" className="logo-img" />
        <span className="ms-2 brand-name">TradeNest</span>
      </div>

      <div className="ms-auto d-flex align-items-center gap-3">
        <NavButton text="Home" link="/" />
        <NavButton text="Learning" link="/learning" />

        {!user ? (
          <motion.div whileHover={{ scale: 1.08 }}>
            <button className="btn custom-btn" onClick={openAuthModal}>
              Login / Signup
            </button>
          </motion.div>
        ) : (
          <>
            <motion.div whileHover={{ scale: 1.08 }}>
              <button className="btn custom-btn" onClick={openDashboard}>
                Dashboard
              </button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <button className="btn custom-btn" onClick={handleLogout}>
                Logout
              </button>
            </motion.div>
          </>
        )}
      </div>

      {/* POPUPS */}
      {showLogin && (
        <Login close={() => setShowLogin(false)} openSignup={goToSignup} />
      )}
      {showSignup && (
        <Signup close={() => setShowSignup(false)} openLogin={goToLogin} />
      )}
    </nav>
  );
}

const NavButton = ({ text, link }) => (
  <motion.div whileHover={{ scale: 1.05 }}>
    <Link to={link} className="btn custom-btn">
      {text}
    </Link>
  </motion.div>
);
