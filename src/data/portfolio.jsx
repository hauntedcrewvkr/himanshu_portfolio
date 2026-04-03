import React from 'react';

export const portfolioData = {
  skills: [
    {
      category: "Frontend",
      desc: <>Proficient in <strong>React</strong>, <strong>Next.js</strong>, and modern CSS frameworks. Designing <strong>high-fidelity</strong>, responsive interfaces with clean architecture.</>,
      items: [
        { name: "React.js", logo: "reactjs.svg" },
        { name: "Next.js", logo: "nextjs.svg", class: "logo-invert" },
        { name: "ES6+", logo: "js.svg" },
        { name: "HTML5", logo: "html.svg" },
        { name: "CSS3", logo: "css.svg" },
        { name: "Sass", logo: "sass.svg" },
        { name: "Bootstrap", logo: "bootstrap.svg" },
        { name: "jQuery", logo: "jquery.svg" },
        { name: "Chart.js", logo: "chartjs.svg" }
      ]
    },
    {
      category: "Backend",
      desc: <>Engineering <strong>robust APIs</strong> with <strong>Node.js</strong> and <strong>PHP</strong>. Expert in templating engines and modular server logic.</>,
      items: [
        { name: "Node.js", logo: "nodejs.svg" },
        { name: "Express", logo: "express.svg", class: "logo-invert" },
        { name: "PHP", logo: "php.svg" },
        { name: "Symfony", logo: "symfony.svg", class: "logo-invert" },
        { name: "Blade", logo: "blade.svg" },
        { name: "Twig", logo: "twig.svg" },
        { name: "Timber", logo: "timber.svg", class: "logo-invert" }
      ]
    },
    {
      category: "Data & CMS",
      desc: <>Designing <strong>high-integrity data schemas</strong> and managing content ecosystems with <strong>WordPress</strong> and specialized tools.</>,
      items: [
        { name: "MongoDB", logo: "mongodb.svg" },
        { name: "MySQL", logo: "mysql.svg", class: "logo-invert" },
        { name: "WordPress", logo: "wordpress.svg" },
        { name: "Git", logo: "git.svg" },
        { name: "GitHub", logo: "github.svg" }
      ]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "PIXEL2HTML",
      period: "2021 — PRESENT",
      desc: <>Leading <strong>end-to-end development</strong> initiatives. Building universal <strong>CRUD engines</strong> and optimizing core <strong>WordPress systems</strong>.</>,
      details: [
        "Engineered model-driven CRUD systems reducing boilerplate by 40%.",
        "Integrated modern templating engines for high-performance rendering.",
        "Spearheaded transition from static designs to dynamic digital systems."
      ]
    }
  ],
  projects: [
    { 
      title: "Universal CRUD", 
      desc: <>A dynamic <strong>backend engine</strong> supporting multi-model operations with <strong>JWT security</strong> and data schemas.</>,
      github: "https://github.com/hauntedcrewvkr",
      tech: [
        { name: "Node.js", logo: "nodejs.svg" },
        { name: "Express", logo: "express.svg", class: "logo-invert" },
        { name: "MongoDB", logo: "mongodb.svg" }
      ] 
    },
    { 
      title: "WP Core", 
      desc: <>High-performance theme engine leveraging <strong>Timber</strong> and <strong>Blade</strong> templating for rapid development.</>,
      github: "https://github.com/hauntedcrewvkr",
      tech: [
        { name: "PHP", logo: "php.svg" },
        { name: "Blade", logo: "blade.svg" },
        { name: "Timber", logo: "timber.svg", class: "logo-invert" },
        { name: "Sass", logo: "sass.svg" }
      ] 
    },
    { 
      title: "UI Framework", 
      desc: <>Proprietary <strong>SCSS library</strong> focused on visual consistency and <strong>high-velocity</strong> digital experiences.</>,
      github: "https://github.com/hauntedcrewvkr",
      tech: [
        { name: "SCSS", logo: "sass.svg" },
        { name: "React", logo: "reactjs.svg" }
      ] 
    }
  ],
  meta: [
    {
      label: "Education",
      desc: <>Academic foundation and specialized <strong>linguistic training</strong> to bridge global communication gaps.</>,
      items: ["Higher Secondary (2016)", "Diploma in Japanese Language (2019)"]
    },
    {
      label: "Languages",
      desc: <><strong>Trilingual proficiency</strong> enabling collaboration across diverse technical and cultural landscapes.</>,
      items: ["Hindi", "English", "Japanese"]
    },
    {
      label: "Interests",
      desc: <>Creative and strategic pursuits that fuel <strong>problem-solving</strong> and <strong>logical thinking</strong>.</>,
      items: ["Gaming & Strategic Logic", "Singing & Creative Expression"]
    }
  ]
};
