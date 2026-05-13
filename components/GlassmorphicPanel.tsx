'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface GlassmorphicPanelProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  delay?: number;
  hover?: 'lift' | 'scale' | 'none';
}

export function GlassmorphicPanel({
  children,
  className = '',
  glow = false,
  delay = 0,
  hover = 'lift',
}: GlassmorphicPanelProps) {
  const { ref, isVisible } = useScrollAnimation({ delay });

  const hoverClass = hover === 'lift' ? 'hover-lift' : hover === 'scale' ? 'hover-scale' : '';

  return (
    <div
      ref={ref}
      className={`
        glass-effect
        ${glow ? 'cyber-glow' : ''}
        ${isVisible ? 'animate-float-up' : 'opacity-0'}
        ${hoverClass}
        rounded-xl p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}
