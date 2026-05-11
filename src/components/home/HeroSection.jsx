import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-gulf/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium">Private Business Network</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Where Gulf Coast Businesses Connect, Grow, and Generate{' '}
            <span className="text-gold">Real Opportunities</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            Gulf Coast Business Alliance is a private business network and lead-generation platform helping local companies gain visibility, build trusted referral relationships, and connect with customers who need their services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/join">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white px-8 h-13 text-base w-full sm:w-auto">
                Join the Alliance
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/request-service">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 h-13 text-base w-full sm:w-auto"
              >
                Request a Service
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Trust Bar */}
      <div className="relative border-t border-white/10 bg-navy/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
            {[
              'Private Business Network',
              'Member Marketing Platform',
              'Local Lead Generation',
              'Category-Based Referrals',
              'Sponsorship Opportunities',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="text-white/60 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}