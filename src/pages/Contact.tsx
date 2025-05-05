
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const Contact = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="Contact Our Team" 
          subtitle="Get in touch with Paatashala's education experts for inquiries and support." 
        />
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">Our contact form is coming soon! Please check back later to get in touch with us.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
