import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import DisclosureBlock from '@/components/shared/DisclosureBlock';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Check, Loader2, Send } from 'lucide-react';
import TestimonialSlider from '@/components/shared/TestimonialSlider';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const sponsorTiers = [
  {
    name: 'Community Sponsor',
    price: '$100',
    period: '/month',
    features: ['Website logo placement', 'Newsletter mention', 'Sponsored badge', 'Event acknowledgment'],
  },
  {
    name: 'Business Growth Sponsor',
    price: '$250',
    period: '/month',
    features: ['Enhanced website visibility', 'Newsletter featured placement', 'Event sponsor mentions', 'Directory priority', 'Sponsored badge'],
  },
  {
    name: 'Category Sponsor',
    price: '$500+',
    period: '/month',
    features: ['Sponsored category placement', 'Landing page inclusion', 'Premium visibility', 'Campaign inclusion', 'Event speaking opportunities', 'Sponsor badge'],
    highlighted: true,
  },
  {
    name: 'Premier Regional Sponsor',
    price: 'Custom',
    period: '',
    features: ['Maximum visibility across all platforms', 'Custom campaign development', 'Premier event placement', 'Exclusive sponsorship opportunities', 'Dedicated account support'],
  },
];

export default function Sponsorships() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    company_name: '', contact_name: '', email: '', phone: '',
    sponsorship_tier: '', category_interest: '', message: '',
  });

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.company_name || !form.contact_name || !form.email) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await base44.entities.SponsorInquiry.create({
        ...form,
        source_page: 'sponsorships',
        status: 'new',
      });
      toast.success('Sponsorship inquiry submitted! We will contact you soon.');
      setForm({ company_name: '', contact_name: '', email: '', phone: '', sponsorship_tier: '', category_interest: '', message: '' });
    } catch {
      toast.error('Submission failed. Please try again or email us directly at info@gcbusinessalliance.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Sponsorships"
        title="Sponsor a Category. Increase Your Visibility."
        description="GCBA sponsorships help businesses gain premium visibility across the network, events, landing pages, directories, newsletters, and category-specific campaigns."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Tiers" title="Sponsorship Levels" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl border p-6 flex flex-col ${
                  tier.highlighted ? 'border-gold ring-2 ring-gold/20 bg-card shadow-xl relative' : 'border-border bg-card hover:shadow-lg'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
                  </div>
                )}
                <h3 className="font-heading text-lg font-bold text-foreground">{tier.name}</h3>
                <div className="mt-2 mb-5">
                  <span className="text-2xl font-bold text-foreground">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground text-sm">{tier.period}</span>}
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#sponsor-form">
                  <Button className={`w-full ${tier.highlighted ? 'bg-gold hover:bg-gold/90 text-white' : 'bg-navy hover:bg-gulf text-white'}`} size="sm">
                    Get Started
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider light />

      <section id="sponsor-form" className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Inquire" title="Request Sponsorship Information" />
          <div className="bg-card border border-border rounded-xl p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label>Company Name *</Label>
                  <Input value={form.company_name} onChange={(e) => handleChange('company_name', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Contact Name *</Label>
                  <Input value={form.contact_name} onChange={(e) => handleChange('contact_name', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Sponsorship Tier Interest</Label>
                  <Select value={form.sponsorship_tier} onValueChange={(v) => handleChange('sponsorship_tier', v)}>
                    <SelectTrigger><SelectValue placeholder="Select tier" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="community">Community — $100/mo</SelectItem>
                      <SelectItem value="business_growth">Business Growth — $250/mo</SelectItem>
                      <SelectItem value="category">Category — $500+/mo</SelectItem>
                      <SelectItem value="premier_regional">Premier Regional — Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Category Interest</Label>
                  <Input value={form.category_interest} onChange={(e) => handleChange('category_interest', e.target.value)} placeholder="e.g. Real Estate, Construction" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea value={form.message} onChange={(e) => handleChange('message', e.target.value)} rows={4} />
              </div>
              <Button type="submit" disabled={loading} size="lg" className="bg-gold hover:bg-gold/90 text-white w-full sm:w-auto px-10">
                {loading ? <Loader2 className="mr-2 w-4 h-4 animate-spin" /> : <Send className="mr-2 w-4 h-4" />}
                Request Sponsorship Information
              </Button>
            </form>
          </div>
          <DisclosureBlock text="GCBA is a private, for-profit business network. Sponsorship fees, advertising fees, and membership tier may affect visibility, directory order, featured placement, advertising position, or lead-routing priority. Sponsored or paid placements will be disclosed where shown. GCBA will not claim that a paid member is 'best,' '#1,' 'top-rated,' or similar unless supported by a recognized third-party award or verifiable source. GCBA does not guarantee leads, revenue, or business outcomes from any sponsorship arrangement." />
        </div>
      </section>
    </div>
  );
}