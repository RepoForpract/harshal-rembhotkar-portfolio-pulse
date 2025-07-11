
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 px-6 md:px-12 flex flex-col justify-center">
      <div className="container mx-auto max-w-4xl">
        <p className="text-portfolioTeal mb-5 animate-fade-in" style={{animationDelay: '100ms'}}>Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-portfolioLightestSlate mb-4 animate-fade-in" style={{animationDelay: '200ms'}}>
          Harshal Rembhotkar.
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-portfolioSlate mb-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
         Just a 20 year old dev figuring things out.
        </h2>

        <p className="text-portfolioSlate max-w-xl text-lg mb-12 animate-fade-in" style={{animationDelay: '400ms'}}>
          I do Dev, I do Ops and I do it (most days).
        </p>
        <div className="animate-fade-in" style={{animationDelay: '500ms'}}>
          <Button
            asChild
            className="group button-primary"
          >
            <a href="#projects">
              Check out my projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
