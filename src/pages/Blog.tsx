
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const Blog = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          title="Education Blog" 
          subtitle="The latest insights, tips, and updates on educational practices and innovations." 
        />
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">Our blog posts are coming soon! Check back later for educational content and updates.</p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
