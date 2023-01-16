import { FaGgCircle} from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';
export default function HeroSection() {
  

<Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>


let title = "";
let title2 = "";
let title3 = "";
title =`Bygger innovativa`;
title2 =`digitala, interaktiva`;
let desc = "En C# utvecklare och innovativ app-utvecklare skapar jag högkvalitativa digitala produkter med verktyg som C#, ASP.NET, WPF och Xamarin."
  return (

    <div className="section-hero-section">
      <div className="hero-section-row-flex">
        <div className="hero-section-info-section">
          <Fade cascade triggerOnce="false" direction="left">

          <h2 className="hero-section-info-title">
            {title}{" "}

          </h2>
          <h2 className="hero-section-info-title">
            {title2}{" "}


          </h2>
          <h2 className="hero-section-info-title">
            {title3}{" "}

          </h2>
          </Fade>
          <div className="typewriter-container">
         <FaGgCircle className="hero-section-info-title" size={40} color="#5E3AEE"/> 
            <h2 className="rainbow">

              {/* <br /> */}
     
              <Typewriter
                options={{

                  loop: true,
                }}
  onInit={(typewriter) => {
    typewriter.typeString('')

      
    .pauseFor(900)
    typewriter.typeString('Applikationer')

      
      .pauseFor(200)
      .deleteAll()

      typewriter.typeString('XR-upplevelser.')
      .pauseFor(200)
      .deleteAll()

      typewriter.typeString('Unity spel.')
      .pauseFor(200)
      .deleteAll()

      typewriter.typeString('Hemsidor.')
      .pauseFor(200)
      .deleteAll()
      typewriter.typeString('Mobil appar.')
      .pauseFor(200)
      .deleteAll()
      .start();
  }}
/>
             
            </h2>
            </div>
          
          <Fade triggerOnce="false" damping={23}>
           
          <p className="hero-section-info-desc">
          {desc}
          </p>
          </Fade>
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
