import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// CSS 3D Transform animations
export const CSS3DAnimations = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 4 }}>
      {/* 3D Rotating Cubes */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 opacity-5"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 180],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="cube-3d">
              <div className="cube-face cube-front bg-primary/10" />
              <div className="cube-face cube-back bg-primary/8" />
              <div className="cube-face cube-right bg-primary/12" />
              <div className="cube-face cube-left bg-primary/6" />
              <div className="cube-face cube-top bg-primary/15" />
              <div className="cube-face cube-bottom bg-primary/5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Parallax 3D Layers */}
      <motion.div
        className="absolute inset-0"
        style={{
          transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              transform: `translateZ(${i * 50}px)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              className={`absolute w-full h-full opacity-${2 + i} bg-gradient-to-br from-primary/5 to-transparent`}
              style={{
                clipPath: `polygon(${10 + i * 10}% 0%, 100% ${20 + i * 15}%, ${90 - i * 10}% 100%, 0% ${80 - i * 15}%)`,
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* 3D Spiral Animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-primary/20 rounded-full"
            style={{
              transformOrigin: '0 0',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 180],
            }}
            transition={{
              duration: 10,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
            initial={{
              x: Math.cos((i * Math.PI * 2) / 12) * 100,
              y: Math.sin((i * Math.PI * 2) / 12) * 100,
              z: i * 10,
            }}
          />
        ))}
      </div>

      {/* Morphing 3D Shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="pyramid-3d">
          <div className="pyramid-face pyramid-base bg-primary/8" />
          <div className="pyramid-face pyramid-front bg-primary/12" />
          <div className="pyramid-face pyramid-right bg-primary/10" />
          <div className="pyramid-face pyramid-back bg-primary/6" />
          <div className="pyramid-face pyramid-left bg-primary/14" />
        </div>
      </motion.div>

      {/* Floating 3D Rings */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-primary/10 rounded-full"
            style={{
              width: 100 + i * 50,
              height: 100 + i * 50,
              left: `${30 + i * 20}%`,
              top: `${40 + i * 10}%`,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: [0, 360],
              rotateZ: [0, -360],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};