
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export interface SymbolProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: 'math' | 'chemistry' | 'coding';
}

const Symbol: React.FC<SymbolProps> = ({ icon, title, description, category }) => {
  const colorClasses = {
    math: 'bg-paata-blue-light text-paata-blue hover:bg-paata-blue hover:text-white',
    chemistry: 'bg-paata-green-light text-paata-green hover:bg-paata-green hover:text-white',
    coding: 'bg-paata-orange-light text-paata-orange hover:bg-paata-orange hover:text-white'
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          className={`symbol flex items-center justify-center text-2xl font-bold w-16 h-16 rounded-full cursor-pointer transition-all duration-300 ${colorClasses[category]}`}
        >
          {icon}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Symbol;
