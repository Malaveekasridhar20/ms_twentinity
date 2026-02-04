import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter = ({ end, duration = 1500, suffix = '', className = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      
      // On mobile, start animation immediately after a short delay
      if (mobile && !hasAnimated.current) {
        setTimeout(() => {
          setIsVisible(true);
          hasAnimated.current = true;
        }, 500);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // On desktop, use intersection observer with minimal options
    if (!isMobile && !hasAnimated.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
            observer.disconnect(); // Disconnect immediately after triggering
          }
        },
        { 
          threshold: 0.1,
          rootMargin: '100px' // Start animation well before element is visible
        }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Use linear animation on mobile for better performance
      const easeFunction = isMobile ? progress : Math.min(progress * 1.5, 1);
      const currentCount = Math.floor(easeFunction * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Add small delay to prevent scroll interference
    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, isMobile ? 100 : 0);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration, isMobile]);

  return (
    <span 
      ref={counterRef} 
      className={className}
      data-mobile-always-visible={isMobile ? 'true' : undefined}
    >
      {count}{suffix}
    </span>
  );
};