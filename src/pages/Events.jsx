import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/shared/SectionHeading';
import CTABanner from '@/components/shared/CTABanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, MapPin, Clock, ArrowRight, Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Monthly Business Mixer',
    date: 'Launch schedule coming soon',
    time: 'TBD',
    location: 'TBD — Gulf Coast Area',
    description: 'Network with local business owners, exchange referrals, and build lasting professional relationships in a casual setting.',
  },
  {
    title: 'Referral Breakfast',
    date: 'Launch schedule coming soon',
    time: 'TBD',
    location: 'TBD — Gulf Coast Area',
    description: 'Structured referral exchange session designed to help members share qualified business referrals.',
  },
  {
    title: 'Category Roundtable',
    date: 'Launch schedule coming soon',
    time: 'TBD',
    location: 'TBD — Gulf Coast Area',
    description: 'Category-specific discussions led by industry chairs to review opportunities, share insights, and improve collaboration.',
  },
  {
    title: 'Sponsor Showcase',
    date: 'Quarterly — launch date TBD',
    time: 'TBD',
    location: 'TBD',
    description: 'Event for sponsors and featured members to present services, connect with prospects, and demonstrate expertise.',
  },
  {
    title: 'Local Business Growth Workshop',
    date: 'Launch schedule coming soon',
    time: 'TBD',
    location: 'TBD — Gulf Coast Area',
    description: 'Educational workshop covering marketing strategies, lead generation techniques, and business growth tactics for local companies.',
  },
];

export default function Events() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', business_name: '', event_interest: '', message: '' });
  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) { toast.error('Please fill in all required fields.'); return; }
    setLoading(true);
    try {
      await base44.entities.EventRegistration.create({
        ...form,
        source_page: 'events',
        status: 'new',
      });
      toast.success('Interest submitted! We will follow up with event details when confirmed.');
      setForm({ name: '', email: '', business_name: '', event_interest: '', message: '' });
    } catch {
      toast.error('Submission failed. Please try again or email us at info@gcbusinessalliance.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Events"
        title="Networking, Workshops, and Local Business Events"
        description="Connect face-to-face with other Gulf Coast business owners, exchange referrals, and learn strategies to grow."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-8 flex items-start gap-3">
            <span className="text-amber-600 text-sm font-medium mt-0.5">📅</span>
            <p className="text-sm text-amber-800 leading-relaxed">
              Event dates, locations, and registration availability are subject to confirmation. Schedules shown are planned formats and are not yet confirmed. Express your interest below and we will notify you when details are finalized.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 text-gold text-sm font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Clock className="w-3.5 h-3.5" /> {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-3.5 h-3.5" /> {event.location}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{event.description}</p>
                <a href="#event-form">
                  <Button className="w-full bg-navy hover:bg-gulf text-white" size="sm">
                    Register Interest <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="event-form" className="py-20 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Register" title="Express Your Interest" />
          <div className="bg-card border border-border rounded-xl p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label>Name *</Label>
                  <Input value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Business Name</Label>
                  <Input value={form.business_name} onChange={(e) => handleChange('business_name', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Event Interest</Label>
                  <Input value={form.event_interest} onChange={(e) => handleChange('event_interest', e.target.value)} placeholder="Which event?" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea value={form.message} onChange={(e) => handleChange('message', e.target.value)} rows={3} />
              </div>
              <Button type="submit" disabled={loading} size="lg" className="bg-gold hover:bg-gold/90 text-white w-full sm:w-auto px-10">
                {loading ? <Loader2 className="mr-2 w-4 h-4 animate-spin" /> : <Send className="mr-2 w-4 h-4" />}
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      <CTABanner title="Want to Grow Your Business?" description="Join GCBA for exclusive networking events, referral opportunities, and local visibility." />
    </div>
  );
}