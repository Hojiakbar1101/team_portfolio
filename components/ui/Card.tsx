// components/ui/Card.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated' | 'glass';
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = 'default',
      hoverable = false,
      padding = 'md',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-2xl transition-all duration-300';
    
    const variants = {
      default: 'bg-white shadow-md',
      bordered: 'bg-white border-2 border-gray-200',
      elevated: 'bg-white shadow-xl',
      glass: 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg'
    };
    
    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };
    
    const hoverStyles = hoverable ? 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer' : '';
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Header Component
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('flex items-start justify-between mb-4', className)}
      {...props}
    >
      <div className="flex-1">
        {title && (
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        )}
        {subtitle && (
          <p className="text-sm text-gray-600">{subtitle}</p>
        )}
        {children}
      </div>
      {action && <div className="ml-4">{action}</div>}
    </div>
  );
};

// Card Body Component
interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('text-gray-600', className)} {...props}>
      {children}
    </div>
  );
};

// Card Footer Component
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: 'start' | 'center' | 'end' | 'between';
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  justify = 'end',
  ...props
}) => {
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between'
  };
  
  return (
    <div
      className={cn(
        'flex items-center gap-3 mt-6 pt-4 border-t border-gray-100',
        justifyClasses[justify],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};