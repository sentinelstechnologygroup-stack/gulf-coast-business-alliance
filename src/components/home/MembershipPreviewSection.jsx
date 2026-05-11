import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

export default function MembershipPreviewSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">Affordable Entry</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Membership Starts at $10/month
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
          Basic membership gives local businesses an affordable way to join the network, appear in the directory, access networking opportunities, and become eligible for appropriate referral opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['Business Profile', 'Directory Listing', 'Networking Access', 'Referral Eligibility', 'Event Access'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-gold" />
              {item}
            </div>
          ))}
        </div>
        <Link to="/join">
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-white px-8">
            View Membership Options
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}