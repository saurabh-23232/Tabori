'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  showGrid?: boolean;
}

export function ScrollSection({
  children,
  className = '',
  delay = 0,
  showGrid = false,
}: ScrollSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ delay, threshold: 0.05 });

  return (
    <section
      ref={ref}
      className={`
        relative
        ${showGrid ? 'grid-bg' : ''}
        ${isVisible ? 'animate-float-up' : 'opacity-0'}
        transition-opacity duration-700
        ${className}
      `}
    >
      {children}
    </section>
  );
}
