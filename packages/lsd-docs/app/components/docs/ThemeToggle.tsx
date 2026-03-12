import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@nipsys/shadcn-lsd';
import { ToggleGroup, ToggleGroupItem } from '@nipsys/shadcn-lsd';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';

export function ThemeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    handleModeChange(prefersDark ? 'dark' : 'light');
    document.body.style.visibility = 'visible';
  }, []);

  const handleModeChange = (value: string | undefined) => {
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
      onValueChange={handleModeChange}
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
    for (const t of Themes) {
      if (t !== 'monochrome') {
        document.documentElement.removeAttribute('data-theme')
      }
    }
    if (value !== 'monochrome') {
      document.documentElement.setAttribute('data-theme', value)
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
