import { Fade, Slide } from "react-awesome-reveal";
import { FaLaptopCode } from "react-icons/fa";
export default function Projectv2() {
  return (
    <div id="projects" className="section-projects">
      <div className="section-bio-title">
        <h1>My Recent Work</h1>
        <h3>
          Here are a few past design projects I've worked on. Want to see more?{" "}
          <a>Email me.</a>
        </h3>
      </div>
      <div className="v2-projects-projectThumbs">
        <div className="v2-projects-flex-container">
          <div className="container">
            <img
              src="./src/assets/public/images/Hags_Project.png"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div className="container">
            <img
              src="./src/assets/public/images/Hags_Project.png"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div className="container">
            <img
              src="./src/assets/public/images/Hags_Project.png"
              alt="Avatar"
              className="image"
            />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div id="projects" className="section-projects">
    //   <div className="section-bio-title">
    //     <h1>My Recent Work</h1>
    //     <h3>
    //       Here are a few past design projects I've worked on. Want to see more?{" "}
    //       <a>Email me.</a>
    //     </h3>
    //   </div>
    //   <div className="v2-projects-flex-container">
    //     <div className="v2-project">
    //       <div className="v2-project-container">
    //         <img src="./src/assets/public/images/Hags_Project.png"></img>
    //         <div className="overlay">
    //           <div className="text">Hello World</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
