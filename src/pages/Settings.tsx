import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Palette, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bannerBg from '@/assets/black-smooth-textured-paper-background.jpg';

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

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('color-theme') || 'gold';
    setSelectedTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId: string) => {
    const theme = colorThemes.find(t => t.id === themeId);
    if (!theme) return;

    const root = document.documentElement;
    
    // Apply color theme to CSS custom properties
    root.style.setProperty('--primary', convertToHSL(theme.primary));
    
    // Update theme-specific gradients and shadows
    root.style.setProperty('--theme-gradient', `linear-gradient(135deg, ${theme.primary} 0%, ${adjustBrightness(theme.primary, -10)} 100%)`);
    root.style.setProperty('--theme-shadow', `0 4px 40px -10px ${theme.primary}30`);
    
    // Ensure dark mode is always applied
    root.classList.add('dark');
    root.classList.remove('light');

    // Save to localStorage
    localStorage.setItem('color-theme', themeId);
  };

  const convertToHSL = (hex: string) => {
    // Convert hex to HSL format for CSS custom properties
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
  };

  const adjustBrightness = (hex: string, percent: number) => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  };

  const handleThemeChange = (themeId: string) => {
    setSelectedTheme(themeId);
    applyTheme(themeId);
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
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bannerBg}
              alt="Settings Banner"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Palette className="w-8 h-8 text-primary" />
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                  Settings
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Customize your MS TWENTINITY experience with different color themes
              </p>
            </motion.div>
          </div>
        </section>
        
        <main className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

            {/* Color Themes */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Button
                variant="outline"
                onClick={() => {
                  handleThemeChange('gold');
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