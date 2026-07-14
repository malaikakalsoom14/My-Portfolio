import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt
} from "react-icons/fa";

import {
  SiTailwindcss
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">

<div className="skills-title">
 <span className="section-number">
          03
 </span>

 <h2>
  Technical <br />
     Skills
</h2>

 </div>
  <div className="skills-container">
  <div className="skill">
  <div className="skill-info">
   <span><FaHtml5 /> HTML5</span>
 <span>98%</span>
  </div>

 <div className="skill-bar">
  <div style={{ width: "98%" }}></div>
</div>

  </div>

        <div className="skill">

          <div className="skill-info">
            <span><FaCss3Alt /> CSS3</span>
            <span>95%</span>
          </div>

          <div className="skill-bar">
            <div style={{ width: "95%" }}></div>
          </div>

        </div>

        <div className="skill">

          <div className="skill-info">
            <span><FaJs /> JavaScript</span>
            <span>80%</span>
          </div>

          <div className="skill-bar">
            <div style={{ width: "80%" }}></div>
          </div>

        </div>

        <div className="skill">

          <div className="skill-info">
            <span>
              <FaReact />
              React JS (Still Learning)
            </span>

            <span>15%</span>
          </div>

     <div className="skill-bar">
<div style={{ width: "15%" }}></div>
 </div>
</div>

        <div className="skill">
 <div className="skill-info">
     <span><FaBootstrap /> Bootstrap</span>
     <span>85%</span>
     </div>

  <div className="skill-bar">
     <div style={{ width: "85%" }}></div>
  </div>
</div>

        <div className="skill">
  <div className="skill-info">
      <span>Responsive Web Design</span>
  <span>90%</span>
 </div>

          <div className="skill-bar">
            <div style={{ width: "90%" }}></div>
          </div>

        </div>
 <div className="skill">
<div className="skill-info">
    <span><SiTailwindcss /> Tailwind CSS</span>
    <span>85%</span>
     </div>
<div className="skill-bar">
     <div style={{ width: "85%" }}></div>
     </div>

</div>

<div className="skill">
<div className="skill-info">
     <span><FaGitAlt /> Git & GitHub</span>
     <span>85%</span>
    </div>

     <div className="skill-bar">
  <div style={{ width: "85%" }}></div>
 </div>

 </div>

<div className="skill">

    <div className="skill-info">
      <span>UI/UX Basics</span>
      <span>80%</span>
 </div>

          <div className="skill-bar">
  <div style={{ width: "80%" }}></div>
    </div>
</div>
 </div>
</section>
  )
}

export default Skills