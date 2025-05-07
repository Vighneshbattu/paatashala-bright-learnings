
import React, { useEffect, useRef } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Equal, Braces, Brackets, Percent, Plus, Minus, Asterisk, Divide, Parentheses, Droplet, Atom, Flame } from 'lucide-react';

interface SymbolProps {
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

const SubjectSymbols = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const symbols = containerRef.current?.querySelectorAll('.symbol');
            symbols?.forEach((symbol, i) => {
              setTimeout(() => {
                symbol.classList.add('animate-in');
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const mathSymbols = [
    { icon: <Plus size={28} />, title: "Math Addition Kit", description: "A hands-on learning kit for exploring basic addition operations with interactive tools." },
    { icon: <Minus size={28} />, title: "Math Subtraction Kit", description: "Interactive tools for understanding subtraction concepts through engaging activities." },
    { icon: <Asterisk size={28} />, title: "Math Multiplication Kit", description: "Visual and tactile resources for mastering multiplication tables and concepts." },
    { icon: <Divide size={28} />, title: "Math Division Kit", description: "Practical materials to make division understandable and fun for all learning levels." },
    { icon: <Percent size={28} />, title: "Math Percentages Kit", description: "Real-world applications to understand percentages, fractions, and decimals." }
  ];

  const chemistrySymbols = [
    { icon: <Atom size={28} />, title: "Atoms & Elements Kit", description: "Explore the building blocks of matter with models and interactive experiments." },
    { icon: <Droplet size={28} />, title: "Solutions Kit", description: "Mix, separate, and analyze different solutions to understand chemical properties." },
    { icon: <Flame size={28} />, title: "Chemical Reactions Kit", description: "Safe experiments demonstrating various chemical reactions and their principles." }
  ];

  const codingSymbols = [
    { icon: <Braces size={28} />, title: "Functions & Methods Kit", description: "Learn about reusable code blocks through hands-on programming activities." },
    { icon: <Brackets size={28} />, title: "Arrays & Collections Kit", description: "Explore data structures using visual and interactive programming exercises." },
    { icon: <Parentheses size={28} />, title: "Logic & Conditions Kit", description: "Master decision making in code through engaging programming challenges." },
    { icon: <Equal size={28} />, title: "Variables & Assignment Kit", description: "Understand how to store and manipulate data in programming." }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Subject Kits</h2>

        <div className="space-y-12">
          {/* Math Symbols */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-paata-blue">Mathematics Kits</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {mathSymbols.map((symbol, index) => (
                <Symbol 
                  key={`math-${index}`}
                  icon={symbol.icon}
                  title={symbol.title}
                  description={symbol.description}
                  category="math"
                />
              ))}
            </div>
          </div>

          {/* Chemistry Symbols */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-paata-green">Chemistry Kits</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {chemistrySymbols.map((symbol, index) => (
                <Symbol 
                  key={`chemistry-${index}`}
                  icon={symbol.icon}
                  title={symbol.title}
                  description={symbol.description}
                  category="chemistry"
                />
              ))}
            </div>
          </div>

          {/* Coding Symbols */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-paata-orange">Coding Kits</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {codingSymbols.map((symbol, index) => (
                <Symbol 
                  key={`coding-${index}`}
                  icon={symbol.icon}
                  title={symbol.title}
                  description={symbol.description}
                  category="coding"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectSymbols;
