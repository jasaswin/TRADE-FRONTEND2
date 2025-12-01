


// import React from 'react';
// import './FeaturesSection.css'; 

// function FeaturesSection() {
//   return (
//     <div className="feature-section">
//       <button className="feature-button">Features</button>
//       <div className="feature-cards">
//         <div className="feature-card" style={{ backgroundColor: '#e0f7fa' }}>
//           <img src="/media/images/stock.png" alt="Feature 1" ></img>
//           <div className="feature-logo"></div>
//           <h3>Live Stock Prices</h3>
//           <p>Get real-time updates on market movements and stock prices instantly.</p>
//         </div>

//         <div className="feature-card" style={{ backgroundColor: '#f3e5f5' }}>
//           <img src="/media/images/buy.png" alt="Feature 2" /> 
//           <div className="feature-logo"></div>
//           <h3>Virtual Trading</h3>
//           <p>Practice trading without any risk and sharpen your investment skills.</p>
//         </div>

//         <div className="feature-card" style={{ backgroundColor: '#fff3e0' }}>
//         <img src="/media/images/investment.png" alt="Feature 3" />
//           <div className="feature-logo"></div>
//           <h3>Portfolio Tracking</h3>
//           <p>Monitor your investments and track performance in one place.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FeaturesSection;






// import React from 'react';
// import './FeaturesSection.css';

// function FeaturesSection() {
//   const features = [
//     {
//       title: "Live Stock Prices",
//       text: "Get real-time updates on market movements and stock prices instantly.",
//       img: "/media/images/stock.png",
//       variant: "ivory" // lighter neutral card
//     },
//     {
//       title: "Virtual Trading",
//       text: "Practice trading without any risk and sharpen your investment skills.",
//       img: "/media/images/buy.png",
//       variant: "pink" // soft pink card
//     },
//     {
//       title: "Portfolio Tracking",
//       text: "Monitor your investments and track performance in one place.",
//       img: "/media/images/investment.png",
//       variant: "peach" // warm ivory/peach
//     }
//   ];

//   return (
//     <div className="feature-section">
//       <button className="feature-button" aria-label="Features">Features</button>

//       <div className="feature-cards">
//         {features.map((f) => (
//           <article key={f.title} className={`feature-card ${f.variant}`} tabIndex="0" aria-labelledby={`${f.title}-title`}>
//             <div className="card-edge-anim" aria-hidden></div>

//             <img src={f.img} alt={`${f.title} icon`} className="feature-image" />
//             <div className="feature-logo" aria-hidden></div>
//             <h3 id={`${f.title}-title`}>{f.title}</h3>
//             <p>{f.text}</p>
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FeaturesSection;





import React from 'react';
import './FeaturesSection.css'; 

function FeaturesSection() {
  return (
    <div className="feature-section">
      <button className="feature-button">Features</button>

      <div className="feature-cards">

        <div className="feature-card" style={{ backgroundColor: '#e0f7fa' }}>
          <div className="card-edge-anim"></div>
          <img src="/media/images/stock.png" alt="Feature 1" className="feature-image" />
          <h3>Live Stock Prices</h3>
          <p>Get real-time updates on market movements and stock prices instantly.</p>
        </div>

        <div className="feature-card" style={{ backgroundColor: '#f3e5f5' }}>
          <div className="card-edge-anim"></div>
          <img src="/media/images/buy.png" alt="Feature 2" className="feature-image" />
          <h3>Virtual Trading</h3>
          <p>Practice trading without any risk and sharpen your investment skills.</p>
        </div>

        <div className="feature-card" style={{ backgroundColor: '#fff3e0' }}>
          <div className="card-edge-anim"></div>
          <img src="/media/images/investment.png" alt="Feature 3" className="feature-image" />
          <h3>Portfolio Tracking</h3>
          <p>Monitor your investments and track performance in one place.</p>
        </div>

      </div>
    </div>
  );
}

export default FeaturesSection;
