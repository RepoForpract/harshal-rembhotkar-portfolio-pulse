
import React from 'react';

// These are just placeholders using emoji for now
// In a real app, you would use actual SVG logos or images
const techStack = [
  { name: "Go", icon: "🔵" },
  { name: "Python", icon: "🐍" },
  { name: "C++", icon: "🔧" },
  { name: "Java", icon: "☕" },
  { name: "JavaScript", icon: "💛" },
  { name: "Rust", icon: "🦀" },
  { name: "Docker", icon: "🐳" },
  { name: "ArgoCD", icon: "🚀" },
  { name: "Git", icon: "📦" },
  { name: "SQL", icon: "🗄️" },
  { name: "VS Code", icon: "📝" }
];

const TechStackSection = () => {
  return (
    <section id="tech" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="section-heading">
          <span className="section-heading-number">05.</span>
          <h2 className="section-heading-text">Tech Stack</h2>
          <div className="section-heading-line"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="glass-card p-4 rounded-lg flex flex-col items-center justify-center text-center animate-fade-in hover:translate-y-[-5px] transition-all duration-300"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="text-3xl mb-2 animate-float" style={{animationDelay: `${index * 200}ms`}}>
                {tech.icon}
              </div>
              <span className="text-portfolioLightSlate">{tech.name}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in" style={{animationDelay: '600ms'}}>
          <p className="text-portfolioSlate">Always exploring new technologies and tools to improve my development workflow.</p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
