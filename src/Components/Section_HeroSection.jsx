import { FaGgCircle } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import ReactPlayer from "react-player";

export default function HeroSection() {
  let title = "";
  let title2 = "";
  let title3 = "";
  title = `DevOps, Frontend & Unity Developer`;
  title2 = `smarta, interaktiva`;
  let desc =
    "As a designer and coder, I create elegantly simple solutions with passion, bringing beauty and connection through simplicity.";
  return (
    <div className="section-hero-section">
      <div className="section-hero-section_bglayer">
        <video
          loop
          muted
          autoPlay
          id="vid"
          className="videoHero"
          width="820"
          height="540"
        >
          {" "}
          <source
            src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/code_loop.mp4"
            type="video/mp4"
          ></source>
          -
        </video>
        <div className="overlay2"></div>
      </div>
      {/* <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}
      <div className="hero-section-row-flex">
        <div className="hero-section-info-section">
          {/* <h1 className="hero-section-info-title">{title} </h1>
           */}

          <Fade triggerOnce="false" duration="2000" direction="up">
            {/* <div class="content">
              <h1 class="title">
                Bringing beauty through simplicity
                <div class="aurora">
                  <div class="aurora__item"></div>
                  <div class="aurora__item"></div>
                  <div class="aurora__item"></div>
                  <div class="aurora__item"></div>
                </div>
              </h1>
            </div> */}
            <p className="hero-section-info-desc">
              Bringing beauty <br />
              through simplicity
            </p>
            <Fade
              triggerOnce="false"
              duration="2000"
              delay={10}
              direction="left"
            >
              {/* <p class="subtitle">
                Mikael Hverven-Landy <br></br> System Developer
              </p> */}
              {/* <p className="hero-section-info-desc-sub">
                Mikael Hverven-Landy <br></br> System Developer
              </p> */}
            </Fade>
          </Fade>
          <a href="#contact" className="hero-section-info-button">
            <h2>Mikael Hverven-Landy</h2>
          </a>
        </div>

        <div className="hero-section-image-section">
          <div className="hero-section-image">
            <Fade triggerOnce="true">
              {/* <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Test_M2.png"></img> */}
            </Fade>
          </div>
        </div>
        <div className="hero-foot">
          <div className="hero-section-image-computers">
            {/* <img
              className="hero-section-image-computers-image"
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/hero.svg"
            ></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Test M.png
