import { useState } from "react";

import HeroSection from "./Components/Section_HeroSection";
import Header from "./Components/Header";
import BioSection from "./Components/Section_BioSection";
import ContactSection from "./Components/Section_Contact";
import ProjectSection from "./Components/Section_Project";
import SkillSection from "./Components/Section_SkillSection";
import BackToUp from "@uiw/react-back-to-top";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Section_Footer";
// import Footer from 'rc-footer';
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
// import { render } from 'react-dom';

function App() {
  return (
    <div id="app" className="App">
      <div className="container">
        <BackToUp style={{ zIndex: "100" }}>Up</BackToUp>
      </div>
      <Header />
      <HeroSection />
      <BioSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
