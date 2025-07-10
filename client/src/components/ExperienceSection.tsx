import React from 'react';
import { Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Liquidos.ai",
      role: "Founding Engineering Intern",
      startDate: "July 2025",
      endDate: "Present",
      responsibilities: [
        "Working on founding engineering projects for AI-powered liquidity solutions.",
        "Developing core infrastructure and features for the platform.",
        "Collaborating with the founding team on product development."
      ]
    },
    
    {
      company: "CoindPay",
      role: "Developer Community Ambassador",
      startDate: "Jun 2024",
      endDate: "Jul 2024",
      responsibilities: [
        "Engaged with the developer community to promote CoindPay's payment solutions.",
        
      ]
    },
    {
      company: "Hashnode",
      role: "Technical Writer",
      startDate: "Feb 2024",
      endDate: "Present",
      responsibilities: [
        "I write technical blogs on open source, DevOps, and Development.",
        "Each post reaches an audience of 100+ readers and offering valuable insights for learners."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-portfolioNavy/30">
      <div className="container mx-auto max-w-4xl">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolioLightestSlate mb-6">Experience</h2>
          <div className="h-px bg-portfolioSlate/30 w-full max-w-xs mb-8"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="glass-card p-6 animate-fade-in"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl text-portfolioLightestSlate font-semibold">
                  {exp.role} <span className="text-portfolioTeal">@ {exp.company}</span>
                </h3>
                <div className="flex items-center text-portfolioSlate mt-2 md:mt-0">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{exp.startDate} - {exp.endDate}</span>
                </div>
              </div>
              <ul className="space-y-2 text-portfolioLightSlate">
                {exp.responsibilities?.map((resp, idx) => (
                  <li key={idx} className="flex">
                    <span className="text-portfolioTeal mr-2">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;