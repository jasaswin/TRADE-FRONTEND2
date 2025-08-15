


import React from 'react';
import './FeaturesSection.css'; 

function FeaturesSection() {
  return (
    <div className="feature-section">
      <button className="feature-button">Features</button>
      <div className="feature-cards">
        <div className="feature-card" style={{ backgroundColor: '#e0f7fa' }}>
          <img src="/media/images/stock.png" alt="Feature 1" ></img>
          <div className="feature-logo"></div>
          <h3>Live Stock Prices</h3>
          <p>Get real-time updates on market movements and stock prices instantly.</p>
        </div>

        <div className="feature-card" style={{ backgroundColor: '#f3e5f5' }}>
          <img src="/media/images/buy.png" alt="Feature 2" /> 
          <div className="feature-logo"></div>
          <h3>Virtual Trading</h3>
          <p>Practice trading without any risk and sharpen your investment skills.</p>
        </div>

        <div className="feature-card" style={{ backgroundColor: '#fff3e0' }}>
        <img src="/media/images/investment.png" alt="Feature 3" />
          <div className="feature-logo"></div>
          <h3>Portfolio Tracking</h3>
          <p>Monitor your investments and track performance in one place.</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
