import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import PageHero from '@/components/shared/PageHero';
import DisclosureBlock from '@/components/shared/DisclosureBlock';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

const serviceOptions = [
  { value: 'real_estate', label: 'Real Estate' },
  { value: 'roofing', label: 'Roofing' },
  { value: 'construction', label: 'Construction' },
  { value: 'painting', label: 'Painting' },
  { value: 'surface_coatings', label: 'Surface Coatings' },
  { value: 'website_design', label: 'Website Design' },
  { value: 'it_support', label: 'IT Support' },
  { value: 'internet_connectivity', label: 'Internet / Connectivity' },
  { value: 'other', label: 'Other' },
];

export default function RequestService() {
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service_needed: '',
    project_location: '', timeline: '', budget_range: '', project_details: '',
  });

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service_needed) {
      toast.error('Please fill in all required fields.');
      return;
    }
    if (!consent) {
      toast.error('Please acknowledge the consent statement before submitting.');
      return;
    }
    setLoading(true);
    try {
      await base44.entities.ServiceRequest.create({
        ...form,
        consent: true,
        consent_acknowledged: true,
        disclosure_acknowledged: true,
        source_page: 'request-service',
        status: 'new',
      });
      toast.success('Service request submitted. A participating member may contact you directly.');
      setForm({ name: '', email: '', phone: '', service_needed: '', project_location: '', timeline: '', budget_range: '', project_details: '' });
      setConsent(false);
    } catch {
      toast.error('Submission failed. Please try again or email us directly at info@gcbusinessalliance.com.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Service Request"
        title="Request a Participating Local Service Provider"
        description="Tell us what you need, and GCBA will route your request to an appropriate participating member or category contact when available."
      />

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label>Name *</Label>
                  <Input value={form.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Full name" />
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
                  <Label>Service Needed *</Label>
                  <Select value={form.service_needed} onValueChange={(v) => handleChange('service_needed', v)}>
                    <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Project Location</Label>
                  <Input value={form.project_location} onChange={(e) => handleChange('project_location', e.target.value)} placeholder="City, area, or zip" />
                </div>
                <div className="space-y-2">
                  <Label>Timeline</Label>
                  <Input value={form.timeline} onChange={(e) => handleChange('timeline', e.target.value)} placeholder="e.g. ASAP, 2 weeks, 1 month" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Budget Range</Label>
                  <Input value={form.budget_range} onChange={(e) => handleChange('budget_range', e.target.value)} placeholder="e.g. $5,000 - $10,000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Project Details</Label>
                <Textarea value={form.project_details} onChange={(e) => handleChange('project_details', e.target.value)} rows={5} placeholder="Describe what you need..." />
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <Checkbox checked={consent} onCheckedChange={setConsent} id="consent" className="mt-0.5" />
                <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I understand GCBA is a private, for-profit business network and marketing platform. My contact information and request details may be shared with one or more participating member businesses who may contact me directly. I am responsible for independently verifying any provider's licensing, insurance, and qualifications before contracting. GCBA does not guarantee provider quality, availability, pricing, or results.
                </label>
              </div>

              <Button type="submit" disabled={loading} size="lg" className="bg-gold hover:bg-gold/90 text-white w-full sm:w-auto px-10">
                {loading ? <Loader2 className="mr-2 w-4 h-4 animate-spin" /> : <Send className="mr-2 w-4 h-4" />}
                Submit Service Request
              </Button>
            </form>
          </div>

          <DisclosureBlock text="GCBA is a private, for-profit business network and marketing platform. Participating businesses may pay membership fees, sponsorship fees, advertising fees, setup fees, referral fees, or other compensation for inclusion, enhanced visibility, sponsored placement, or lead-routing priority. Customers are responsible for selecting, verifying, and contracting directly with any provider. GCBA does not guarantee provider licensing, insurance, quality, pricing, availability, workmanship, results, leads, revenue, or business outcomes. Submitting this form does not create a contract with GCBA." />
        </div>
      </section>
    </div>
  );
}