
import React from 'react';
import { Book, GraduationCap, School, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const features = [
  {
    icon: <Book className="h-12 w-12 text-paata-blue" />,
    title: "Interactive Learning Kits",
    description: "Hands-on educational kits designed to make complex concepts simple and engaging through practical activities.",
    color: "bg-paata-blue-light"
  },
  {
    icon: <GraduationCap className="h-12 w-12 text-paata-green" />,
    title: "Expert Guidance",
    description: "Our experienced tutors provide personalized support to ensure optimal understanding and skill development.",
    color: "bg-paata-green-light"
  },
  {
    icon: <School className="h-12 w-12 text-paata-orange" />,
    title: "School Partnerships",
    description: "We collaborate with schools to integrate our kits into their curriculum, enhancing the learning experience.",
    color: "bg-paata-orange-light"
  },
  {
    icon: <Users className="h-12 w-12 text-paata-purple" />,
    title: "Collaborative Learning",
    description: "Our approach encourages teamwork and peer learning, developing important social and communication skills.",
    color: "bg-paata-purple-light"
  }
];

const FeaturesSection = () => {
  return (
    <section className="paata-section bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Why Choose Paatashala?"
          subtitle="Our platform offers unique educational experiences that make learning fun, engaging, and effective."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="paata-card p-6 hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className={`${feature.color} w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
