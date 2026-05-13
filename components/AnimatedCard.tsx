'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale';
  className?: string;
}

export function AnimatedCard({
  children,
  delay = 0,
  animation = 'fade-up',
  className = '',
}: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation({ delay });

  const animationClass = {
    'fade-up': 'animate-float-up',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
    scale: 'animate-scale-in',
  }[animation];

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? animationClass : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
