import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Blog', href: '#blog' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech', href: '#tech' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'bg-portfolioNavy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-portfolioTeal font-semibold text-3xl">HR</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="nav-link text-sm"
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-portfolioLightSlate hover:text-portfolioTeal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        'fixed top-0 right-0 h-screen bg-portfolioNavy/95 w-3/4 z-50 transform transition-transform duration-300 ease-in-out py-24 px-8 backdrop-blur-md',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="nav-link text-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
