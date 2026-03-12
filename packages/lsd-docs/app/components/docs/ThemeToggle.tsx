'use client';

import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@nipsys/shadcn-lsd';
import { ToggleGroup, ToggleGroupItem } from '@nipsys/shadcn-lsd';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';

// Type for the global theme object
declare global {
  interface Window {
    lsdTheme?: {
      applyTheme: (theme: string) => void;
      getTheme: () => string;
      THEMES: string[];
    };
  }
}

export function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';
    }
    return 'light';
  });

  const toggleTheme = (value: string | undefined) => {
    if (!value) return;

    // Get current accent theme (teal or none)
    const hasTeal = document.documentElement.classList.contains('theme-teal');
    const accent = hasTeal ? 'teal' : '';
    
    // Build the full theme name
    const fullTheme = value === 'dark' 
      ? (accent ? `dark-${accent}` : 'dark')
      : (accent ? accent : 'light');

    // Apply using the global theme function
    if (window.lsdTheme) {
      window.lsdTheme.applyTheme(fullTheme);
    } else {
      // Fallback to direct DOM manipulation
      if (value === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    
    setMode(value as 'light' | 'dark');
  };

  return (
    <ToggleGroup
      type="single"
      value={mode}
      onValueChange={toggleTheme}
      aria-label="Theme toggle"
    >
      <ToggleGroupItem value="light" aria-label="Light theme">
        <SunIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark theme">
        <MoonIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

const Themes = ['monochrome', 'teal'] as const;

type Theme = (typeof Themes)[number];

export function ThemeAccentToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      for (const t of Themes) {
        if (t === 'monochrome') continue;
        if (document.documentElement.classList.contains(`theme-${t}`)) {
          return t;
        }
      }
    }
    return 'monochrome';
  });

  const toggleAccentTheme = (value: string) => {
    // Get current mode (light or dark)
    const isDark = document.documentElement.classList.contains('dark');
    const mode = isDark ? 'dark' : 'light';
    
    // Build the full theme name
    const fullTheme = value === 'monochrome' 
      ? mode 
      : (isDark ? `dark-${value}` : value);

    // Apply using the global theme function
    if (window.lsdTheme) {
      window.lsdTheme.applyTheme(fullTheme);
    } else {
      // Fallback to direct DOM manipulation
      const root = document.documentElement;
      for (const t of Themes) {
        if (t !== 'monochrome') {
          root.classList.remove(`theme-${t}`);
        }
      }
      if (value !== 'monochrome') {
        root.classList.add(`theme-${value}`);
      }
    }
    
    setTheme(value as Theme);
  };

  return (
    <Select value={theme} onValueChange={toggleAccentTheme}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        {Themes.map((t) => (
          <SelectItem key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
