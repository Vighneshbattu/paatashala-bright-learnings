
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { School, CheckCircle, Calendar, Users, BookOpen } from 'lucide-react';

const Schools = () => {
  const benefits = [
    {
      icon: <BookOpen className="h-8 w-8 text-paata-blue" />,
      title: "Enhanced Learning Experience",
      description: "Our hands-on kits make abstract concepts tangible, improving student comprehension and retention."
    },
    {
      icon: <Users className="h-8 w-8 text-paata-green" />,
      title: "Increased Student Engagement",
      description: "Interactive learning activities capture students' attention and foster active participation."
    },
    {
      icon: <Calendar className="h-8 w-8 text-paata-orange" />,
      title: "Flexible Implementation",
      description: "Our programs can be integrated into existing curricula or used as supplementary learning materials."
    },
    {
      icon: <School className="h-8 w-8 text-paata-purple" />,
      title: "Professional Development",
      description: "Training and support for teachers to effectively utilize our educational resources."
    }
  ];

  const packages = [
    {
      name: "Starter Package",
      description: "Perfect for small schools wanting to introduce hands-on learning",
      features: [
        "5 Learning Kits of Your Choice",
        "Teacher Training Workshop",
        "Monthly Support Session",
        "Access to Digital Resources"
      ],
      color: "bg-paata-blue-light"
    },
    {
      name: "Advanced Package",
      description: "Comprehensive learning solution for medium-sized schools",
      features: [
        "15 Learning Kits of Your Choice",
        "Extended Teacher Training Program",
        "Bi-weekly Support Sessions",
        "Full Access to Digital Resources",
        "Customized Learning Plans"
      ],
      color: "bg-paata-green-light",
      popular: true
    },
    {
      name: "Premium Package",
      description: "Full-scale implementation for large educational institutions",
      features: [
        "30 Learning Kits of Your Choice",
        "Comprehensive Teacher Training Program",
        "Weekly Support and Monitoring",
        "Full Access to Digital Resources",
        "Customized Curriculum Integration",
        "Impact Assessment Reports"
      ],
      color: "bg-paata-orange-light"
    }
  ];

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="School Partnerships" 
          subtitle="Discover how Paatashala can enhance learning in your school." 
        />
        
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Transform Your Classroom Experience</h3>
                <p className="text-gray-600 mb-6">
                  At Paatashala, we partner with schools to bring hands-on, interactive learning experiences 
                  to students. Our educational kits are designed to make learning engaging, fun, and effective.
                </p>
                <p className="text-gray-600 mb-6">
                  We work closely with teachers and administrators to customize our programs to meet your school's 
                  specific needs and curriculum requirements.
                </p>
                <Button asChild size="lg" className="paata-btn-primary">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
              <div className="bg-paata-blue-light h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Students learning with Paatashala kits" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-8 text-center">Benefits for Your School</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mb-8 text-center">Partnership Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-xl shadow-md overflow-hidden relative ${pkg.popular ? 'transform -translate-y-4 shadow-lg' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-paata-orange text-white py-1 px-4 rounded-bl-lg font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`${pkg.color} p-6`}>
                  <h4 className="text-xl font-bold mb-2">{pkg.name}</h4>
                  <p className="text-gray-700">{pkg.description}</p>
                </div>
                <div className="bg-white p-6">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-paata-green mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={pkg.popular ? "default" : "outline"} className={pkg.popular ? "w-full bg-paata-green hover:bg-green-600" : "w-full"}>
                    <Link to="/contact">Get More Info</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl mb-6">Ready to transform the learning experience at your school?</p>
            <Button asChild size="lg" className="paata-btn-primary">
              <Link to="/contact">Contact Our Education Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Schools;
