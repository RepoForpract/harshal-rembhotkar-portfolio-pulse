
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, MapPin, SendHorizonal, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("7uGtmvDna5QCqLzVdY"); // Replace with your actual EmailJS public key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Harshal Rembhotkar",
      };

      await emailjs.send(
        "service_g3qjc9v", // Replace with your actual EmailJS service ID
        "template_dzjlmw5", // Replace with your actual EmailJS template ID
        templateParams
      );

      toast({
        title: "Success!",
        description: "Your message has been sent. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl text-portfolioLightestSlate font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
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
                
                <div className="flex items-start">
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
              <h3 className="text-xl text-portfolioLightestSlate font-semibold mb-6">Connect</h3>
              <p className="text-portfolioSlate mb-6">
                Follow me on social handles.
              </p>
              
              <div className="flex space-x-4">
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
          
          {/* Contact Form */}
          <div className="bg-portfolioNavy/30 p-6 rounded-lg glass-card">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-portfolioLightSlate block mb-2">Your Name</label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="bg-portfolioNavy/50 border-portfolioSlate/30 text-portfolioLightestSlate focus-visible:ring-portfolioTeal"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-portfolioLightSlate block mb-2">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-portfolioNavy/50 border-portfolioSlate/30 text-portfolioLightestSlate focus-visible:ring-portfolioTeal"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-portfolioLightSlate block mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="How can I help you?" 
                  className="bg-portfolioNavy/50 border-portfolioSlate/30 text-portfolioLightestSlate focus-visible:ring-portfolioTeal min-h-[150px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-portfolioTeal hover:bg-portfolioTeal/80 text-portfolioNavy font-medium flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <SendHorizonal className="ml-2 h-4 w-4" />}
              </Button>
            </form>
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
