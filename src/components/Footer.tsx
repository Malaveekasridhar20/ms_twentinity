import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Phone } from 'lucide-react';
import msLogo from '@/assets/ms-twentinity-logo.png';

const footerLinks = {
  services: [
    { name: 'Branding & Logo Design', href: '#' },
    { name: 'Web Design', href: '#' },
    { name: 'Graphic Design', href: '#' },
    { name: 'SEO Services', href: '#' },
    { name: 'Digital Marketing', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Work', href: '#portfolio' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
  support: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'FAQs', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/ms.twentinity?igsh=MXR2d201amhsMGJuNA==', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ms-twentinity-2613b83aa', label: 'LinkedIn' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <img 
                src={msLogo} 
                alt="MS TWENTINITY Logo" 
                className="w-32 h-32 object-contain"
              />
            </a>
            <p className="text-muted-foreground mb-6 max-w-md">
              We are a premium design agency specializing in branding, web design, and 
              digital solutions that help businesses connect with their audience and grow.
            </p>
            
            {/* Contact Info */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+919790731131" className="hover:text-primary transition-colors">
                  +91 9790731131
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:mstwentinity@gmail.com" className="hover:text-primary transition-colors">
                  mstwentinity@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          {/* Developer Credit */}
          <div className="text-center mb-4 pb-4 border-b border-border">
            <p className="text-muted-foreground text-sm mb-2">
              Website Developed By <span className="font-semibold text-foreground">Malaveeka Sridhar</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <a 
                href="https://www.linkedin.com/in/malaveeka-sridhar-750b70252" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <Linkedin className="w-3 h-3" />
                LinkedIn
              </a>
              <a 
                href="mailto:malaveekasridhar20072004@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Gmail: malaveekasridhar20072004@gmail.com
              </a>
              <a 
                href="https://www.instagram.com/malaveekasridhar/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <Instagram className="w-3 h-3" />
                Instagram
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 MS TWENTINITY. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
