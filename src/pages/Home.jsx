import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import CategorySection from '@/components/home/CategorySection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import MembershipPreviewSection from '@/components/home/MembershipPreviewSection';
import CTABanner from '@/components/shared/CTABanner';
import DisclosureBlock from '@/components/shared/DisclosureBlock';
import TestimonialSlider from '@/components/shared/TestimonialSlider';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      
      {/* Built for Local Business Growth */}
      <section className="py-20 sm:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">Our Purpose</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
            Built for Local Business Growth
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            GCBA gives participating businesses a structured way to be found, referred, promoted, and connected. Members can start with a basic listing and grow into featured placement, category sponsorship, landing pages, and expanded marketing support.
          </p>
        </div>
      </section>

      <CategorySection />
      <HowItWorksSection />
      <MembershipPreviewSection />
      <TestimonialSlider />
      <CTABanner />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DisclosureBlock text="GCBA is a private, for-profit business network and marketing platform. Participating businesses may pay dues, sponsorship fees, advertising fees, setup fees, or other compensation for inclusion or enhanced visibility. Customers contract directly with participating providers." />
      </div>
    </div>
  );
}