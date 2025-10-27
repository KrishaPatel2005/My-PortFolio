import React, { useEffect, useState } from "react";
import "../index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  // Scroll shadow/elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy (active link underline)
  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const id = section.getAttribute("id");
        const top = section.offsetTop - 120; // offset for sticky navbar
        const height = section.offsetHeight;
        const y = window.scrollY;

        if (y >= top && y < top + height) {
          current = id === "hero" ? "home" : id;
        }
      });

      setActiveSection(current);
    };

    handler(); // run once on mount
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
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
          {/* Left: Logo / Name */}
          <div className="logo">
            <a href="#hero" onClick={closeMenu}>Krisha Patel</a>
          </div>

          {/* Center/Right: Links */}
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

          {/* Right: Theme toggle + Hamburger */}
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
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
