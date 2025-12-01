




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./auth.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setMessage("");

//     try {
//       const res = await fetch("http://localhost:3002/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Login failed");
//         return;
//       }

//       // save token & user
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("user", JSON.stringify(data.user));

//       setMessage("Login successful! Redirecting...");

//       setTimeout(() => navigate("/dashboard"), 800);
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Something went wrong.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit} className="auth-form">
//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>

//       {message && <p className="success">{message}</p>}
//       {error && <p className="error">{error}</p>}
//     </div>
//   );
// }





// frontend/src/landing_page/Home/Login.js
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useAuth } from "../../AuthContext";
// import "./auth.css";

// export default function Login({ close }) {
//   const { login } = useAuth();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e) =>
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("http://localhost:3002/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       if (!res.ok) return setError(data.message || "Login failed");

//       login(data.user, data.token);
//       close();
//     } catch {
//       setError("Something went wrong.");
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
//         initial={{ y: -80, scale: 0.9 }}
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
//           />
//           <input
//             name="password"
//             placeholder="Password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//           />

//           <button type="submit">Login</button>
//         </form>

//         {error && <p className="error">{error}</p>}
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
      const res = await fetch("http://localhost:3002/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        // show server message (e.g., "incorrect password" or "user not found")
        return setError(data.message || "Login failed");
      }

      // success
      login(data.user, data.token);
      // ensure hasAccount flag is set (some servers might only set token)
      localStorage.setItem("hasAccount", "true");
      close();
    } catch (err) {
      console.error("Login error:", err);
      setLoading(false);
      setError("Something went wrong. Try again.");
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
                // switch to signup modal
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
