import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2, Circle, Star, Shield, Award, TrendingUp,
  Calendar, ArrowRight, AlertCircle, User, MapPin
} from 'lucide-react';

const profileChecklist = [
  { label: 'Business name added', done: true },
  { label: 'Contact information complete', done: true },
  { label: 'Service category selected', done: true },
  { label: 'Business description added', done: false },
  { label: 'Website URL added', done: false },
  { label: 'Service area defined', done: false },
  { label: 'Profile photo/logo uploaded', done: false },
];

const sampleLeads = [
  { service: 'Roofing inspection', date: 'May 8, 2026', status: 'new' },
  { service: 'Website redesign inquiry', date: 'May 5, 2026', status: 'routed' },
  { service: 'Interior painting quote', date: 'Apr 29, 2026', status: 'completed' },
];

const sampleEvents = [
  { name: 'GCBA Founding Member Kickoff', date: 'TBD', location: 'Gulf Coast Region' },
  { name: 'Category Chair Introduction Session', date: 'TBD', location: 'Virtual / TBD' },
];

const statusBadge = (status) => {
  const map = {
    new: 'bg-blue-100 text-blue-700',
    routed: 'bg-amber-100 text-amber-700',
    completed: 'bg-green-100 text-green-700',
  };
  return <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${map[status] || 'bg-muted text-muted-foreground'}`}>{status}</span>;
};

export default function MemberDashboard() {
  const completedCount = profileChecklist.filter((i) => i.done).length;
  const pct = Math.round((completedCount / profileChecklist.length) * 100);

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Preview Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-3 mb-8 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Preview / Demo Data Only.</span> This dashboard represents the future member experience. All data shown is sample placeholder data. Backend activation, authentication, and live data connections are pending local hardening and backend implementation.
          </p>
        </div>

        {/* Header */}
        <div className="mb-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-1">Member Dashboard</p>
          <h1 className="font-heading text-3xl font-bold text-foreground">Welcome Back, Sample Member</h1>
          <p className="text-muted-foreground mt-1">Gulf Coast Business Alliance · Basic Member</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Profile Checklist */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-semibold text-foreground">Profile Completion</h2>
                <span className="text-sm font-semibold text-gold">{pct}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-5">
                <div className="bg-gold h-2 rounded-full transition-all" style={{ width: `${pct}%` }} />
              </div>
              <ul className="space-y-2">
                {profileChecklist.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm">
                    {item.done
                      ? <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      : <Circle className="w-4 h-4 text-muted-foreground shrink-0" />}
                    <span className={item.done ? 'text-foreground' : 'text-muted-foreground'}>{item.label}</span>
                    {!item.done && <span className="text-xs text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded ml-auto">Pending</span>}
                  </li>
                ))}
              </ul>
              <Button className="mt-5 bg-navy hover:bg-gulf text-white text-sm w-full sm:w-auto" disabled>
                Complete Profile (Backend Pending)
              </Button>
            </div>

            {/* Lead / Referral Activity */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-heading font-semibold text-foreground mb-1">Lead & Referral Activity</h2>
              <p className="text-xs text-muted-foreground mb-5">Sample placeholder data. Actual referral routing requires backend activation.</p>
              <div className="space-y-3">
                {sampleLeads.map((lead, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{lead.service}</p>
                      <p className="text-xs text-muted-foreground">{lead.date}</p>
                    </div>
                    {statusBadge(lead.status)}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Lead-routing priority may be affected by membership tier, sponsored placement, and category assignment.
              </p>
            </div>

            {/* Testimonials Submitted */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-heading font-semibold text-foreground mb-1">Testimonials / Reviews</h2>
              <p className="text-xs text-muted-foreground mb-4">No testimonials submitted yet. Backend Pending.</p>
              <Button variant="outline" size="sm" disabled>Submit Testimonial (Coming Soon)</Button>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">

            {/* Membership Status */}
            <div className="bg-navy rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-gold" />
                <h2 className="font-heading font-semibold">Membership Status</h2>
              </div>
              <p className="text-2xl font-bold font-heading text-gold mb-1">Basic</p>
              <p className="text-white/60 text-xs mb-4">Active · Sample Demo Data</p>
              <ul className="space-y-1 text-xs text-white/70 mb-5">
                <li>✓ Directory listing</li>
                <li>✓ Basic profile</li>
                <li>✓ Referral eligibility</li>
                <li className="text-white/40">— Featured placement (upgrade)</li>
                <li className="text-white/40">— Sponsored category (upgrade)</li>
              </ul>
              <Link to="/join">
                <Button size="sm" className="bg-gold hover:bg-gold/90 text-white w-full text-xs">
                  Upgrade Membership
                </Button>
              </Link>
            </div>

            {/* Category Placement */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-gulf" />
                <h2 className="font-heading font-semibold text-foreground text-sm">Category Placement</h2>
              </div>
              <p className="text-sm font-medium text-foreground">Construction & Roofing</p>
              <p className="text-xs text-muted-foreground mt-1">Gulf Coast Region · Basic visibility</p>
              <p className="text-xs text-muted-foreground mt-3">Visibility and lead-routing priority in your category may be affected by membership tier and sponsorship level.</p>
            </div>

            {/* Directory Listing Preview */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-gold" />
                <h2 className="font-heading font-semibold text-foreground text-sm">Directory Listing</h2>
              </div>
              <p className="text-sm font-medium text-foreground">Sample Member Business Name</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <MapPin className="w-3 h-3" />Gulf Coast Region
              </div>
              <Badge className="mt-2 bg-muted text-muted-foreground text-xs">Basic</Badge>
              <p className="text-xs text-muted-foreground mt-3 italic">Preview only. Actual listing visible in directory after backend activation.</p>
              <Link to="/directory">
                <Button variant="outline" size="sm" className="mt-3 w-full text-xs">View Directory</Button>
              </Link>
            </div>

            {/* Sponsorship Status */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-gold" />
                <h2 className="font-heading font-semibold text-foreground text-sm">Featured / Sponsor Status</h2>
              </div>
              <p className="text-sm text-muted-foreground">No active sponsorship or featured placement. Upgrade to featured or sponsor tier for enhanced visibility.</p>
              <Link to="/sponsorships">
                <Button variant="outline" size="sm" className="mt-3 w-full text-xs">View Sponsorship Options</Button>
              </Link>
            </div>

            {/* Upcoming Events */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-gold" />
                <h2 className="font-heading font-semibold text-foreground text-sm">Upcoming Events</h2>
              </div>
              <ul className="space-y-3">
                {sampleEvents.map((ev, i) => (
                  <li key={i} className="border-b border-border pb-2 last:border-0">
                    <p className="text-xs font-medium text-foreground">{ev.name}</p>
                    <p className="text-xs text-muted-foreground">{ev.date} · {ev.location}</p>
                  </li>
                ))}
              </ul>
              <Link to="/events">
                <Button variant="outline" size="sm" className="mt-3 w-full text-xs">View All Events</Button>
              </Link>
            </div>

            {/* Recommended Actions */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-gold" />
                <h2 className="font-heading font-semibold text-foreground text-sm">Recommended Next Steps</h2>
              </div>
              <ul className="space-y-2">
                {['Complete your business profile', 'Define your service area', 'Add a business description', 'Explore category sponsorship'].map((a) => (
                  <li key={a} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-gold shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}