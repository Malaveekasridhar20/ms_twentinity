// Stable smooth scroll utility
export const smoothScrollTo = (target: string | number, duration: number = 800) => {
  const targetPosition = typeof target === 'string' 
    ? document.getElementById(target.replace('#', ''))?.offsetTop || 0
    : target;
  
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Easing function for smooth animation
    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    
    window.scrollTo(0, startPosition + distance * ease(progress));
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Smooth scroll to element
export const scrollToElement = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    smoothScrollTo(targetPosition);
  }
};

// Smooth scroll to top
export const scrollToTop = () => {
  smoothScrollTo(0);
};