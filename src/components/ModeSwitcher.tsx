import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export const ModeSwitcher = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      className="fixed top-20 left-6 z-50"
    >
      <Button
        onClick={toggleMode}
        size="lg"
        variant="outline"
        className="w-14 h-14 rounded-full bg-card border-border hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      >
        <motion.div
          key={mode}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {mode === 'light' ? (
            <Moon className="w-6 h-6 text-foreground" />
          ) : (
            <Sun className="w-6 h-6 text-foreground" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};

// Compact mode switcher for mobile
export const CompactModeSwitcher = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <Button
      onClick={toggleMode}
      size="sm"
      variant="ghost"
      className="w-10 h-10 rounded-full p-0"
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        key={mode}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {mode === 'light' ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </motion.div>
    </Button>
  );
};