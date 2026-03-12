export const siteConfig = {
  name: 'LSD',
  title: 'LSD Documentation',
  description: 'LSD Component Library Documentation',
  url: 'https://lsd.nipsys.dev',
  version: '0.2.5',
  github: 'https://github.com/nipsysdev/shadcn-lsd',
} as const;

export type SiteConfig = typeof siteConfig;
