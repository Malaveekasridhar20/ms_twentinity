import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

export const ThemeShowcase = () => {
  const { themes, theme: currentTheme, mode, setTheme, toggleMode } = useTheme();
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Multiple <span className="text-primary">Theme Options</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from our carefully crafted color schemes and switch between light and dark modes. 
            Each theme is designed to provide optimal contrast and visual appeal in both modes.
          </p>
          
          {/* Mode Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Currently viewing in {mode} mode
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((themeOption, index) => (
            <motion.div
              key={themeOption.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${
                currentTheme === themeOption.id ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
              }`}
            >
              <Card className="p-6 h-full transition-all duration-300 hover:shadow-lg group-hover:scale-105">
                {/* Theme Preview */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
                      style={{
                        background: `hsl(${themeOption.colors.primary})`
                      }}
                    />
                    <div
                      className="w-6 h-6 rounded-full border border-white shadow-md"
                      style={{
                        background: themeOption.colors.gradient
                      }}
                    />
                  </div>
                  
                  {/* Mini UI Preview */}
                  <div className="space-y-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        background: `hsl(${themeOption.colors.primary})`
                      }}
                    />
                    <div className="h-1 bg-muted rounded-full w-3/4" />
                    <div className="h-1 bg-muted rounded-full w-1/2" />
                  </div>
                </div>

                {/* Theme Info */}
                <div className="mb-4">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {themeOption.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {themeOption.description}
                  </p>
                </div>

                {/* Current Theme Indicator */}
                {currentTheme === themeOption.id && (
                  <div className="absolute top-3 right-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  </div>
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div
                    className="absolute inset-0 rounded-lg opacity-5"
                    style={{
                      background: themeOption.colors.gradient
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Experience different themes and modes right here
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => setShowThemeSelector(!showThemeSelector)}
            >
              Try Different Themes
              <motion.div
                className="ml-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🎨
              </motion.div>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={toggleMode}
            >
              Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
              <motion.div
                className="ml-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {mode === 'light' ? '🌙' : '☀️'}
              </motion.div>
            </Button>
          </div>

          {/* Theme Selector */}
          <AnimatePresence>
            {showThemeSelector && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8 p-6 bg-card border border-border rounded-2xl max-w-2xl mx-auto"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Choose Your Theme
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {themes.map((themeOption) => (
                    <Button
                      key={themeOption.id}
                      variant={currentTheme === themeOption.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setTheme(themeOption.id);
                        setShowThemeSelector(false);
                      }}
                      className="flex flex-col gap-2 h-auto p-3"
                    >
                      <div className="flex gap-1">
                        <div
                          className="w-3 h-3 rounded-full border border-white shadow-sm"
                          style={{
                            background: `hsl(${themeOption.colors.primary})`
                          }}
                        />
                        <div
                          className="w-2 h-2 rounded-full border border-white shadow-sm"
                          style={{
                            background: themeOption.colors.gradient
                          }}
                        />
                      </div>
                      <span className="text-xs">{themeOption.name}</span>
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};