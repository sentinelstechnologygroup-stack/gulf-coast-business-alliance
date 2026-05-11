import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

export default function JoinForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    business_name: '', contact_name: '', email: '', phone: '',
    website: '', business_category: '', service_area: '',
    membership_interest: '', message: '',
  });

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.business_name || !form.contact_name || !form.email) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      await base44.entities.MemberApplication.create({
        ...form,
        source_page: 'join',
        consent_acknowledged: true,
        status: 'new',
      });
      toast.success('Application submitted! We will be in touch soon.');
      setForm({ business_name: '', contact_name: '', email: '', phone: '', website: '', business_category: '', service_area: '', membership_interest: '', message: '' });
    } catch {
      toast.error('Submission failed. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label>Business Name *</Label>
          <Input value={form.business_name} onChange={(e) => handleChange('business_name', e.target.value)} placeholder="Your business name" />
        </div>
        <div className="space-y-2">
          <Label>Owner / Contact Name *</Label>
          <Input value={form.contact_name} onChange={(e) => handleChange('contact_name', e.target.value)} placeholder="Full name" />
        </div>
        <div className="space-y-2">
          <Label>Email *</Label>
          <Input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="you@business.com" />
        </div>
        <div className="space-y-2">
          <Label>Phone</Label>
          <Input value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="(555) 123-4567" />
        </div>
        <div className="space-y-2">
          <Label>Website</Label>
          <Input value={form.website} onChange={(e) => handleChange('website', e.target.value)} placeholder="https://www.example.com" />
        </div>
        <div className="space-y-2">
          <Label>Business Category</Label>
          <Input value={form.business_category} onChange={(e) => handleChange('business_category', e.target.value)} placeholder="e.g. Construction, Real Estate" />
        </div>
        <div className="space-y-2">
          <Label>Service Area</Label>
          <Input value={form.service_area} onChange={(e) => handleChange('service_area', e.target.value)} placeholder="e.g. Pensacola, Gulf Coast" />
        </div>
        <div className="space-y-2">
          <Label>Membership Interest</Label>
          <Select value={form.membership_interest} onValueChange={(v) => handleChange('membership_interest', v)}>
            <SelectTrigger><SelectValue placeholder="Select a tier" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic — $10/mo</SelectItem>
              <SelectItem value="verified">Verified — $29/mo</SelectItem>
              <SelectItem value="featured">Featured — $79/mo</SelectItem>
              <SelectItem value="growth">Growth — $249/mo</SelectItem>
              <SelectItem value="category_sponsor">Category Sponsor — $500+/mo</SelectItem>
              <SelectItem value="not_sure">Not Sure Yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Message</Label>
        <Textarea value={form.message} onChange={(e) => handleChange('message', e.target.value)} placeholder="Tell us about your business and goals..." rows={4} />
      </div>
      <Button type="submit" disabled={loading} size="lg" className="bg-gold hover:bg-gold/90 text-white w-full sm:w-auto px-10">
        {loading ? <Loader2 className="mr-2 w-4 h-4 animate-spin" /> : <Send className="mr-2 w-4 h-4" />}
        Apply to Join
      </Button>
    </form>
  );
}