import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Malaika Kalsoom
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <a href="/MALAIKA_KALSOOM.pdf" className="resume-btn" onClick={() => setMenuOpen(false)}>
          Resume
        </a>

      </div>

    </nav>
  )
}

export default Navbar;