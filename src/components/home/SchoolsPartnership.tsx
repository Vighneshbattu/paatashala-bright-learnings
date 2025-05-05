
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeading from '../ui/SectionHeading';
import { Check } from 'lucide-react';

const SchoolsPartnership = () => {
  const benefits = [
    "Access to 50+ hands-on learning kits designed to complement curriculum",
    "Regular visits from qualified tutors to facilitate learning",
    "Teacher training sessions to maximize the educational value",
    "Custom kit development based on your school's specific needs",
    "Regular progress reports and curriculum integration support",
    "Cost-effective solution compared to setting up your own labs"
  ];

  return (
    <section className="paata-section bg-gradient-to-r from-paata-blue-light via-white to-paata-green-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Partner With Us"
              subtitle="Join over 100 schools already benefitting from our educational partnership program."
              center={false}
            />

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-paata-green rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="paata-btn-secondary">
              <Link to="/schools">Become a Partner School</Link>
            </Button>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600"
              alt="Students in a classroom with Paatashala kits" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white rounded-lg shadow-xl p-6 max-w-xs">
              <div className="text-2xl font-bold text-paata-blue mb-1">100+</div>
              <p className="text-gray-600">Schools across the country trust Paatashala to enhance their science and technology education.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsPartnership;
