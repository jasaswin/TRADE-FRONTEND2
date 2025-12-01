// import React from "react";
// import "./CallToAction.css";

// const CallToAction = () => {
//   return (
//     <section className="cta-section">
//       <div className="cta-card">
//         <h2 className="cta-title">Start Trading Today </h2>
//         <button className="cta-button">Sign Up</button>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;





import React from "react";
import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2 className="cta-title">Start Trading Today</h2>
        <button className="cta-button" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
