
import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-portfolioTeal mb-5 animate-fade-in">06. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-portfolioLightestSlate mb-6 animate-fade-in">Get In Touch</h2>
        <p className="text-portfolioSlate max-w-lg mx-auto mb-12 animate-fade-in">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="animate-fade-in">
          <Button
            asChild
            className="button-primary"
          >
            <a href="mailto:harshalrembhotkar94@gmail.com">
              Say Hello
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="mt-16 flex justify-center space-x-8 animate-fade-in">
          <a 
            href="https://github.com/harshal-rembhotkar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolioSlate hover:text-portfolioTeal transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/harshal-rembhotkar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolioSlate hover:text-portfolioTeal transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:harshalrembhotkar94@gmail.com"
            className="text-portfolioSlate hover:text-portfolioTeal transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
        
        <p className="mt-16 text-xs text-portfolioSlate animate-fade-in">
          Designed & Built by Harshal Rembhotkar
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
