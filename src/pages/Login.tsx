
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const Login = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="Log In" 
          subtitle="Access your Paatashala account to continue your learning journey." 
        />
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">Our login functionality is coming soon! Please check back later.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
