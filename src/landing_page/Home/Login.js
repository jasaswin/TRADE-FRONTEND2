




// frontend/src/landing_page/Home/Login.js
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useAuth } from "../../AuthContext";
// import "./auth.css";
// import api from "./api";


// export default function Login({ close, openSignup }) {
//   const { login } = useAuth();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) =>
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:3002/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       setLoading(false);

//       if (!res.ok) {
//         // show server message (e.g., "incorrect password" or "user not found")
//         return setError(data.message || "Login failed");
//       }

//       // success
//       login(data.user, data.token);
//       // ensure hasAccount flag is set (some servers might only set token)
//       localStorage.setItem("hasAccount", "true");
//       close();
//     } catch (err) {
//       console.error("Login error:", err);
//       setLoading(false);
//       setError("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <motion.div
//       className="modal-overlay"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <motion.div
//         className="modal-box"
//         initial={{ y: -80, scale: 0.95 }}
//         animate={{ y: 0, scale: 1 }}
//       >
//         <h2>Login</h2>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <input
//             name="email"
//             placeholder="Email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             name="password"
//             placeholder="Password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {error && <p className="error">{error}</p>}

//         <div style={{ marginTop: 12 }}>
//           <small>
//             Don't have an account?{" "}
//             <button
//               onClick={() => {
//                 // switch to signup modal
//                 if (openSignup) openSignup();
//               }}
//               className="link-button"
//             >
//               Sign up
//             </button>
//           </small>
//         </div>

//         <button className="close-btn" onClick={close}>
//           Close
//         </button>
//       </motion.div>
//     </motion.div>
//   );
// }




// frontend/src/landing_page/Home/Login.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../AuthContext";
import "./auth.css";
import api from "../../../api"; // <-- updated import (points to src/api.js)

export default function Login({ close, openSignup }) {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/api/auth/login", form);
      const data = res.data;
      setLoading(false);

      // Save token and call your auth context login
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      login(data.user, data.token);
      localStorage.setItem("hasAccount", "true");
      close();
    } catch (err) {
      console.error("Login error:", err);
      setLoading(false);
      const message = err?.response?.data?.message || "Something went wrong. Try again.";
      setError(message);
    }
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="modal-box"
        initial={{ y: -80, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
      >
        <h2>Login</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        <div style={{ marginTop: 12 }}>
          <small>
            Don't have an account?{" "}
            <button
              onClick={() => {
                if (openSignup) openSignup();
              }}
              className="link-button"
            >
              Sign up
            </button>
          </small>
        </div>

        <button className="close-btn" onClick={close}>
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
