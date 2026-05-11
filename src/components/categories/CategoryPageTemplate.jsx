import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Star, MapPin, Info, HelpCircle, ChevronDown } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import DisclosureBlock from '@/components/shared/DisclosureBlock';

export default function CategoryPageTemplate({ category }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      <PageHero eyebrow="Service Category" title={category.name} description={category.overview} />

      {/* Launch Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-3 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            Category listings shown during launch may include sample or founding category placeholders until approved members are published.
          </p>
        </div>
      </div>

      {/* Common Requests */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Common Requests</p>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-5">What Customers Ask For</h2>
              <ul className="space-y-2">
                {category.commonRequests.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/request-service">
                  <Button className="bg-gold hover:bg-gold/90 text-white">Request This Service</Button>
                </Link>
                <Link to="/join">
                  <Button variant="outline">Join This Category</Button>
                </Link>
              </div>
            </div>

            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Related Services</p>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-5">Also in This Network</h2>
              <div className="space-y-2">
                {category.relatedServices.map((s) => (
                  <div key={s} className="bg-muted/50 border border-border rounded-lg px-4 py-2 text-sm text-foreground">{s}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Chair + Sponsor */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">Category Chair</p>
              <h3 className="font-heading font-semibold text-foreground text-lg">{category.chair}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                The category chair helps develop the {category.name} category, supports member recruitment, defines service lanes, and helps maintain professional standards. Chair position is a placeholder until formally assigned.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs bg-gold/10 text-gold border border-gold/20 rounded-full px-2 py-0.5 font-semibold">Sponsored</span>
              </div>
              <Star className="w-6 h-6 text-gold mb-2" />
              <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">Category Sponsor</p>
              <h3 className="font-heading font-semibold text-foreground text-lg">{category.sponsor}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Category sponsor placement is a paid advertising and promotional arrangement. Sponsor visibility is subject to GCBA sponsorship terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Member Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Participating Members</p>
            <h2 className="font-heading text-2xl font-bold text-foreground">Businesses in This Category</h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-2xl">
              Listings shown during launch may include founding placeholders. Approved member details will be published upon launch.
            </p>
          </div>
          <div className="bg-muted/40 border border-border rounded-lg px-4 py-3 mb-4 flex items-start gap-2">
            <Shield className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold">Verified*</span> means the member submitted business information for GCBA review. It does not mean GCBA guarantees licensing, insurance, workmanship, results, or regulatory compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.placeholderMembers.map((m, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-semibold text-foreground pr-2 text-sm leading-snug">{m.name}</h3>
                  <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded px-2 py-0.5 shrink-0">Placeholder</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3 h-3" />Gulf Coast Region
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                <Link to="/request-service">
                  <Button size="sm" className="mt-4 bg-navy hover:bg-gulf text-white text-xs w-full">Request Service</Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/directory">
              <Button variant="outline">View Full Directory</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <HelpCircle className="w-8 h-8 text-gold mx-auto mb-3" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {category.faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-foreground text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Get Started</p>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Find a Provider or Join This Category</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-sm">
            Request a service referral or apply to join the GCBA {category.name} category as a participating member.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-service">
              <Button className="bg-gold hover:bg-gold/90 text-white px-8">Request This Service</Button>
            </Link>
            <Link to="/join">
              <Button variant="outline" className="border-sand/30 text-sand hover:bg-sand/10 hover:text-white px-8">Join the Alliance</Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DisclosureBlock text="Sponsored placement, paid advertising, membership tier, and sponsorship status may affect visibility, directory order, featured placement, advertising position, or lead-routing priority. GCBA does not guarantee provider licensing, insurance, quality, pricing, availability, workmanship, results, leads, revenue, or business outcomes. Customers are responsible for independently verifying any provider before contracting." />
      </div>
    </div>
  );
}