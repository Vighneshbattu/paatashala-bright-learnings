
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Book, Star } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-paata-blue-light via-white to-paata-green-light overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-paata-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-paata-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Learn by <span className="text-paata-blue">Doing</span>, <br />
              Discover by <span className="text-paata-green">Creating</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700">
              Paatashala brings hands-on learning experiences to students through interactive educational kits and expert guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="paata-btn-primary">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/kits">Browse Learning Kits</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-paata-blue mb-1">50+</div>
                <div className="text-sm text-gray-600">Learning Kits</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-paata-green mb-1">100+</div>
                <div className="text-sm text-gray-600">Partner Schools</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-paata-orange mb-1">10k+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-paata-blue rounded-full absolute -top-6 -left-6 animate-float"></div>
              <div className="w-48 h-48 md:w-72 md:h-72 bg-paata-yellow rounded-full absolute -bottom-4 -right-4 animate-float" style={{animationDelay: "1s"}}></div>
              <div className="w-32 h-32 md:w-48 md:h-48 bg-paata-green rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-float" style={{animationDelay: "2s"}}></div>
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1000" 
                alt="Students learning with Paatashala kits" 
                className="rounded-lg w-80 h-80 md:w-[500px] md:h-[500px] object-cover shadow-xl relative z-10"
              />
              
              {/* Feature badges */}
              <div className="absolute top-10 -left-4 md:-left-10 bg-white rounded-lg shadow-lg p-4 z-20 animate-scale-in">
                <div className="flex items-center gap-2">
                  <Book className="h-6 w-6 text-paata-blue" />
                  <span className="font-medium">Practical Learning</span>
                </div>
              </div>
              
              <div className="absolute bottom-10 -right-4 md:-right-10 bg-white rounded-lg shadow-lg p-4 z-20 animate-scale-in" style={{animationDelay: "0.3s"}}>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-paata-green" />
                  <span className="font-medium">Expert Tutors</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-10 bg-white rounded-lg shadow-lg p-4 z-20 animate-scale-in" style={{animationDelay: "0.6s"}}>
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-paata-yellow" />
                  <span className="font-medium">Quality Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
