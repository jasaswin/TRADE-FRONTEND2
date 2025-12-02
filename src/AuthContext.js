// // src/AuthContext.js
// import React, { createContext, useState, useContext } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isSignedUp, setIsSignedUp }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }





// frontend/src/AuthContext.js
// import React, { createContext, useState, useContext, useEffect } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   // LOGIN FUNCTION
//   const login = (userData, userToken) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("token", userToken);
//     setUser(userData);
//     setToken(userToken);
//   };

//   // LOGOUT FUNCTION
//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }






// // frontend/src/AuthContext.js
// import React, { createContext, useState, useContext } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   const login = (userData, userToken) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("token", userToken);

//     // mark that this user has an account
//     localStorage.setItem("hasAccount", "true");

//     setUser(userData);
//     setToken(userToken);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");

//     // keep hasAccount = true
//     setUser(null);
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }




// frontend/src/AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

// Safely read and parse stored user
const readUserFromStorage = () => {
  try {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.warn("⚠️ Failed to parse stored user:", err);
    localStorage.removeItem("user");
    return null;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readUserFromStorage());
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = (userData, userToken) => {
    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userToken);
    localStorage.setItem("hasAccount", "true"); // your app uses this

    // Save to React state
    setUser(userData);
    setToken(userToken);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    // keep hasAccount = true (as you already do)
    setUser(null);
    setToken(null);
  };

  // Boolean helper
  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
