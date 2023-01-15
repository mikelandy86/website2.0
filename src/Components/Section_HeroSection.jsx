import { FaGgCircle} from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
export default function HeroSection() {
  




let title = "";
title =`Bygger innovativa \n digitala, interaktiva`;

let desc = "";
desc =`En C# utvecklare och innovativ app-utvecklare skapar jag högkvalitativa digitala produkter med verktyg som C#, ASP.NET, WPF och Xamarin.`;

  return (

    <div className="section-hero-section">
      <div className="hero-section-row-flex">
        <div className="hero-section-info-section">
          <Fade triggerOnce="false" direction="left">
           
          <h2 className="hero-section-info-title">
            {title}{" "}

            <span class="rainbow">

              <br />
              <FaGgCircle size={47} color="#5E3AEE"/> applikationer. 
            </span>
          </h2>
          </Fade>
          <p className="hero-section-info-desc">
          {desc}
          </p>
          {/* <a href="#contact" className="hero-section-info-button">
            <h2>Kontakt</h2>
          </a> */}
        </div>

        <div className="hero-section-image-section">
          {/* <div className="hero-section-image-image-bg"></div> */}
          <div className="hero-section-image">
            <Fade triggerOnce="true">
          <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Avatar-remade.png"></img></Fade>
            {/* <iframe
              src="https://www.youtube.com/embed/H5PsBdyi2so?controls=0&showinfo=0&rel=0&autoplay=1&start=7&end=200&loop=1&mute=1&playlist=H5PsBdyi2so"
              frameborder="0"
              allowfullscreen
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// <iframe width="580" height="315"
// src="https://www.youtube.com/embed/nXUMsvWlsVo?autoplay=1&mute=1">
// </iframe>
