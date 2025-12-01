



// frontend/src/landing_page/Home/Signup.js
// import React, { useState } from "react";
// import { useAuth } from "../../AuthContext";
// import { useNavigate } from "react-router-dom";
// import "./auth.css";

// export default function Signup() {
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const { setIsSignedUp } = useAuth(); // update signup state in context
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     // quick client-side validation
//     if (!form.username || !form.email || !form.password) {
//       setError("Please fill all fields.");
//       return;
//     }

//     // quick regex email check before calling API
//     const emailRegex = /^\S+@\S+\.\S+$/;
//     if (!emailRegex.test(form.email)) {
//       setError("Invalid email format. Use example@domain.com");
//       return;
//     }

//     if (form.password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:3002/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Signup failed");
//         return;
//       }

//       if (data.token) localStorage.setItem("token", data.token);
//       if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

//       setIsSignedUp(true);
//       setMessage("✅ Sign up completed successfully! Redirecting...");

//       // ✅ Redirect to home page (port 3001) instead of dashboard
//       setTimeout(() => navigate("/"), 900);
//     } catch (err) {
//       console.error("Signup error:", err);
//       setError("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit} className="auth-form">
//         <input
//           name="username"
//           value={form.username}
//           onChange={handleChange}
//           type="text"
//           placeholder="Username"
//           required
//         />
//         <input
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           type="email"
//           placeholder="Email"
//           required
//         />
//         <input
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           type="password"
//           placeholder="Password"
//           required
//           minLength={6}
//         />
//         <button type="submit">Sign Up</button>
//       </form>

//       {message && <p className="success">{message}</p>}
//       {error && <p className="error">{error}</p>}
//     </div>
//   );
// }





// frontend/src/landing_page/Home/Signup.js
// import React, { useState } from "react";
// import { useAuth } from "../../AuthContext";
// import { motion } from "framer-motion";
// import "./auth.css";

// export default function Signup({ close }) {
//   const { login } = useAuth();
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) =>
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("http://localhost:3002/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       if (!res.ok) return setError(data.message || "Signup failed");

//       // Auto-login
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
//         initial={{ y: -90, scale: 0.9 }}
//         animate={{ y: 0, scale: 1 }}
//       >
//         <h2>Create Account</h2>

//         <form onSubmit={handleSubmit} className="auth-form">
//           <input
//             name="username"
//             placeholder="Username"
//             value={form.username}
//             onChange={handleChange}
//           />
//           <input
//             name="email"
//             placeholder="Email"
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

//           <button type="submit">Sign Up</button>
//         </form>

//         {error && <p className="error">{error}</p>}
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
      const res = await fetch("http://localhost:3002/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        return setError(data.message || "Signup failed");
      }

      // auto-login user after signup
      login(data.user, data.token);
      localStorage.setItem("hasAccount", "true");
      close();
    } catch (err) {
      console.error("Signup error:", err);
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
