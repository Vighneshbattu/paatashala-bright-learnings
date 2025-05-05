
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const Kits = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="Learning Kits" 
          subtitle="Explore our hands-on educational kits designed to make learning engaging and practical." 
        />
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">Our complete kit catalog is coming soon! Check back later for our full range of educational kits.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Kits;
