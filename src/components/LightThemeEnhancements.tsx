import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Sparkles, Sun, Palette, Zap } from 'lucide-react';

export const LightThemeEnhancements = () => {
  const { mode } = useTheme();

  if (mode !== 'light') return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        {/* Light mode indicator */}
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatDelay: 5 
          }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 flex items-center justify-center shadow-lg"
        >
          <Sun className="w-6 h-6 text-orange-600" />
        </motion.div>

        {/* Enhancement indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3,
            delay: 3
          }}
          className="flex flex-col gap-1"
        >
          <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center shadow-sm">
            <Palette className="w-4 h-4 text-primary" />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center shadow-sm">
            <Zap className="w-4 h-4 text-primary" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Light theme showcase component
export const LightThemeShowcase = () => {
  const { mode } = useTheme();

  if (mode !== 'light') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-subtle rounded-card p-6 border border-gray-200 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 flex items-center justify-center">
          <Sun className="w-5 h-5 text-orange-600" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Enhanced Light Theme
          </h3>
          <p className="text-sm text-muted-foreground">
            Optimized for clarity and visual appeal
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
          <div className="w-full h-2 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full mb-2" />
          <div className="w-3/4 h-1 bg-gray-200 rounded-full mb-1" />
          <div className="w-1/2 h-1 bg-gray-200 rounded-full" />
        </div>
        
        <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
            <div className="w-3 h-3 rounded-full bg-primary/30" />
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full mb-1" />
          <div className="w-2/3 h-1 bg-gray-200 rounded-full" />
        </div>
      </div>

      <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
        <p className="text-xs text-primary font-medium">
          ✨ Enhanced shadows, improved contrast, and refined color palette
        </p>
      </div>
    </motion.div>
  );
};