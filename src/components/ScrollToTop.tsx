import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToTop } from '@/utils/smoothScroll';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Temporarily disable scroll listener to test if it's causing wobbling
  // useEffect(() => {
  //   let ticking = false;
  //   let lastScrollY = 0;
    
  //   const toggleVisibility = () => {
  //     if (!ticking) {
  //       requestAnimationFrame(() => {
  //         const currentScrollY = window.pageYOffset;
  //         // Only update if scroll position changed significantly
  //         if (Math.abs(currentScrollY - lastScrollY) > 10) {
  //           setIsVisible(currentScrollY > 300);
  //           lastScrollY = currentScrollY;
  //         }
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener('scroll', toggleVisibility, { passive: true });
  //   return () => window.removeEventListener('scroll', toggleVisibility);
  // }, []);

  const handleScrollToTop = () => {
    scrollToTop();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={handleScrollToTop}
            size="icon"
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};