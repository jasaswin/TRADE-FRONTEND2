
// import React from "react";
// import Header from "./Header";
// import Hero from "./Hero";
// import LiveMarket from "./LiveMarket";
// import FeaturesPreview from "./FeaturesPreview";
// import WhyChooseUs from "./WhyChooseUs";
// import CallToAction from "./CallToAction";
// import Footer from "./Footer";
// import "./home.css";
// import BackgroundAnimation from './BackgroundAnimation';


// const Home = () => {
//   return (
//     <div className="home-container">
//       <Header />
//        <div style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
//         <BackgroundAnimation />
//       <Hero />
//       <LiveMarket />
//       <FeaturesPreview />
//       <WhyChooseUs />
//       <CallToAction />
//       <Footer />
//     </div>
//   );
// };

// export default Home;



import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection />
    
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;

