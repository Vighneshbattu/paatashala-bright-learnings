
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const kits = [
  {
    id: 1,
    name: "Electronics Explorer",
    description: "A comprehensive kit for learning basic electronics through hands-on circuit building.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400",
    grade: "Grades 6-8",
    color: "bg-paata-blue"
  },
  {
    id: 2,
    name: "Chemistry Adventure",
    description: "Safe and educational chemistry experiments for understanding reactions and properties.",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=400",
    grade: "Grades 7-9",
    color: "bg-paata-green"
  },
  {
    id: 3,
    name: "Robotics Starter",
    description: "Introduction to robotics with programmable components and step-by-step instructions.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=400",
    grade: "Grades 8-10",
    color: "bg-paata-orange"
  },
  {
    id: 4,
    name: "Eco Explorer",
    description: "Environmental science kit with tools for studying ecosystems and sustainability.",
    image: "https://images.unsplash.com/photo-1507424739242-2c12c64d0ebc?auto=format&fit=crop&q=80&w=400",
    grade: "Grades 4-6",
    color: "bg-paata-teal"
  }
];

const PopularKits = () => {
  return (
    <section className="paata-section">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Popular Learning Kits"
          subtitle="Discover our most loved hands-on kits that make learning an adventure!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kits.map((kit) => (
            <div key={kit.id} className="paata-card overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <div className={`${kit.color} absolute top-0 left-0 w-full h-full opacity-30`}></div>
                <img 
                  src={kit.image} 
                  alt={kit.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {kit.grade}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{kit.name}</h3>
                <p className="text-gray-600 mb-4">{kit.description}</p>
                <Button asChild variant="outline" className="w-full rounded-full">
                  <Link to={`/kits/${kit.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="paata-btn-primary">
            <Link to="/kits">View All Kits</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularKits;
