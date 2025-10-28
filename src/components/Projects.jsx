import React from "react";
import "../index.css";

export default function Projects() {
  const projects = [
    {
      title: "Calculator App",
      description: "A simple calculator app built with C# .NET.",
      tools: ["C#", ".NET", "WinForms"],
      link: "https://github.com/yourusername/calculator-app",
      icon: "fa-solid fa-calculator",
    },
    {
      title: "Derma AI App",
      description:
        "AI-powered skincare advisor focusing on frontend and prototype design.",
      tools: ["Python", "Flask", "OpenCV", "Figma"],
      link: "https://github.com/yourusername/derma-ai",
      icon: "fa-solid fa-wand-magic-sparkles",
    },
    {
      title: "Real Estate Website",
      description:
        "Responsive property listing site with filters and modern UI.",
      tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://github.com/yourusername/real-estate-website",
      icon: "fa-solid fa-house-chimney",
    },
    {
      title: "LifeEase",
      description:
        "Accessibility app designed to help people with disabilities live independently.",
      tools: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/lifeease-app",
      icon: "fa-solid fa-heart",
    },
    {
      title: "Sudoku Game",
      description:
        "A fun, logic-based Sudoku puzzle game built with JavaScript.",
      tools: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/yourusername/sudoku-game",
      icon: "fa-solid fa-table-cells-large",
    },
    {
      title: "Tic Tac Toe",
      description:
        "Classic Tic Tac Toe game implemented in JavaScript with AI mode.",
      tools: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/yourusername/tic-tac-toe",
      icon: "fa-solid fa-xmark",
    },
    {
      title: "Currency Converter",
      description:
        "An interactive app that converts currencies in real-time using APIs.",
      tools: ["JavaScript", "API", "HTML", "CSS"],
      link: "https://github.com/yourusername/currency-converter",
      icon: "fa-solid fa-coins",
    },
    {
      title: "Expense Tracker",
      description:
        "A React-based personal finance tracker for managing daily expenses.",
      tools: ["React", "Firebase", "CSS Modules"],
      link: "https://github.com/yourusername/expense-tracker",
      icon: "fa-solid fa-chart-line",
    },
    {
      title: "E-Commerce Product Page",
      description:
        "Fully responsive shopping cart with MySQL backend integration.",
      tools: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/yourusername/ecommerce-page",
      icon: "fa-solid fa-cart-shopping",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div id="project-sparkles"></div>
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="project-icon">
                <i className={proj.icon}></i>
              </div>

              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <div className="project-tools">
                {proj.tools.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
