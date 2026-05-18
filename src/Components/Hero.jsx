import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
<section className="hero" id="home">

    <div className="hero-left">

    <h1 className="heading">
          Malaika <br />
          Kalsoom <br />
    <span className="gold">
            Frontend Developer.
    </span>
     </h1>

 <p>
          I create responsive and visually engaging web experiences
          using modern frontend technologies. Passionate about clean UI,
          smooth interactions, and user-focused design.
 </p>

<a href="#projects" className="work-link">

     View My Work

    <FaArrowRight />

 </a>

</div>

<div className="hero-right">

 <div className="hero-image">

 </div>
</div>

    </section>
  )
}

export default Hero