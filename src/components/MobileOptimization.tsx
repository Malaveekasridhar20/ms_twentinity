import { useEffect } from 'react';
import heroGeometric from '@/assets/hero-geometric.jpg';

// Mobile optimization utilities
export const MobileOptimization = () => {
  useEffect(() => {
    // Prevent zoom on input focus for iOS
    const addMaximumScaleToMetaViewport = () => {
      const el = document.querySelector('meta[name=viewport]');
      if (el !== null) {
        let content = el.getAttribute('content');
        let re = /maximum\-scale=[0-9\.]+/g;
        if (re.test(content)) {
          content = content.replace(re, 'maximum-scale=1.0');
        } else {
          content = [content, 'maximum-scale=1.0'].join(', ');
        }
        el.setAttribute('content', content);
      }
    };

    const disableIosTextFieldZoom = addMaximumScaleToMetaViewport;

    // Disable zoom on input focus
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
    inputs.forEach((input) => {
      input.addEventListener('focus', disableIosTextFieldZoom, false);
      input.addEventListener('blur', () => {
        const el = document.querySelector('meta[name=viewport]');
        if (el !== null) {
          let content = el.getAttribute('content');
          content = content.replace(/maximum\-scale=[0-9\.]+/g, 'maximum-scale=5.0');
          el.setAttribute('content', content);
        }
      }, false);
    });

    // Optimize touch events
    document.addEventListener('touchstart', () => {}, { passive: true });
    document.addEventListener('touchmove', () => {}, { passive: true });

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero image
      const heroImage = new Image();
      heroImage.src = heroGeometric;
      
      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    preloadCriticalResources();

    // Cleanup
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('focus', disableIosTextFieldZoom);
      });
    };
  }, []);

  return null;
};

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => console.log('CLS:', metric));
        getFID((metric) => console.log('FID:', metric));
        getFCP((metric) => console.log('FCP:', metric));
        getLCP((metric) => console.log('LCP:', metric));
        getTTFB((metric) => console.log('TTFB:', metric));
      }).catch(() => {
        // Silently fail if web-vitals is not available
        console.log('Web Vitals monitoring not available');
      });
    }

    // Monitor page load performance
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart);
      console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.fetchStart);
      console.log('First Paint:', performance.getEntriesByType('paint')[0]?.startTime);
    });
  }, []);
};

// Image lazy loading utility
export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  ...props 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
  [key: string]: any;
}) => {
  useEffect(() => {
    // Intersection Observer for lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    return () => {
      images.forEach(img => imageObserver.unobserve(img));
    };
  }, []);

  return (
    <img
      data-src={src}
      alt={alt}
      className={`lazy ${className}`}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};