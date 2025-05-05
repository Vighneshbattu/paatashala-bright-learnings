
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const KitDetail = () => {
  const { id } = useParams();
  
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <SectionHeading 
          title={`Learning Kit #${id}`} 
          subtitle="Detailed information about this educational kit is coming soon." 
        />
        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">Full details for this kit will be available shortly. Please check back later!</p>
        </div>
      </section>
    </Layout>
  );
};

export default KitDetail;
