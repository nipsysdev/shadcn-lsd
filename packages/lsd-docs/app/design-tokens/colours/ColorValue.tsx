'use client';

import { Typography } from '@nipsys/shadcn-lsd';
import { useEffect, useRef, useState } from 'react';

interface ColorValueProps {
  variable: string;
}

const rgbToHex = (color: string): string => {
  if (color.startsWith('#')) {
    return color;
  }

  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
  if (rgbMatch) {
    const r = Number.parseInt(rgbMatch[1], 16).toString(16).padStart(2, '0');
    const g = Number.parseInt(rgbMatch[2], 16).toString(16).padStart(2, '0');
    const b = Number.parseInt(rgbMatch[3], 16).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }

  return color;
};

export function ColorValue({ variable }: ColorValueProps) {
  const [hexValue, setHexValue] = useState<string>('');
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateColorValue = () => {
      if (elementRef.current) {
        const computedStyle = getComputedStyle(elementRef.current);
        const colorValue = computedStyle.getPropertyValue(variable).trim();

        if (colorValue) {
          const hex = rgbToHex(colorValue);
          setHexValue(hex);
        }
      }
    };

    updateColorValue();

    const observer = new MutationObserver(updateColorValue);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });

    return () => observer.disconnect();
  }, [variable]);

  return (
    <span ref={elementRef}>
      <Typography variant="label1">{hexValue}</Typography>
    </span>
  );
}
