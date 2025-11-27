// components/ui/Loading.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  variant = 'spinner',
  size = 'md',
  className,
  text,
  fullScreen = false
}) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const content = (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      {variant === 'spinner' && (
        <svg
          className={cn('animate-spin text-blue-600', sizes[size])}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {variant === 'dots' && (
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={cn(
                'rounded-full bg-blue-600 animate-pulse',
                size === 'sm' && 'w-2 h-2',
                size === 'md' && 'w-3 h-3',
                size === 'lg' && 'w-4 h-4'
              )}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      )}

      {variant === 'pulse' && (
        <div
          className={cn(
            'rounded-full bg-blue-600 animate-pulse',
            sizes[size]
          )}
        />
      )}

      {variant === 'bars' && (
        <div className="flex gap-1 items-end">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={cn(
                'bg-blue-600 animate-pulse rounded-sm',
                size === 'sm' && 'w-1',
                size === 'md' && 'w-2',
                size === 'lg' && 'w-3'
              )}
              style={{
                height: `${20 + i * 10}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      )}

      {text && (
        <p className="text-sm font-medium text-gray-600 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};

// Skeleton Loading Component
interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'text',
  width,
  height,
  count = 1
}) => {
  const baseStyles = 'animate-pulse bg-gray-200';
  
  const variants = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  const style: React.CSSProperties = {
    width: width || '100%',
    height: height || (variant === 'text' ? '1rem' : '100%')
  };

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={cn(baseStyles, variants[variant], className)}
          style={style}
        />
      ))}
    </>
  );
};

// Card Skeleton Component
export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 1 }) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
          <Skeleton variant="rectangular" height={200} className="mb-4" />
          <Skeleton variant="text" className="mb-2" width="60%" />
          <Skeleton variant="text" className="mb-4" width="40%" />
          <Skeleton variant="text" count={3} className="mb-2" />
          <div className="flex gap-2 mt-4">
            <Skeleton variant="rectangular" width={80} height={32} />
            <Skeleton variant="rectangular" width={80} height={32} />
          </div>
        </div>
      ))}
    </>
  );
};