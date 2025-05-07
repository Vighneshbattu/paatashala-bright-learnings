
import React from 'react';
import Symbol, { SymbolProps } from './Symbol';

interface SymbolsCategoryProps {
  title: string;
  titleColorClass: string;
  symbols: Omit<SymbolProps, 'category'>[];
  category: 'math' | 'chemistry' | 'coding';
}

const SymbolsCategory: React.FC<SymbolsCategoryProps> = ({ title, titleColorClass, symbols, category }) => {
  return (
    <div className="mb-12">
      <h3 className={`text-xl font-semibold mb-6 text-center ${titleColorClass}`}>{title}</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {symbols.map((symbol, index) => (
          <Symbol 
            key={`${category}-${index}`}
            icon={symbol.icon}
            title={symbol.title}
            description={symbol.description}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default SymbolsCategory;
