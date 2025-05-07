
import React, { useEffect, useRef } from 'react';
import SymbolsCategory from './subject-symbols/SymbolsCategory';
import { mathSymbols, chemistrySymbols, codingSymbols } from './subject-symbols/SymbolsData';
import { useSymbolAnimation } from './subject-symbols/animations';

const SubjectSymbols = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setupAnimation } = useSymbolAnimation(containerRef);

  useEffect(() => {
    const cleanup = setupAnimation();
    return cleanup;
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Subject Kits</h2>

        <div className="space-y-12">
          <SymbolsCategory
            title="Mathematics Kits"
            titleColorClass="text-paata-blue"
            symbols={mathSymbols}
            category="math"
          />

          <SymbolsCategory
            title="Chemistry Kits"
            titleColorClass="text-paata-green"
            symbols={chemistrySymbols}
            category="chemistry"
          />

          <SymbolsCategory
            title="Coding Kits"
            titleColorClass="text-paata-orange"
            symbols={codingSymbols}
            category="coding"
          />
        </div>
      </div>
    </section>
  );
};

export default SubjectSymbols;
