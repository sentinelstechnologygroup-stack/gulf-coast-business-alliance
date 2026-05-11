import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertCircle, Search, Users, Clock, CheckCircle2, FileText, Info } from 'lucide-react';

const sampleLeads = [
  { id: 1, customer_name: 'Sample Customer A — Placeholder', email: 'sample@example.com', phone: '(850) 555-0001', service_needed: 'Roof Inspection', category: 'Construction & Roofing', location: 'Pensacola, FL', timeline: 'Within 30 days', budget_range: '$1,000–$5,000', project_details: 'Placeholder project detail. Inspect roof after storm season.', assigned_member: '—', assigned_chair: '—', source_page: 'request-service', status: 'new', internal_notes: '' },
  { id: 2, customer_name: 'Sample Customer B — Placeholder', email: 'sample2@example.com', phone: '(850) 555-0002', service_needed: 'Website Redesign', category: 'Internet, IT & Website Solutions', location: 'Mobile, AL', timeline: 'Within 60 days', budget_range: '$2,000–$8,000', project_details: 'Placeholder project detail. New website for local contractor.', assigned_member: 'Founding Tech Partner (Placeholder)', assigned_chair: 'Tech Chair (Placeholder)', source_page: 'request-service', status: 'routed', internal_notes: '' },
  { id: 3, customer_name: 'Sample Customer C — Placeholder', email: 'sample3@example.com', phone: '(850) 555-0003', service_needed: 'Interior Painting', category: 'Painting & Surface Solutions', location: 'Gulf Shores, AL', timeline: 'Flexible', budget_range: 'Under $1,000', project_details: 'Placeholder project detail. 3-bedroom interior repaint.', assigned_member: '—', assigned_chair: '—', source_page: 'home', status: 'needs_review', internal_notes: '' },
  { id: 4, customer_name: 'Sample Customer D — Placeholder', email: 'sample4@example.com', phone: '(850) 555-0004', service_needed: 'Home Purchase Consultation', category: 'Real Estate Services', location: 'Destin, FL', timeline: 'ASAP', budget_range: '$200,000+', project_details: 'Placeholder project detail. First-time homebuyer consultation.', assigned_member: 'Founding RE Partner (Placeholder)', assigned_chair: 'RE Chair (Placeholder)', source_page: 'request-service', status: 'in_progress', internal_notes: 'Sample internal note — demo data only.' },
  { id: 5, customer_name: 'Sample Customer E — Placeholder', email: 'sample5@example.com', phone: '(850) 555-0005', service_needed: 'IT Support / Network Setup', category: 'Internet, IT & Website Solutions', location: 'Biloxi, MS', timeline: 'Within 2 weeks', budget_range: '$500–$2,000', project_details: 'Placeholder. Small office network and Wi-Fi setup.', assigned_member: '—', assigned_chair: '—', source_page: 'categories', status: 'closed', internal_notes: '' },
];

const statusConfig = {
  new: { label: 'New', className: 'bg-blue-100 text-blue-700' },
  needs_review: { label: 'Needs Review', className: 'bg-orange-100 text-orange-700' },
  assigned: { label: 'Assigned', className: 'bg-purple-100 text-purple-700' },
  routed: { label: 'Routed', className: 'bg-amber-100 text-amber-700' },
  contacted: { label: 'Contacted', className: 'bg-cyan-100 text-cyan-700' },
  in_progress: { label: 'In Progress', className: 'bg-indigo-100 text-indigo-700' },
  closed: { label: 'Closed', className: 'bg-green-100 text-green-700' },
  rejected: { label: 'Rejected / Not Qualified', className: 'bg-red-100 text-red-700' },
};

const StatCard = ({ label, value, icon: Icon, color }) => (
  <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4">
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-2xl font-bold font-heading text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  </div>
);

export default function LeadDashboard() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = sampleLeads.filter((l) => {
    const matchSearch = l.customer_name.toLowerCase().includes(search.toLowerCase()) ||
      l.service_needed.toLowerCase().includes(search.toLowerCase()) ||
      l.category.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || l.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Preview Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-3 mb-8 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Internal Preview — Demo Data Only.</span> This page is an admin planning preview. All leads shown are sample placeholders. Backend authentication, real lead data, and routing logic are pending local hardening and backend implementation. This is not a live admin panel.
          </p>
        </div>

        {/* Header */}
        <div className="mb-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-1">Internal Review</p>
          <h1 className="font-heading text-3xl font-bold text-foreground">Lead & Referral Dashboard</h1>
          <p className="text-muted-foreground mt-1">GCBA Internal · Admin Preview · Sample Data</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Leads" value={sampleLeads.length} icon={FileText} color="bg-navy" />
          <StatCard label="Needs Review" value={sampleLeads.filter(l => l.status === 'needs_review').length} icon={Clock} color="bg-orange-500" />
          <StatCard label="Routed / In Progress" value={sampleLeads.filter(l => ['routed','in_progress','assigned','contacted'].includes(l.status)).length} icon={Users} color="bg-gulf" />
          <StatCard label="Closed" value={sampleLeads.filter(l => l.status === 'closed').length} icon={CheckCircle2} color="bg-green-600" />
        </div>

        {/* Paid placement note */}
        <div className="bg-muted/40 border border-border rounded-lg px-4 py-3 mb-6 flex items-start gap-2">
          <Info className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">Lead-routing priority and member assignment may be affected by membership tier, sponsorship level, and category assignment. Routing decisions are internal GCBA administrative decisions.</p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search by name, service, or category..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="All Statuses" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {Object.entries(statusConfig).map(([key, val]) => (
                <SelectItem key={key} value={key}>{val.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="bg-card border border-border rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                {['Customer', 'Service Needed', 'Category', 'Location', 'Timeline', 'Status', 'Assigned Member', 'Source', 'Date', 'Actions'].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => {
                const sc = statusConfig[lead.status] || { label: lead.status, className: 'bg-muted text-muted-foreground' };
                return (
                  <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap max-w-[180px] truncate">{lead.customer_name}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{lead.service_needed}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{lead.category}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{lead.location}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{lead.timeline}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${sc.className}`}>{sc.label}</span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{lead.assigned_member}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{lead.source_page}</td>
                    <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">May 2026</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <Button size="sm" variant="outline" className="text-xs h-7" onClick={() => setSelected(lead)}>
                        View
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">Showing {filtered.length} of {sampleLeads.length} sample leads · Backend Pending</p>
      </div>

      {/* Lead Detail Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading pr-6">{selected?.customer_name}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4 mt-2">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-amber-800">Demo data only. This detail view represents the future lead management experience. Routing, assignment, and notes functionality require backend implementation.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ['Service', selected.service_needed],
                  ['Category', selected.category],
                  ['Location', selected.location],
                  ['Timeline', selected.timeline],
                  ['Budget', selected.budget_range],
                  ['Source', selected.source_page],
                  ['Assigned Member', selected.assigned_member],
                  ['Assigned Chair', selected.assigned_chair],
                ].map(([label, val]) => (
                  <div key={label}>
                    <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                    <p className="font-medium text-foreground">{val || '—'}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Project Details</p>
                <p className="text-sm text-foreground leading-relaxed">{selected.project_details}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Internal Notes</p>
                <p className="text-sm text-foreground leading-relaxed">{selected.internal_notes || 'No notes. (Backend Pending)'}</p>
              </div>
              <div className="flex gap-2 pt-2">
                <Button className="flex-1 bg-navy hover:bg-gulf text-white text-xs" disabled>Route / Assign (Backend Pending)</Button>
                <Button variant="outline" size="sm" onClick={() => setSelected(null)}>Close</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}