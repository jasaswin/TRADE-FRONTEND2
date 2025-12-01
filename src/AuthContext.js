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






// frontend/src/AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = (userData, userToken) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userToken);

    // mark that this user has an account
    localStorage.setItem("hasAccount", "true");

    setUser(userData);
    setToken(userToken);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // keep hasAccount = true
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
