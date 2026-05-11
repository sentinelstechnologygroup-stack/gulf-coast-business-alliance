import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import PageHero from '@/components/shared/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Loader2, Send, Users, Handshake, Award, HelpCircle, Briefcase } from 'lucide-react';
import { toast } from 'sonner';

const reasons = [
  { value: 'join_network', label: 'Join the Network', icon: Users },
  { value: 'request_service', label: 'Request a Service', icon: Briefcase },
  { value: 'sponsorship', label: 'Ask About Sponsorship', icon: Award },
  { value: 'partnership', label: 'Partner with GCBA', icon: Handshake },
  { value: 'general', label: 'General Inquiry', icon: HelpCircle },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business_organization: '', reason: '', message: '',
  });
  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { toast.error('Please fill in all required fields.'); return; }
    setLoading(true);
    try {
      await base44.entities.ContactInquiry.create({
        ...form,
        source_page: 'contact',
        status: 'new',
      });
      toast.success('Message sent! We will respond soon.');
      setForm({ name: '', email: '', phone: '', business_organization: '', reason: '', message: '' });
    } catch {
      toast.error('Submission failed. Please try again or email us directly at info@gcbusinessalliance.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Gulf Coast Business Alliance"
        description="We'd love to hear from you. Whether you're ready to join, need a service, or want to explore a sponsorship — reach out."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">How Can We Help?</h3>
              <div className="space-y-4 mb-8">
                {reasons.map((r) => (
                  <div key={r.value} className="flex items-center gap-3 text-foreground">
                    <r.icon className="w-5 h-5 text-gold" />
                    <span className="text-sm">{r.label}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">info@gcbusinessalliance.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Service Area</p>
                    <p className="text-sm font-medium text-foreground">Gulf Coast Region</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6 sm:p-10">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
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
                      <Label>Phone</Label>
                      <Input value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Business / Organization</Label>
                      <Input value={form.business_organization} onChange={(e) => handleChange('business_organization', e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Reason for Contact</Label>
                    <Select value={form.reason} onValueChange={(v) => handleChange('reason', v)}>
                      <SelectTrigger><SelectValue placeholder="Select reason" /></SelectTrigger>
                      <SelectContent>
                        {reasons.map((r) => <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Message *</Label>
                    <Textarea value={form.message} onChange={(e) => handleChange('message', e.target.value)} rows={5} placeholder="How can we help?" />
                  </div>
                  <Button type="submit" disabled={loading} size="lg" className="bg-gold hover:bg-gold/90 text-white w-full sm:w-auto px-10">
                    {loading ? <Loader2 className="mr-2 w-4 h-4 animate-spin" /> : <Send className="mr-2 w-4 h-4" />}
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}