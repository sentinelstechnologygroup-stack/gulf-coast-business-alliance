import React from 'react';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import CTABanner from '@/components/shared/CTABanner';
import TestimonialSlider from '@/components/shared/TestimonialSlider';
import { Shield, Target, FolderTree, DollarSign, Megaphone, Users, Home, Hammer, Paintbrush, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const differentiators = [
  { icon: Shield, title: 'Commercial and Transparent', desc: 'GCBA operates openly as a for-profit business network. No nonprofit claims, no hidden structures.' },
  { icon: Target, title: 'Built Around Real Lead Generation', desc: 'Websites, landing pages, and inquiry systems designed to produce real customer opportunities.' },
  { icon: FolderTree, title: 'Category-Based Structure', desc: 'Organized service categories led by industry chairs for clear referral paths.' },
  { icon: DollarSign, title: 'Affordable Entry Membership', desc: 'Start at $10/month with clear upgrade paths as your business grows.' },
  { icon: Megaphone, title: 'Sponsorship and Growth Options', desc: 'Multiple tiers for increased visibility, featured placement, and marketing support.' },
  { icon: Users, title: 'Designed for Local Service Providers', desc: 'Built specifically for Gulf Coast businesses that serve local customers.' },
];

const chairs = [
  { icon: Home, title: 'Real Estate Services' },
  { icon: Hammer, title: 'Construction & Roofing' },
  { icon: Paintbrush, title: 'Painting & Surface Solutions' },
  { icon: Globe, title: 'Internet, IT & Website Solutions' },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="About Gulf Coast Business Alliance"
        description="Gulf Coast Business Alliance was created to give local business owners a practical, organized way to build visibility, generate opportunities, and collaborate across trusted service categories."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Who We Are</p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Model</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                GCBA operates as a private commercial business alliance, not a nonprofit chamber. The organization owns and manages websites, landing pages, directories, lead capture systems, referral workflows, events, sponsorship opportunities, and member marketing programs.
              </p>
              <ul className="space-y-3">
                {[
                  'Private for-profit business network',
                  'Member directory and marketing platform',
                  'Category-led referral structure',
                  'Paid membership and sponsorship model',
                  'Lead-generation websites and landing pages',
                  'Clear member rules and category protection',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Our Purpose</p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <div className="bg-muted/50 border border-border rounded-xl p-8">
                <p className="text-lg text-foreground leading-relaxed font-medium italic">
                  "To help Gulf Coast businesses grow through structured referrals, local visibility, digital lead generation, and category-based collaboration."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership Structure"
            title="Industry Chair Model"
            description="GCBA organizes service categories through industry chairs. Chairs help develop their category, support member recruitment, define service lanes, reduce overlap, and help maintain professional standards."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chairs.map((chair, i) => (
              <motion.div
                key={chair.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-navy mx-auto flex items-center justify-center mb-4">
                  <chair.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{chair.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Advantage"
            title="What Makes GCBA Different"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <item.icon className="w-6 h-6 text-gold mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider light />
      <CTABanner />
    </div>
  );
}