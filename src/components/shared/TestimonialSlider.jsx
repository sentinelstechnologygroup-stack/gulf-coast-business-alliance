import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const placeholderTestimonials = [
  {
    name: 'Launch Participant — Placeholder',
    business_name: 'Gulf Coast Area Business',
    role: 'Founding Member Placeholder',
    quote: 'GCBA is being built to make local visibility, referrals, and service requests easier for Gulf Coast businesses to organize.',
  },
  {
    name: 'Category Member — Placeholder',
    business_name: 'Local Service Provider',
    role: 'Sample Launch Testimonial',
    quote: 'The category-based structure gives business owners a clearer way to connect, collaborate, and be found in their local market.',
  },
  {
    name: 'Network Participant — Placeholder',
    business_name: 'Gulf Coast Region Business',
    role: 'Customer Feedback Placeholder',
    quote: 'The platform is designed to combine networking, directory visibility, sponsorships, and lead capture in one organized system.',
  },
  {
    name: 'Service Provider — Placeholder',
    business_name: 'Regional Business Member',
    role: 'Founding Member Placeholder',
    quote: 'Having a structured referral network with category organization makes it easier for customers to find the right local professional.',
  },
];

export default function TestimonialSlider({ light = false }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? placeholderTestimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === placeholderTestimonials.length - 1 ? 0 : i + 1));
  const t = placeholderTestimonials[index];

  return (
    <section className={`py-20 ${light ? 'bg-navy' : 'bg-muted/30'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className={`text-sm font-semibold uppercase tracking-wider mb-2 text-gold`}>Testimonials</p>
          <h2 className={`font-heading text-3xl font-bold ${light ? 'text-white' : 'text-foreground'}`}>
            What Participants Are Saying
          </h2>
          <p className={`text-xs mt-3 ${light ? 'text-white/50' : 'text-muted-foreground'}`}>
            Testimonials shown during launch may include sample placeholders until verified testimonials are collected and approved for publication.
          </p>
        </div>

        <div className={`relative rounded-2xl border p-8 sm:p-12 ${light ? 'bg-white/5 border-white/10' : 'bg-card border-border shadow-lg'}`}>
          <Quote className={`w-10 h-10 mb-6 ${light ? 'text-gold/40' : 'text-gold/30'}`} />

          <blockquote className={`text-xl sm:text-2xl font-heading font-medium leading-relaxed mb-8 ${light ? 'text-white' : 'text-foreground'}`}>
            "{t.quote}"
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <p className={`font-semibold text-sm ${light ? 'text-white' : 'text-foreground'}`}>{t.name}</p>
              <p className={`text-xs mt-0.5 ${light ? 'text-white/50' : 'text-muted-foreground'}`}>{t.role} · {t.business_name}</p>
              <span className="inline-block text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5 mt-2">
                Sample Launch Placeholder
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prev} className={light ? 'border-white/20 text-white hover:bg-white/10' : ''}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next} className={light ? 'border-white/20 text-white hover:bg-white/10' : ''}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-1.5 mt-6">
            {placeholderTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-gold' : light ? 'bg-white/20' : 'bg-border'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}