
import React from 'react';
import { Equal, Braces, Brackets, Percent, Plus, Minus, Asterisk, Divide, Parentheses, Droplet, Atom, Flame } from 'lucide-react';
import { SymbolProps } from './Symbol';

export const mathSymbols: Omit<SymbolProps, 'category'>[] = [
  { icon: <Plus size={28} />, title: "Math Addition Kit", description: "A hands-on learning kit for exploring basic addition operations with interactive tools." },
  { icon: <Minus size={28} />, title: "Math Subtraction Kit", description: "Interactive tools for understanding subtraction concepts through engaging activities." },
  { icon: <Asterisk size={28} />, title: "Math Multiplication Kit", description: "Visual and tactile resources for mastering multiplication tables and concepts." },
  { icon: <Divide size={28} />, title: "Math Division Kit", description: "Practical materials to make division understandable and fun for all learning levels." },
  { icon: <Percent size={28} />, title: "Math Percentages Kit", description: "Real-world applications to understand percentages, fractions, and decimals." }
];

export const chemistrySymbols: Omit<SymbolProps, 'category'>[] = [
  { icon: <Atom size={28} />, title: "Atoms & Elements Kit", description: "Explore the building blocks of matter with models and interactive experiments." },
  { icon: <Droplet size={28} />, title: "Solutions Kit", description: "Mix, separate, and analyze different solutions to understand chemical properties." },
  { icon: <Flame size={28} />, title: "Chemical Reactions Kit", description: "Safe experiments demonstrating various chemical reactions and their principles." }
];

export const codingSymbols: Omit<SymbolProps, 'category'>[] = [
  { icon: <Braces size={28} />, title: "Functions & Methods Kit", description: "Learn about reusable code blocks through hands-on programming activities." },
  { icon: <Brackets size={28} />, title: "Arrays & Collections Kit", description: "Explore data structures using visual and interactive programming exercises." },
  { icon: <Parentheses size={28} />, title: "Logic & Conditions Kit", description: "Master decision making in code through engaging programming challenges." },
  { icon: <Equal size={28} />, title: "Variables & Assignment Kit", description: "Understand how to store and manipulate data in programming." }
];
