import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';

const steps = [
  { num: '01', title: 'Businesses Join', description: 'Local companies apply and become members of the GCBA network.' },
  { num: '02', title: 'Members Are Listed by Category', description: 'Each member is placed in organized service categories with detailed profiles.' },
  { num: '03', title: 'Customers Submit Requests', description: 'Consumers and businesses submit service requests through GCBA platforms.' },
  { num: '04', title: 'Leads Are Routed', description: 'Requests are routed by category, fit, availability, sponsorship level, or customer selection.' },
  { num: '05', title: 'Members Follow Up and Grow', description: 'Members connect with prospects, build relationships, and grow their business.' },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Process"
          title="How It Works"
          description="A straightforward path from membership to real business opportunities."
        />

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-navy text-gold flex items-center justify-center font-heading font-bold text-sm shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-3" />}
              </div>
              <div className="pb-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}