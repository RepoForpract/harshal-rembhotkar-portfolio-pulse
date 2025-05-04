
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <div className="section-heading">
          <span className="section-heading-number">01.</span>
          <h2 className="section-heading-text">About Me</h2>
          <div className="section-heading-line"></div>
        </div>
        
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-2/3 animate-fade-in">
            <p className="mb-4">
              I'm obsessed with building powerful, scalable backends that make everything run smoothly and keep users coming back for more.
            </p>
            <p className="mb-4">
              My goal is to create software solutions that are not only efficient and reliable but also delightful to use and easy to maintain.
            </p>
            <p className="mb-4">
              When I'm not coding, I enjoy writing technical blogs, exploring new technologies, and sharing knowledge with the community.
            </p>
            <div className="mt-8">
              <a 
                href="/resume.pdf" 
                download 
                className="button-primary inline-flex items-center"
              >
                Download Resume
              </a>
              <p className="mt-4 text-sm text-portfolioSlate">
                <span className="text-portfolioTeal">Note:</span> Please place a PDF file named "resume.pdf" in the "public" folder of your project for the download to work.
              </p>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center animate-fade-in" style={{animationDelay: '200ms'}}>
            <div className="relative group">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 border-2 border-portfolioTeal rounded-md transform translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-portfolioTeal/10 rounded-md"></div>
                <img 
                  src="/avatar.jpg" 
                  alt="Harshal Rembhotkar" 
                  className="w-full h-full object-cover rounded-md relative z-10"
                />
                <div className="absolute inset-0 bg-portfolioTeal/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
