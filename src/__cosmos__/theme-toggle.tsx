'use client';

import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

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
    // Prevent untoggling - ignore undefined values
    if (!value) return;

    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
        <Sun className="lsd:h-4 lsd:w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark theme">
        <Moon className="lsd:h-4 lsd:w-4" />
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
    const root = document.documentElement;

    for (const t of Themes) {
      if (t !== 'monochrome') {
        root.classList.remove(`theme-${t}`);
      }
    }

    if (value !== 'monochrome') {
      root.classList.add(`theme-${value}`);
    }
    setTheme(value as Theme);
  };

  return (
    <Select value={theme} onValueChange={toggleAccentTheme}>
      <SelectTrigger className="lsd:w-[180px]">
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
