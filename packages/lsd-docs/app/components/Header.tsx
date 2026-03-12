'use client';

import { ThemeAccentToggle, ThemeToggle } from './docs/ThemeToggle';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`w-full border-b ${className || ''}`}>
      <div className="flex items-center justify-end py-(--lsd-spacing-small) px-(--lsd-spacing-base)">
        <div className="flex items-center gap-(--lsd-spacing-large)">
          <ThemeToggle />
          <ThemeAccentToggle />
        </div>
      </div>
    </header>
  );
}
