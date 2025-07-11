import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolioLightestSlate mb-6">Projects</h2>
          <div className="h-px bg-portfolioSlate/30 w-full max-w-xs mb-8"></div>
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-portfolioSlate text-lg mb-8">
            I love building things! You can explore all my projects and open source contributions on GitHub.
          </p>

          <Button
            asChild
            className="group button-primary"
          >
            <a href="https://github.com/harshal-rembhotkar" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;