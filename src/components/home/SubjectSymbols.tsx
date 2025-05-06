import React, { useEffect, useRef } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Equal, Braces, Brackets, Percent, Plus, Minus, Asterisk, Divide, Parentheses, Droplet, Atom, Flare } from 'lucide-react';

interface SymbolProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const Symbol: React.FC<SymbolProps> = ({ icon, title, description, color, delay }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className={`symbol p-4 cursor-pointer rounded-full flex items-center justify-center ${color} 
                      hover-scale shadow-md animate-scale-in`} 
          style={{ 
            animationDelay: `${delay}ms`,
            width: '60px', 
            height: '60px',
            transition: 'all 0.3s ease'
          }}
        >
          {icon}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

// Custom chemistry symbols
const H2O: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <span className="font-bold">H<sub>2</sub>O</span>
  </div>
);

const CO2: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <span className="font-bold">CO<sub>2</sub></span>
  </div>
);

const NaCl: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <span className="font-bold">NaCl</span>
  </div>
);

const SubjectSymbols = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
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
    { 
      icon: <Plus className="h-8 w-8 text-white" />, 
      title: "Math Kit: Addition", 
      description: "A hands-on learning kit for exploring basic mathematical operations with interactive tools.",
      color: "bg-paata-blue",
      delay: 0
    },
    { 
      icon: <Minus className="h-8 w-8 text-white" />, 
      title: "Math Kit: Subtraction", 
      description: "Explore subtraction concepts with physical manipulatives that make learning math fun.",
      color: "bg-paata-green",
      delay: 100
    },
    { 
      icon: <Asterisk className="h-8 w-8 text-white" />, 
      title: "Math Kit: Multiplication", 
      description: "Interactive tools to understand multiplication principles through tangible examples.",
      color: "bg-paata-orange",
      delay: 200
    },
    { 
      icon: <Divide className="h-8 w-8 text-white" />, 
      title: "Math Kit: Division", 
      description: "Visualize division concepts with our specially designed manipulative tools.",
      color: "bg-paata-teal",
      delay: 300
    },
    { 
      icon: <Percent className="h-8 w-8 text-white" />, 
      title: "Math Kit: Percentages", 
      description: "Understand percentages and ratios through fun, interactive activities.",
      color: "bg-paata-purple",
      delay: 400
    }
  ];
  
  const chemistrySymbols = [
    { 
      icon: <H2O className="h-8 w-8 text-white flex items-center justify-center" />, 
      title: "Chemistry Kit: Water Properties", 
      description: "Explore the properties of water and its importance in chemical reactions.",
      color: "bg-paata-blue",
      delay: 100
    },
    { 
      icon: <CO2 className="h-8 w-8 text-white flex items-center justify-center" />, 
      title: "Chemistry Kit: Carbon Dioxide", 
      description: "Study carbon dioxide and its role in our atmosphere through safe experiments.",
      color: "bg-paata-green",
      delay: 200
    },
    { 
      icon: <NaCl className="h-8 w-8 text-white flex items-center justify-center" />, 
      title: "Chemistry Kit: Salt Chemistry", 
      description: "Discover the chemistry of salts and solutions with hands-on activities.",
      color: "bg-paata-orange",
      delay: 300
    }
  ];
  
  const codingSymbols = [
    { 
      icon: <Braces className="h-8 w-8 text-white" />, 
      title: "Coding Kit: Functions", 
      description: "Learn the basics of functions and code blocks through physical programming activities.",
      color: "bg-paata-purple",
      delay: 200
    },
    { 
      icon: <Brackets className="h-8 w-8 text-white" />, 
      title: "Coding Kit: Arrays", 
      description: "Understand arrays and data structures with tactile programming exercises.",
      color: "bg-paata-pink",
      delay: 300
    },
    { 
      icon: <Parentheses className="h-8 w-8 text-white" />, 
      title: "Coding Kit: Logic", 
      description: "Master logical operations and conditions with our interactive coding kit.",
      color: "bg-paata-teal",
      delay: 400
    },
    { 
      icon: <Equal className="h-8 w-8 text-white" />, 
      title: "Coding Kit: Variables", 
      description: "Explore variables and data types through tangible programming activities.",
      color: "bg-paata-blue",
      delay: 500
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Learning Subjects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our specialized learning kits designed for different subjects. Hover over each symbol to learn more!
          </p>
        </div>
        
        <div ref={containerRef} className="opacity-0 transition-opacity duration-1000">
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Mathematics</h3>
            <div className="flex flex-wrap gap-8 justify-center">
              {mathSymbols.map((symbol, index) => (
                <Symbol
                  key={`math-${index}`}
                  icon={symbol.icon}
                  title={symbol.title}
                  description={symbol.description}
                  color={symbol.color}
                  delay={symbol.delay}
                />
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Chemistry</h3>
            <div className="flex flex-wrap gap-8 justify-center">
              {chemistrySymbols.map((symbol, index) => (
                <Symbol
                  key={`chem-${index}`}
                  icon={symbol.icon}
                  title={symbol.title}
                  description={symbol.description}
                  color={symbol.color}
                  delay={symbol.delay}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Coding</h3>
            <div className="flex flex-wrap gap-8 justify-center">
              {codingSymbols.map((symbol, index) => (
                <Symbol
                  key={`code-${index}`}
                  icon={symbol.icon}
                  title={symbol.title}
                  description={symbol.description}
                  color={symbol.color}
                  delay={symbol.delay}
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
