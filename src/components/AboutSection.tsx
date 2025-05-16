
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolioLightestSlate mb-6">About Me</h2>
          <div className="h-px bg-portfolioSlate/30 w-full max-w-xs mb-8"></div>
        </div>
        
        <div className="animate-fade-in">
          <p className="mb-4 text-portfolioSlate">
            I'm Web3 enthusiast and aspiring software developer passionate about building decentralized applications and exploring the future of the internet.
          </p>
          <p className="mb-4 text-portfolioSlate">
            My goal is to create software solutions that are not only efficient and reliable but also delightful to use and easy to maintain.
          </p>
          <p className="mb-4 text-portfolioSlate">
            When I'm not coding, I enjoy writing technical blogs, exploring new technologies, and sharing knowledge with the community.
          </p>
          <div className="mt-8">
            <a 
              href="/harshal's resume.pdf" 
              download 
              className="button-primary inline-flex items-center"
            >
              Download Resume
            </a>
            <p className="mt-4 text-sm text-portfolioSlate">
              <span className="text-portfolioTeal"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
