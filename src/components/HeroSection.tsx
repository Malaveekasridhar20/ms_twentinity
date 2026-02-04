import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { scrollToElement } from '@/utils/smoothScroll';
import heroGeometric from '@/assets/hero-geometric.jpg';
import { AnimatedBackground, Floating3DElements, GeometricGrid } from '@/components/AnimatedBackground';
import { CSS3DAnimations } from '@/components/CSS3DAnimations';

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showText, setShowText] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Check theme
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                    (!document.documentElement.classList.contains('light') && 
                     window.matchMedia('(prefers-color-scheme: dark)').matches);
      setIsDarkTheme(isDark);
    };

    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isDarkTheme) return; // Only run video logic in dark theme

    const handleTimeUpdate = () => {
      const timeRemaining = video.duration - video.currentTime;
      // Show text 3 seconds before video ends
      if (timeRemaining <= 3 && !showText) {
        setShowText(true);
      }
    };

    const handleVideoEnd = () => {
      setVideoEnded(true);
      // Keep text visible and pause on last frame
      setShowText(true);
      video.pause();
    };

    const handleLoadedData = () => {
      // Ensure video plays only once
      video.loop = false;
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [showText, isDarkTheme]);

  // Show text immediately in light theme
  useEffect(() => {
    if (!isDarkTheme) {
      setShowText(true);
    }
  }, [isDarkTheme]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-radial-bg scene-3d">
      {/* Dark Theme - Video Background */}
      {isDarkTheme && (
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="metadata"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
      )}

      {/* Light Theme - Original Background */}
      {!isDarkTheme && (
        <>
          {/* 3D Animated Background Layers */}
          <AnimatedBackground />
          <Floating3DElements />
          <GeometricGrid />
          <CSS3DAnimations />
          
          {/* Background Image with 3D effect */}
          <div className="absolute inset-0" style={{ zIndex: 5 }}>
            <img
              src={heroGeometric}
              alt="Abstract geometric design"
              className="w-full h-full object-cover opacity-20 transform-3d hover-tilt"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/60 to-background" />
          </div>
        </>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20" style={{ zIndex: 10 }}>
        <div className="max-w-4xl">
          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showText ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.p
              initial={{ x: isDarkTheme ? -100 : 0, opacity: isDarkTheme ? 0 : 1 }}
              animate={{ 
                x: showText ? 0 : (isDarkTheme ? -100 : 0), 
                opacity: showText ? 1 : (isDarkTheme ? 0 : 1)
              }}
              transition={{ duration: isDarkTheme ? 0.8 : 0.6, delay: isDarkTheme ? 0.1 : 0.2 }}
              className={`text-base sm:text-lg mb-2 sm:mb-4 font-medium ${
                isDarkTheme 
                  ? 'text-white drop-shadow-lg' 
                  : 'text-muted-foreground'
              }`}
            >
              Premium Digital Agency - Trichy, Tamil Nadu
            </motion.p>

            <div className="overflow-hidden mb-3 sm:mb-6">
              <motion.h1
                initial={{ x: isDarkTheme ? -150 : 0, y: isDarkTheme ? 0 : 100, opacity: isDarkTheme ? 0 : 0 }}
                animate={{ 
                  x: showText ? 0 : (isDarkTheme ? -150 : 0),
                  y: showText ? 0 : (isDarkTheme ? 0 : 100),
                  opacity: showText ? 1 : 0
                }}
                transition={{ duration: isDarkTheme ? 1 : 0.8, delay: isDarkTheme ? 0.3 : 0.3 }}
                className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight ${
                  isDarkTheme 
                    ? 'text-white drop-shadow-2xl' 
                    : 'text-foreground'
                }`}
              >
                Innovative
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-4 sm:mb-6">
              <motion.h1
                initial={{ x: isDarkTheme ? -200 : 0, y: isDarkTheme ? 0 : 100, opacity: isDarkTheme ? 0 : 0 }}
                animate={{ 
                  x: showText ? 0 : (isDarkTheme ? -200 : 0),
                  y: showText ? 0 : (isDarkTheme ? 0 : 100),
                  opacity: showText ? 1 : 0
                }}
                transition={{ duration: isDarkTheme ? 1.2 : 0.8, delay: isDarkTheme ? 0.5 : 0.5 }}
                className={`font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight ${
                  isDarkTheme 
                    ? 'text-white drop-shadow-2xl' 
                    : 'text-foreground'
                }`}
              >
                <span className={`text-primary ${isDarkTheme ? 'drop-shadow-lg' : ''}`}>Digital</span> Solutions
              </motion.h1>
            </div>

            <motion.h2
              initial={{ x: isDarkTheme ? -100 : 0, opacity: isDarkTheme ? 0 : 0 }}
              animate={{ 
                x: showText ? 0 : (isDarkTheme ? -100 : 0), 
                opacity: showText ? 1 : 0
              }}
              transition={{ duration: isDarkTheme ? 0.8 : 0.6, delay: isDarkTheme ? 0.7 : 0.7 }}
              className={`text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 ${
                isDarkTheme 
                  ? 'text-white drop-shadow-lg' 
                  : 'text-foreground'
              }`}
            >
              Fresh Web Design, SEO & Digital Marketing Services
            </motion.h2>

            <motion.p
              initial={{ x: isDarkTheme ? -80 : 0, opacity: isDarkTheme ? 0 : 0 }}
              animate={{ 
                x: showText ? 0 : (isDarkTheme ? -80 : 0), 
                opacity: showText ? 1 : 0
              }}
              transition={{ duration: isDarkTheme ? 0.8 : 0.6, delay: isDarkTheme ? 0.9 : 0.9 }}
              className={`text-sm sm:text-base md:text-lg max-w-2xl mb-6 sm:mb-10 leading-relaxed ${
                isDarkTheme 
                  ? 'text-white/90 drop-shadow-md' 
                  : 'text-muted-foreground'
              }`}
            >
              Experience fresh perspectives and innovative digital solutions from our team. 
              We specialize in modern web design, strategic SEO, and creative digital marketing 
              that helps businesses establish their online presence with cutting-edge approaches.
            </motion.p>

            <motion.div
              initial={{ x: isDarkTheme ? -60 : 0, opacity: isDarkTheme ? 0 : 0 }}
              animate={{ 
                x: showText ? 0 : (isDarkTheme ? -60 : 0), 
                opacity: showText ? 1 : 0
              }}
              transition={{ duration: isDarkTheme ? 0.8 : 0.6, delay: isDarkTheme ? 1.1 : 1.1 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className={`bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group btn-arrow w-full sm:w-auto ${
                  isDarkTheme ? 'shadow-xl' : ''
                }`}
                onClick={() => {
                  scrollToElement('contact', 80);
                }}
              >
                Get Quote
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto ${
                  isDarkTheme 
                    ? 'border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/60 shadow-lg'
                    : 'border-foreground/20 text-foreground hover:bg-foreground/10'
                }`}
                onClick={() => {
                  window.location.href = '/services';
                }}
              >
                View Our Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showText ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 hidden md:block"
      >
        <a
          href="#portfolio"
          onClick={(e) => {
            e.preventDefault();
            scrollToElement('portfolio', 80);
          }}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 ${
            isDarkTheme 
              ? 'border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-primary/10 shadow-lg'
              : 'border-foreground/20 text-foreground hover:bg-foreground/10'
          }`}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
