import React from 'react';
import { Mail, Github, Linkedin, MapPin, Twitter } from 'lucide-react';

const ContactSection = () => {
        return (
          <section id="contact" className="py-24 px-6 md:px-12">
            <div className="container mx-auto max-w-6xl">
              <div className="section-heading text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-portfolioLightestSlate mb-6">Get In Touch</h2>
                <p className="text-portfolioSlate max-w-lg mx-auto mb-12 animate-fade-in">
                  I'm currently looking for new opportunities and my inbox is always open. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl text-portfolioLightestSlate font-semibold mb-6 text-center">Contact Information</h3>

                    <div className="space-y-6">
                      <div className="flex items-start justify-center">
                        <div className="bg-portfolioTeal/20 p-3 rounded-lg mr-4">
                          <Mail className="h-5 w-5 text-portfolioTeal" />
                        </div>
                        <div>
                          <p className="text-portfolioLightSlate text-sm">Email me at</p>
                          <a href="mailto:harshalrembhotkar94@gmail.com" className="text-portfolioLightestSlate hover:text-portfolioTeal transition-colors">
                            harshalrembhotkar94@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start justify-center">
                        <div className="bg-portfolioTeal/20 p-3 rounded-lg mr-4">
                          <MapPin className="h-5 w-5 text-portfolioTeal" />
                        </div>
                        <div>
                          <p className="text-portfolioLightSlate text-sm">Location</p>
                          <p className="text-portfolioLightestSlate">
                            Pune, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl text-portfolioLightestSlate font-semibold mb-6 text-center">Connect</h3>
                    <p className="text-portfolioSlate mb-6 text-center">
                      Follow me on social handles.
                    </p>

                    <div className="flex space-x-4 justify-center">
                      <a 
                        href="https://github.com/harshal-rembhotkar" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-portfolioNavy/50 hover:bg-portfolioTeal/20 p-3 rounded-full transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5 text-portfolioLightestSlate" />
                      </a>
                      <a 
                        href="https://linkedin.com/in/harshal-rembhotkar" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-portfolioNavy/50 hover:bg-portfolioTeal/20 p-3 rounded-full transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5 text-portfolioLightestSlate" />
                      </a>
                      <a 
                        href="https://x.com/harshalstwt" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-portfolioNavy/50 hover:bg-portfolioTeal/20 p-3 rounded-full transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5 text-portfolioLightestSlate" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-16 text-center text-xs text-portfolioSlate animate-fade-in">
              © 2025 Harshal Rembhotkar. All rights reserved.
              </p>
            </div>
          </section>
        );
      };

      export default ContactSection;