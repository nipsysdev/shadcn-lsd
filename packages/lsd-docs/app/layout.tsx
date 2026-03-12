import type { Metadata } from 'next';
import './globals.css';
import PathProvider from './components/PathProvider';

export const metadata: Metadata = {
  title: 'LSD Documentation',
  description:
    'A beautiful, accessible, and customizable component library built with Radix UI and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="w-screen h-screen overflow-hidden flex">
        <PathProvider>{children}</PathProvider>
      </body>
    </html>
  );
}
