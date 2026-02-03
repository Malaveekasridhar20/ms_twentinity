import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import msLogo from '@/assets/ms-twentinity-logo.png';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'nav-scrolled py-1' : 'py-2'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between min-h-[80px] py-1">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src={msLogo} 
              alt="MS TWENTINITY Logo" 
              className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-300"
              style={{ 
                filter: 'contrast(1.1) brightness(1.05)',
                imageRendering: 'crisp-edges'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium link-underline text-lg"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      // If it's a hash link and we're not on the home page, navigate to home first
                      if (window.location.pathname !== '/') {
                        e.preventDefault();
                        window.location.href = '/' + link.href;
                      }
                    }
                  }}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium link-underline text-lg"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919790731131" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium text-lg">+91 9790731131</span>
            </a>
            <Button 
              variant="default" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 text-lg"
              onClick={() => {
                if (window.location.pathname !== '/') {
                  window.location.href = '/#contact';
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                link.href.startsWith('/') ? (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-display font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (link.href.startsWith('#')) {
                        // If it's a hash link and we're not on the home page, navigate to home first
                        if (window.location.pathname !== '/') {
                          e.preventDefault();
                          window.location.href = '/' + link.href;
                        }
                      }
                    }}
                    className="text-3xl font-display font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                )
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button 
                  variant="default" 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#contact';
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
