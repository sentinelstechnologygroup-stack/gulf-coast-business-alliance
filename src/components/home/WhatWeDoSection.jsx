import React from 'react';
import { Users, Target, Megaphone, FolderTree } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';

const cards = [
  {
    icon: Users,
    title: 'Business Networking',
    description: 'Build relationships with local business owners, service providers, and referral partners.',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Participate in GCBA-owned websites, landing pages, and inquiry systems designed to create customer opportunities.',
  },
  {
    icon: Megaphone,
    title: 'Member Marketing',
    description: 'Gain visibility through member profiles, directory listings, featured placements, sponsorships, and promotional campaigns.',
  },
  {
    icon: FolderTree,
    title: 'Category Growth',
    description: 'Join an organized service category led by industry chairs who help develop referral capacity and service coverage.',
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What GCBA Does"
          title="A Complete Business Growth Platform"
          description="From networking to lead generation, GCBA gives local businesses the tools and structure to grow."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-gold/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                <card.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}