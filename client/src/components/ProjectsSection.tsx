
import React from 'react';
import { ArrowRight, Github, Link, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "FetchYT",
    description: "Developed a web app using Go and modern frontend tech to download YouTube videos by URL, supporting multiple formats and resolutions with background processing.",
    tags: ["Go", "FFmpeg", "Javascript","HTML", "CSS"],
    github: "https://github.com/harshal-rembhotkar/fetchyt"
  },
  {
    title: "Book Sphere",
    description: "Developed a RESTful API for efficient bookstore management. Leveraged MySQL for seamless database integration.",
    tags: ["Go", "Mux", "MySQL", "GORM"],
    github: "https://github.com/harshal-rembhotkar/Book-Sphere"
  },
  {
    title: "ActixPress        (Under development)",
    description: "Built a Blogging website using Actix Web 3. Designed with both performance and developer experience in mind, ActixPress lets users publish and manage blog posts effortlessly.",
    tags: ["Rust", "Actix web3", "Javascript","HTML", "CSS"],
    github: "https://github.com/harshal-rembhotkar/actixpress"
  },
  {
    title: "WebApp DevOps",
    description: "This project demonstrates a fully containerized Java backend application, including a complete CI/CD pipeline, Kubernetes deployment, and monitoring setup. It integrates best practices for containerization, automated deployment, and observability.",
    tags: ["Docker", "Kubernetes", "GitHub Actions", "ArgoCD","Monitoring tools"],
    github: "https://github.com/harshal-rembhotkar/web-app-devops"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolioLightestSlate mb-6">Projects</h2>
          <div className="h-px bg-portfolioSlate/30 w-full max-w-xs mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg flex flex-col h-full animate-fade-in hover:translate-y-[-5px] transition-transform duration-300"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="flex items-start justify-between mb-4">
                <Code className="h-5 w-5 text-portfolioTeal" />
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-portfolioSlate hover:text-portfolioTeal transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-portfolioSlate hover:text-portfolioTeal transition-colors">
                    <Link className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-portfolioLightestSlate text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-portfolioSlate flex-grow mb-4">{project.description}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap -m-1">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in" style={{animationDelay: '500ms'}}>
          <Button
            asChild
            className="group button-primary"
          >
            <a href="https://github.com/harshal-rembhotkar" target="_blank" rel="noopener noreferrer">
              See more on GitHub
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
