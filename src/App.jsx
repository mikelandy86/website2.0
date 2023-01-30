import { useState } from "react";

import HeroSection from "./Components/Section_HeroSection";
import Header from "./Components/Header";
import BioSection from "./Components/Section_BioSection";
import BioSectionV2 from "./Components/Section_BioSectionv2";
import ContactSection from "./Components/Section_Contact";
import ProjectSectionv2 from "./Components/Section_Projectv2";
import SkillSection from "./Components/Section_SkillSection";
import ScrollDown from "./Components/ScrollDown";
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
      <Header />
      <HeroSection />
      {/* <ScrollDown href="#bio" /> */}
      <BioSectionV2 />
      <SkillSection />
      <ProjectSectionv2 />
      <BioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
