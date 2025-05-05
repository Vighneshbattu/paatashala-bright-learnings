
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, center = true, className }) => {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className={cn("text-lg text-gray-600", center && "max-w-3xl mx-auto")}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
