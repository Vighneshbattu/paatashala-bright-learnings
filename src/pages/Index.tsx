
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroBanner from '@/components/home/HeroBanner';
import FeaturesSection from '@/components/home/FeaturesSection';
import PopularKits from '@/components/home/PopularKits';
import SchoolsPartnership from '@/components/home/SchoolsPartnership';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <FeaturesSection />
      <PopularKits />
      <SchoolsPartnership />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
