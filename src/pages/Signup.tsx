
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const Signup = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="Create Your Account" 
          subtitle="Join Paatashala and start your interactive learning journey today." 
        />
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">Our signup functionality is coming soon! Please check back later to register.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
