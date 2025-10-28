import React, { useEffect, useState } from "react";
import "../index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const id = section.getAttribute("id");
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const y = window.scrollY;

        if (y >= top && y < top + height) {
          current = id === "hero" ? "home" : id;
        }
      });

      setActiveSection(current);
    };

    handleActiveSection();
    window.addEventListener("scroll", handleActiveSection, { passive: true });
    window.addEventListener("resize", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
      window.removeEventListener("resize", handleActiveSection);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { id: "home", href: "#hero", label: "Home" },
    { id: "about", href: "#about", label: "About" },
    { id: "projects", href: "#projects", label: "Projects" },
    { id: "skills", href: "#skills", label: "Skills" },
    { id: "education", href: "#education", label: "Education" },
    { id: "services", href: "#services", label: "Services" },
    { id: "contact", href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <a href="#hero" onClick={closeMenu}>Krisha Patel</a>
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`} id="navLinks">
            {navItems.map(({ id, href, label }) => (
              <li key={id}>
                <a
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle color theme"
              onClick={toggleTheme}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="theme-dot" />
              {theme === "dark" ? "Light" : "Dark"}
            </button>

            <button
              type="button"
              className={`hamburger ${menuOpen ? "active" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="navLinks"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
