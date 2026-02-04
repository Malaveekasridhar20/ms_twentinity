import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { scrollToElement } from '@/utils/smoothScroll';
import msLogo from '@/assets/ms-twentinity-logo.png';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Settings', href: '/settings' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Temporarily disable scroll listener to test if it's causing wobbling
  // useEffect(() => {
  //   let ticking = false;
  //   let lastScrollY = 0;
    
  //   const handleScroll = () => {
  //     if (!ticking) {
  //       requestAnimationFrame(() => {
  //         const currentScrollY = window.scrollY;
  //         // Only update if scroll position actually changed significantly
  //         if (Math.abs(currentScrollY - lastScrollY) > 5) {
  //           setIsScrolled(currentScrollY > 50);
  //           lastScrollY = currentScrollY;
  //         }
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };
    
  //   // Use passive listener for better performance
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      {/* Temporarily disable motion animations to test scrolling */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${
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
                  scrollToElement('contact', 80);
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
      </nav>

      {/* Mobile Menu - Temporarily disable animations */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-display font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
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
                </a>
              )
            ))}
            <div>
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#contact';
                  } else {
                    scrollToElement('contact', 80);
                  }
                }}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};