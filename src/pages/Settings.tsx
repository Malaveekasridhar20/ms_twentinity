import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Palette, Check, Monitor, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const colorThemes = [
  {
    name: 'Gold (Default)',
    id: 'gold',
    primary: '#D4AF37',
    description: 'Elegant gold theme with dark background',
    preview: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)'
  },
  {
    name: 'Electric Blue',
    id: 'blue',
    primary: '#0EA5E9',
    description: 'Modern blue theme with vibrant accents',
    preview: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)'
  },
  {
    name: 'Emerald Green',
    id: 'green',
    primary: '#10B981',
    description: 'Fresh green theme for nature lovers',
    preview: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
  },
  {
    name: 'Royal Purple',
    id: 'purple',
    primary: '#8B5CF6',
    description: 'Luxurious purple theme with royal feel',
    preview: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
  },
  {
    name: 'Sunset Orange',
    id: 'orange',
    primary: '#F97316',
    description: 'Warm orange theme with sunset vibes',
    preview: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)'
  },
  {
    name: 'Rose Pink',
    id: 'rose',
    primary: '#F43F5E',
    description: 'Elegant rose theme with romantic touch',
    preview: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)'
  }
];

const Settings = () => {
  const [selectedTheme, setSelectedTheme] = useState('gold');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('color-theme') || 'gold';
    const savedMode = localStorage.getItem('dark-mode') !== 'false';
    setSelectedTheme(savedTheme);
    setIsDarkMode(savedMode);
    applyTheme(savedTheme, savedMode);
  }, []);

  const applyTheme = (themeId: string, darkMode: boolean) => {
    const theme = colorThemes.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    
    // Apply color theme
    root.style.setProperty('--primary', theme.primary);
    
    // Apply dark/light mode
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    // Save to localStorage
    localStorage.setItem('color-theme', themeId);
    localStorage.setItem('dark-mode', darkMode.toString());
  };

  const handleThemeChange = (themeId: string) => {
    setSelectedTheme(themeId);
    applyTheme(themeId, isDarkMode);
  };

  const handleModeChange = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
    applyTheme(selectedTheme, darkMode);
  };

  return (
    <>
      <SEO 
        title="Settings - MS TWENTINITY | Customize Your Experience"
        description="Customize your MS TWENTINITY experience with different color themes and display preferences. Choose from gold, blue, green, purple, orange, and rose themes."
        keywords="MS TWENTINITY settings, color themes, customization, user preferences, website themes"
        canonical="/settings"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Palette className="w-8 h-8 text-primary" />
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  Settings
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Customize your MS TWENTINITY experience with different color themes and display preferences
              </p>
            </motion.div>

            {/* Dark/Light Mode Toggle */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                Display Mode
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Button
                  variant={isDarkMode ? "default" : "outline"}
                  onClick={() => handleModeChange(true)}
                  className="h-16 flex items-center gap-3 text-left justify-start"
                >
                  <Moon className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Dark Mode</div>
                    <div className="text-sm opacity-70">Easy on the eyes</div>
                  </div>
                  {isDarkMode && <Check className="w-4 h-4 ml-auto" />}
                </Button>
                
                <Button
                  variant={!isDarkMode ? "default" : "outline"}
                  onClick={() => handleModeChange(false)}
                  className="h-16 flex items-center gap-3 text-left justify-start"
                >
                  <Sun className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Light Mode</div>
                    <div className="text-sm opacity-70">Bright and clean</div>
                  </div>
                  {!isDarkMode && <Check className="w-4 h-4 ml-auto" />}
                </Button>

                <Button
                  variant="outline"
                  className="h-16 flex items-center gap-3 text-left justify-start opacity-50 cursor-not-allowed"
                  disabled
                >
                  <Monitor className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Auto</div>
                    <div className="text-sm opacity-70">Coming soon</div>
                  </div>
                </Button>
              </div>
            </motion.section>

            {/* Color Themes */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                Color Themes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {colorThemes.map((theme, index) => (
                  <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedTheme === theme.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border bg-card hover:border-primary/50'
                    }`}
                    onClick={() => handleThemeChange(theme.id)}
                  >
                    {/* Theme Preview */}
                    <div
                      className="w-full h-16 rounded-lg mb-4"
                      style={{ background: theme.preview }}
                    />
                    
                    {/* Theme Info */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{theme.name}</h3>
                      {selectedTheme === theme.id && (
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{theme.description}</p>
                    
                    {/* Color Code */}
                    <div className="mt-3 text-xs font-mono text-muted-foreground">
                      {theme.primary}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Reset Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Button
                variant="outline"
                onClick={() => {
                  handleThemeChange('gold');
                  handleModeChange(true);
                }}
                className="px-8"
              >
                Reset to Default
              </Button>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Settings;