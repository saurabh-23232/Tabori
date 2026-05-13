'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface GlassmorphicPanelProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  delay?: number;
}

export function GlassmorphicPanel({
  children,
  className = '',
  glow = true,
  delay = 0,
}: GlassmorphicPanelProps) {
  const { ref, isVisible } = useScrollAnimation({ delay });

  return (
    <div
      ref={ref}
      className={`
        glass-effect
        ${glow ? 'cyber-glow' : ''}
        ${isVisible ? 'animate-float-up' : 'opacity-0'}
        rounded-xl p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}
