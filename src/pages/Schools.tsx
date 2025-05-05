
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const Schools = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="School Partnerships" 
          subtitle="Discover how Paatashala can enhance learning in your school." 
        />
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">Our school partnership information is being prepared. Please check back soon for details.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Schools;
