import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({
  title = "Ready to Grow Your Business?",
  description = "Join Gulf Coast Business Alliance and gain access to a structured network of local businesses, referral opportunities, and marketing support.",
  primaryCTA = { label: "Join the Alliance", path: "/join" },
  secondaryCTA = { label: "Request a Service", path: "/request-service" },
}) {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={primaryCTA.path}>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-white px-8">
              {primaryCTA.label}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link to={secondaryCTA.path}>
            <Button size="lg" variant="outline" className="border-sand/30 text-sand hover:bg-sand/10 px-8">
              {secondaryCTA.label}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}