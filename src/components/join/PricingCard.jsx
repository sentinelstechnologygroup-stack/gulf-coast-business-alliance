import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingCard({ tier, highlighted = false }) {
  return (
    <div
      className={`rounded-xl border p-6 sm:p-8 flex flex-col transition-shadow ${
        highlighted
          ? 'border-gold bg-card shadow-xl ring-2 ring-gold/20 relative'
          : 'border-border bg-card hover:shadow-lg'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-gold text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="font-heading text-xl font-bold text-foreground">{tier.name}</h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-foreground">{tier.price}</span>
          {tier.period && <span className="text-muted-foreground text-sm">{tier.period}</span>}
        </div>
      </div>
      <ul className="space-y-3 flex-1 mb-8">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#apply-form">
        <Button
          className={`w-full ${highlighted ? 'bg-gold hover:bg-gold/90 text-white' : 'bg-navy hover:bg-gulf text-white'}`}
        >
          Get Started <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </a>
    </div>
  );
}