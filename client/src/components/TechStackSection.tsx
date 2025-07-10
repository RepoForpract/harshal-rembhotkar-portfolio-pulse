import React from 'react';

const TechStackSection = () => {
  const techStack = [
    { name: "Go", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
    { name: "Rust", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg" },
    { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
       { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
    { name: "ArgoCD", icon: "https://raw.githubusercontent.com/argoproj/argo-cd/master/docs/assets/argo-cd-logo.svg" },
    { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    { name: "SQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
    { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
    { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
    { name: "Remix IDE", icon: "https://remix.ethereum.org/assets/logo.svg" }
    
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
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="text-portfolioLightestSlate">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;