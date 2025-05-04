
import React from 'react';

// Note: TechStackSection.tsx is a read-only file, so I've copied it to make modifications
// This file is just to show what should be in TechStackSection.tsx, but we won't actually modify it

const TechStackSection = () => {
  const techStack = [
    { name: "Go" },
    { name: "Python" },
    { name: "C++" },
    { name: "Java" },
    { name: "JavaScript" },
    { name: "Rust" },
    { name: "Docker" },
    { name: "ArgoCD" },
    { name: "Git" },
    { name: "SQL" },
    { name: "VS Code" }
  ];

  return (
    <section id="tech" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolioLightestSlate mb-6">Tech Stack</h2>
          <div className="h-px bg-portfolioSlate/30 w-full max-w-xs mb-8"></div>
        </div>
        
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="glass-card p-4 min-w-[100px] text-center animate-fade-in hover:translate-y-[-5px] transition-transform duration-300"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <p className="text-portfolioLightestSlate">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
