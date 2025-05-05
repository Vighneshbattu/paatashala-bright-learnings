
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const Courses = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="Educational Courses" 
          subtitle="Discover our interactive courses designed to make learning engaging and effective." 
        />
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">Our course content is coming soon! Check back later for our interactive learning programs.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
