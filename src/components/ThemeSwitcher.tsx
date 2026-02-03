import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme, Theme } from '@/contexts/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, mode, setTheme, toggleMode, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-20 right-6 z-50">
      {/* Theme Toggle Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Change theme"
        >
          <Palette className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Theme Selector Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Theme Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-16 right-0 w-80 bg-card border border-border rounded-2xl shadow-2xl p-6 theme-switcher-panel"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Customize Appearance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Choose your color theme and mode
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 p-0 rounded-full"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Mode Switcher */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Mode</h4>
                <div className="flex gap-2">
                  <Button
                    variant={mode === 'light' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => mode !== 'light' && toggleMode()}
                    className="flex-1 gap-2"
                  >
                    <Sun className="w-4 h-4" />
                    Light
                  </Button>
                  <Button
                    variant={mode === 'dark' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => mode !== 'dark' && toggleMode()}
                    className="flex-1 gap-2"
                  >
                    <Moon className="w-4 h-4" />
                    Dark
                  </Button>
                </div>
              </div>

              {/* Color Themes */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-3">Color Theme</h4>
              </div>

              {/* Theme Grid */}
              <div className="grid grid-cols-2 gap-3">
                {themes.map((themeOption) => (
                  <motion.button
                    key={themeOption.id}
                    onClick={() => handleThemeChange(themeOption.id)}
                    className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left group hover-lift ${
                      theme === themeOption.id
                        ? 'border-primary bg-primary/5 theme-shadow'
                        : 'border-border hover:border-primary/50 hover:bg-primary/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Color Preview */}
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{
                          background: `hsl(${themeOption.colors.primary})`
                        }}
                      />
                      <div
                        className="w-4 h-4 rounded-full border border-white shadow-sm"
                        style={{
                          background: themeOption.colors.gradient
                        }}
                      />
                    </div>

                    {/* Theme Info */}
                    <div className="mb-2">
                      <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {themeOption.name}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {themeOption.description}
                      </p>
                    </div>

                    {/* Selected Indicator */}
                    {theme === themeOption.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                      >
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </motion.div>
                    )}

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div
                        className="absolute inset-0 rounded-xl opacity-10"
                        style={{
                          background: themeOption.colors.gradient
                        }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Theme and mode preferences are saved automatically
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// Theme Preview Component for showcasing themes
export const ThemePreview = ({ themeId }: { themeId: Theme }) => {
  const { themes } = useTheme();
  const themeConfig = themes.find(t => t.id === themeId);
  
  if (!themeConfig) return null;

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
      <div className="flex gap-1">
        <div
          className="w-4 h-4 rounded-full border border-white shadow-sm"
          style={{ background: `hsl(${themeConfig.colors.primary})` }}
        />
        <div
          className="w-4 h-4 rounded-full border border-white shadow-sm opacity-80"
          style={{ background: `hsl(${themeConfig.colors.accent})` }}
        />
      </div>
      <div>
        <p className="font-medium text-sm text-foreground">{themeConfig.name}</p>
        <p className="text-xs text-muted-foreground">{themeConfig.description}</p>
      </div>
    </div>
  );
};