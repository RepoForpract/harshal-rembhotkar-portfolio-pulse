import React from 'react';
import { Mail, Github, Linkedin, MapPin, Twitter } from 'lucide-react';

// Custom Telegram Icon
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

// ✅ Fixed: Full Discord SVG Icon
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.865-.608 1.25-1.845-.276-3.68-.276-5.487 0-.164-.393-.406-.874-.618-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.68 4.37a.07.07 0 0 0-.032.028C.533 9.046-.319 13.58.099 18.058a.082.082 0 0 0 .031.056c2.053 1.507 4.041 2.423 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106c-.653-.248-1.274-.55-1.872-.892a.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.06 0a.074.074 0 0 1 .079.01c.12.1.246.199.373.293a.077.077 0 0 1-.007.127c-.563.343-1.185.645-1.873.891a.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.961-.607 3.95-1.522 6.002-3.03a.077.077 0 0 0 .031-.056c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 0 0-.032-.028zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419 0-1.334.956-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419-.019 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.334.956-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419z"/>
  </svg>
);

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

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Contact Info */}
          <div>
            <h3 className="text-xl text-portfolioLightestSlate font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-portfolioTeal/20 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-portfolioTeal" />
                </div>
                <div>
                  <p className="text-portfolioLightSlate text-sm">Email me at</p>
                  <a 
                    href="mailto:harshalrembhotkar94@gmail.com" 
                    className="text-portfolioLightestSlate hover:text-portfolioTeal transition-colors"
                  >
                    harshalrembhotkar94@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-portfolioTeal/20 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-portfolioTeal" />
                </div>
                <div>
                  <p className="text-portfolioLightSlate text-sm">Location</p>
                  <p className="text-portfolioLightestSlate">Pune, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Socials */}
          <div>
            <h3 className="text-xl text-portfolioLightestSlate font-semibold mb-6">Connect</h3>
            <p className="text-portfolioSlate mb-6">
              Hit me up on socials, I'd love to stay in touch!
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/harshal-rembhotkar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="bg-portfolioNavy/50 hover:bg-portfolioTeal/20 p-3 rounded-full transition-colors">
                <Github className="h-5 w-5 text-portfolioLightestSlate" />
              </a>
              <a href="https://linkedin.com/in/harshal-rembhotkar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="bg-portfolioNavy/50 hover:bg-portfolioTeal/20 p-3 rounded-full transition-colors">
                <Linkedin className="h-5 w-5 text-portfolioLightestSlate" />
              </a>
              <a href="https://x.com/harshalstwt" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="bg-portfolioNavy/50 hover:bg-portfolioTeal/20 p-3 rounded-full transition-colors">
                <Twitter className="h-5 w-5 text-portfolioLightestSlate" />
              </a>
              <a href="https://t.me/harshalrembhotkar" target="_blank" rel="noopener noreferrer" aria-label="Telegram"
                className="bg-portfolioNavy/50 hover:bg-portfolioTeal/20 p-3 rounded-full transition-colors">
                <TelegramIcon className="h-5 w-5 text-portfolioLightestSlate" />
              </a>
              <a href="https://discord.com/users/harshalr97" target="_blank" rel="noopener noreferrer" aria-label="Discord"
                className="bg-portfolioNavy/50 hover:bg-portfolioTeal/20 p-3 rounded-full transition-colors">
                <DiscordIcon className="h-5 w-5 text-portfolioLightestSlate" />
              </a>
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
