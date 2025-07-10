
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogsSection from '@/components/BlogsSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolioNavy">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <BlogsSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
