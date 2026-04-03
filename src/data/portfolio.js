export const portfolioData = {
  skills: [
    {
      category: "Frontend",
      desc: "Proficient in React, Next.js, and modern CSS frameworks. Designing high-fidelity, responsive interfaces with clean architecture.",
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
      desc: "Engineering robust APIs with Node.js and PHP. Expert in templating engines and modular server logic.",
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
      desc: "Designing high-integrity data schemas and managing content ecosystems with WordPress and specialized tools.",
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
      desc: "Leading end-to-end development initiatives. Building universal CRUD engines and optimizing core WordPress systems for diverse client ecosystems.",
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
      desc: "A dynamic backend engine supporting multi-model operations with JWT security and high-integrity data schemas.",
      github: "https://github.com/hauntedcrewvkr",
      tech: [
        { name: "Node.js", logo: "nodejs.svg" },
        { name: "Express", logo: "express.svg", class: "logo-invert" },
        { name: "MongoDB", logo: "mongodb.svg" }
      ] 
    },
    { 
      title: "WP Core", 
      desc: "High-performance theme engine leveraging Timber and Blade templating for rapid enterprise-scale development.",
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
      desc: "Proprietary SCSS library focused on visual consistency, geometric grids, and high-velocity digital experiences.",
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
      desc: "Academic foundation and specialized linguistic training to bridge global communication gaps.",
      items: ["Higher Secondary (2016)", "Diploma in Japanese Language (2019)"]
    },
    {
      label: "Languages",
      desc: "Trilingual proficiency enabling collaboration across diverse technical and cultural landscapes.",
      items: ["Hindi", "English", "Japanese"]
    },
    {
      label: "Interests",
      desc: "Creative and strategic pursuits that fuel problem-solving and logical thinking.",
      items: ["Gaming & Strategic Logic", "Singing & Creative Expression"]
    }
  ]
};
