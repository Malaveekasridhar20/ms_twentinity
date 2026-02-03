import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'gold' | 'purple' | 'blue' | 'green' | 'red' | 'orange' | 'pink' | 'cyan';
export type Mode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  themes: ThemeConfig[];
}

interface ThemeConfig {
  id: Theme;
  name: string;
  description: string;
  colors: {
    primary: string;
    primaryForeground: string;
    accent: string;
    accentForeground: string;
    ring: string;
    gradient: string;
    shadow: string;
  };
}

const themes: ThemeConfig[] = [
  {
    id: 'gold',
    name: 'Golden Elegance',
    description: 'Classic gold theme with premium feel',
    colors: {
      primary: '45 100% 51%',
      primaryForeground: '0 0% 4%',
      accent: '45 100% 51%',
      accentForeground: '0 0% 4%',
      ring: '45 100% 51%',
      gradient: 'linear-gradient(135deg, hsl(45 100% 51%) 0%, hsl(35 100% 45%) 100%)',
      shadow: '0 4px 40px -10px hsl(45 100% 51% / 0.3)'
    }
  },
  {
    id: 'purple',
    name: 'Royal Purple',
    description: 'Sophisticated purple with modern appeal',
    colors: {
      primary: '258 85% 51%',
      primaryForeground: '0 0% 98%',
      accent: '258 85% 51%',
      accentForeground: '0 0% 98%',
      ring: '258 85% 51%',
      gradient: 'linear-gradient(135deg, hsl(258 85% 51%) 0%, hsl(258 85% 45%) 100%)',
      shadow: '0 4px 40px -10px hsl(258 85% 51% / 0.3)'
    }
  },
  {
    id: 'blue',
    name: 'Ocean Blue',
    description: 'Professional blue with trust and reliability',
    colors: {
      primary: '210 100% 50%',
      primaryForeground: '0 0% 98%',
      accent: '210 100% 50%',
      accentForeground: '0 0% 98%',
      ring: '210 100% 50%',
      gradient: 'linear-gradient(135deg, hsl(210 100% 50%) 0%, hsl(210 100% 45%) 100%)',
      shadow: '0 4px 40px -10px hsl(210 100% 50% / 0.3)'
    }
  },
  {
    id: 'green',
    name: 'Nature Green',
    description: 'Fresh green representing growth and innovation',
    colors: {
      primary: '142 76% 36%',
      primaryForeground: '0 0% 98%',
      accent: '142 76% 36%',
      accentForeground: '0 0% 98%',
      ring: '142 76% 36%',
      gradient: 'linear-gradient(135deg, hsl(142 76% 36%) 0%, hsl(142 76% 31%) 100%)',
      shadow: '0 4px 40px -10px hsl(142 76% 36% / 0.3)'
    }
  },
  {
    id: 'red',
    name: 'Crimson Power',
    description: 'Bold red for dynamic and energetic brands',
    colors: {
      primary: '0 84% 60%',
      primaryForeground: '0 0% 98%',
      accent: '0 84% 60%',
      accentForeground: '0 0% 98%',
      ring: '0 84% 60%',
      gradient: 'linear-gradient(135deg, hsl(0 84% 60%) 0%, hsl(0 84% 55%) 100%)',
      shadow: '0 4px 40px -10px hsl(0 84% 60% / 0.3)'
    }
  },
  {
    id: 'orange',
    name: 'Sunset Orange',
    description: 'Warm orange for creative and friendly approach',
    colors: {
      primary: '25 95% 53%',
      primaryForeground: '0 0% 98%',
      accent: '25 95% 53%',
      accentForeground: '0 0% 98%',
      ring: '25 95% 53%',
      gradient: 'linear-gradient(135deg, hsl(25 95% 53%) 0%, hsl(25 95% 48%) 100%)',
      shadow: '0 4px 40px -10px hsl(25 95% 53% / 0.3)'
    }
  },
  {
    id: 'pink',
    name: 'Rose Pink',
    description: 'Elegant pink for creative and artistic brands',
    colors: {
      primary: '330 81% 60%',
      primaryForeground: '0 0% 98%',
      accent: '330 81% 60%',
      accentForeground: '0 0% 98%',
      ring: '330 81% 60%',
      gradient: 'linear-gradient(135deg, hsl(330 81% 60%) 0%, hsl(330 81% 55%) 100%)',
      shadow: '0 4px 40px -10px hsl(330 81% 60% / 0.3)'
    }
  },
  {
    id: 'cyan',
    name: 'Electric Cyan',
    description: 'Modern cyan for tech-forward companies',
    colors: {
      primary: '180 100% 50%',
      primaryForeground: '0 0% 4%',
      accent: '180 100% 50%',
      accentForeground: '0 0% 4%',
      ring: '180 100% 50%',
      gradient: 'linear-gradient(135deg, hsl(180 100% 50%) 0%, hsl(180 100% 45%) 100%)',
      shadow: '0 4px 40px -10px hsl(180 100% 50% / 0.3)'
    }
  }
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('gold');
  const [mode, setMode] = useState<Mode>('dark');

  useEffect(() => {
    // Load theme and mode from localStorage
    const savedTheme = localStorage.getItem('ms-twentinity-theme') as Theme;
    const savedMode = localStorage.getItem('ms-twentinity-mode') as Mode;
    
    if (savedTheme && themes.find(t => t.id === savedTheme)) {
      setTheme(savedTheme);
    }
    
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setMode(savedMode);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Save theme and mode to localStorage
    localStorage.setItem('ms-twentinity-theme', theme);
    localStorage.setItem('ms-twentinity-mode', mode);
    
    // Apply theme to CSS variables
    const themeConfig = themes.find(t => t.id === theme);
    if (themeConfig) {
      const root = document.documentElement;
      
      // Apply color theme
      root.style.setProperty('--primary', themeConfig.colors.primary);
      root.style.setProperty('--primary-foreground', themeConfig.colors.primaryForeground);
      root.style.setProperty('--accent', themeConfig.colors.accent);
      root.style.setProperty('--accent-foreground', themeConfig.colors.accentForeground);
      root.style.setProperty('--ring', themeConfig.colors.ring);
      
      // Update sidebar colors
      root.style.setProperty('--sidebar-primary', themeConfig.colors.primary);
      root.style.setProperty('--sidebar-primary-foreground', themeConfig.colors.primaryForeground);
      root.style.setProperty('--sidebar-ring', themeConfig.colors.ring);
      
      // Update custom properties for gradients and shadows
      root.style.setProperty('--theme-gradient', themeConfig.colors.gradient);
      root.style.setProperty('--theme-shadow', themeConfig.colors.shadow);
    }
    
    // Apply light/dark mode
    const root = document.documentElement;
    if (mode === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme, mode]);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode, toggleMode, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};