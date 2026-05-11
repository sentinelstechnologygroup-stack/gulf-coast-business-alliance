import React from 'react';
import PageHero from '@/components/shared/PageHero';
import PricingCard from '@/components/join/PricingCard';
import JoinForm from '@/components/join/JoinForm';
import DisclosureBlock from '@/components/shared/DisclosureBlock';
import TestimonialSlider from '@/components/shared/TestimonialSlider';
import SectionHeading from '@/components/shared/SectionHeading';

const tiers = [
  {
    name: 'Basic Member',
    price: '$10',
    period: '/month',
    features: [
      'Basic business profile',
      'Member directory listing',
      'General networking access',
      'Eligibility for referral opportunities',
      'Access to selected events',
      'Approved promotions participation',
    ],
  },
  {
    name: 'Verified Member',
    price: '$29',
    period: '/month',
    features: [
      'Enhanced trust badge',
      'Expanded profile',
      'Additional service details',
      'Member spotlight eligibility',
      'Improved credibility presentation',
    ],
  },
  {
    name: 'Featured Member',
    price: '$79',
    period: '/month',
    features: [
      'Featured category visibility',
      'Enhanced profile placement',
      'Additional promotional inclusion',
      'Expanded media/photos',
      'Higher directory visibility',
    ],
  },
  {
    name: 'Growth Member',
    price: '$249',
    period: '/month',
    features: [
      'Featured profile',
      'Dedicated landing page',
      'Lead capture form',
      'Basic reporting',
      'Newsletter inclusion',
      'Marketing support',
    ],
  },
  {
    name: 'Category Sponsor',
    price: '$500+',
    period: '/month',
    features: [
      'Sponsored category placement',
      'Premium visibility',
      'Event mentions',
      'Landing page inclusion',
      'Sponsor badge',
      'Campaign inclusion',
    ],
  },
];

export default function Join() {
  return (
    <div>
      <PageHero
        eyebrow="Membership"
        title="Join a Business Network Built for Visibility, Referrals, and Growth"
        description="GCBA membership gives local businesses a structured way to be listed, promoted, connected, and considered for category-relevant referral opportunities."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Membership Tiers"
            title="Choose Your Level"
            description="Start with an affordable membership and upgrade as your business grows."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {tiers.map((tier, i) => (
              <PricingCard key={tier.name} tier={tier} highlighted={i === 3} />
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
            Final pricing, availability, and category placement may vary by market, category, sponsorship level, and service scope.
          </p>
        </div>
      </section>

      <section id="apply-form" className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Apply Now"
            title="Submit Your Application"
            description="Fill out the form below and our team will review your application."
          />
          <div className="bg-card border border-border rounded-xl p-6 sm:p-10">
            <JoinForm />
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DisclosureBlock text="GCBA is a private, for-profit business network and marketing platform. Participating businesses may pay membership fees, sponsorship fees, advertising fees, setup fees, referral fees, or other compensation for inclusion, enhanced visibility, sponsored placement, or lead-routing priority. Membership tier may affect visibility, directory placement, or referral routing. Membership does not guarantee leads, revenue, results, customers, or any specific business outcome. Final pricing, availability, and category placement may vary by market, category, and service scope." />
      </div>
    </div>
  );
}