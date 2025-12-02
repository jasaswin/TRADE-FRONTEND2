





// frontend/src/landing_page/Home/Signup.js
// import React, { useState } from "react";
// import { useAuth } from "../../AuthContext";
// import { motion } from "framer-motion";
// import "./auth.css";
// import api from "./api";



// export default function Signup({ close, openLogin }) {
//   const { login } = useAuth();
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) =>
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:3002/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       setLoading(false);

//       if (!res.ok) {
//         return setError(data.message || "Signup failed");
//       }

//       // auto-login user after signup
//       login(data.user, data.token);
//       localStorage.setItem("hasAccount", "true");
//       close();
//     } catch (err) {
//       console.error("Signup error:", err);
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
//         initial={{ y: -90, scale: 0.95 }}
//         animate={{ y: 0, scale: 1 }}
//       >
//         <h2>Create Account</h2>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <input
//             name="username"
//             placeholder="Username"
//             value={form.username}
//             onChange={handleChange}
//             required
//           />
//           <input
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             type="email"
//             required
//           />
//           <input
//             name="password"
//             placeholder="Password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             minLength={6}
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>

//         {error && <p className="error">{error}</p>}

//         <div style={{ marginTop: 12 }}>
//           <small>
//             Already have an account?{" "}
//             <button
//               onClick={() => {
//                 if (openLogin) openLogin();
//               }}
//               className="link-button"
//             >
//               Login
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





// frontend/src/landing_page/Home/Signup.js
import React, { useState } from "react";
import { useAuth } from "../../AuthContext";
import { motion } from "framer-motion";
import "./auth.css";
import api from "../../../api"; // <-- updated import (points to src/api.js)

export default function Signup({ close, openLogin }) {
  const { login } = useAuth();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // use api (axios) and the env var baseURL from src/api.js
      const res = await api.post("/api/auth/signup", form);
      const data = res.data;
      setLoading(false);

      // server-side error handling (axios treats non-2xx as throw,
      // but keeping this defensive)
      if (!res || res.status >= 400) {
        return setError(data.message || "Signup failed");
      }

      // Save token locally so api will include it on future calls
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // auto-login user after signup
      login(data.user, data.token);
      localStorage.setItem("hasAccount", "true");
      close();
    } catch (err) {
      console.error("Signup error:", err);
      setLoading(false);
      // axios errors usually have response.data.message
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
        initial={{ y: -90, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
      >
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={6}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}

        <div style={{ marginTop: 12 }}>
          <small>
            Already have an account?{" "}
            <button
              onClick={() => {
                if (openLogin) openLogin();
              }}
              className="link-button"
            >
              Login
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
