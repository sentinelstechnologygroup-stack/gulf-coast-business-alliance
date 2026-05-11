import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Megaphone, Calendar, FolderTree, MessageSquare,
  BookOpen, Award, Newspaper, HelpCircle, AlertCircle, Edit3
} from 'lucide-react';

const contentAreas = [
  {
    icon: Megaphone,
    title: 'Homepage Announcements',
    description: 'Manage banners, launch announcements, and featured notices displayed on the Home page.',
    status: 'draft',
    lastUpdated: 'May 2026',
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Manage event listings, dates, locations, registration links, and event status updates.',
    status: 'draft',
    lastUpdated: 'May 2026',
  },
  {
    icon: FolderTree,
    title: 'Category Landing Pages',
    description: 'Manage content for each service category page — overview, FAQs, placeholders, chairs, and sponsors.',
    status: 'draft',
    lastUpdated: 'May 2026',
  },
  {
    icon: MessageSquare,
    title: 'Testimonials',
    description: 'Review, approve, and publish member and customer testimonials. Manage placeholder vs. verified testimonial status.',
    status: 'draft',
    lastUpdated: 'May 2026',
  },
  {
    icon: BookOpen,
    title: 'Directory Listings',
    description: 'Manage member directory cards — approve new listings, update status, manage placeholder vs. live entries.',
    status: 'draft',
    lastUpdated: 'May 2026',
  },
  {
    icon: Award,
    title: 'Sponsor Placements',
    description: 'Manage active sponsor placements, featured member spots, paid advertising positions, and sponsorship disclosure labels.',
    status: 'draft',
    lastUpdated: 'May 2026',
  },
  {
    icon: Newspaper,
    title: 'Blog / News Updates',
    description: 'Publish and manage blog posts, news articles, press releases, and network updates.',
    status: 'draft',
    lastUpdated: 'May 2026',
  },
  {
    icon: HelpCircle,
    title: 'FAQ & Disclosure Content',
    description: 'Manage frequently asked questions, legal disclosures, terms summaries, and platform clarifications shown across the site.',
    status: 'draft',
    lastUpdated: 'May 2026',
  },
];

const statusBadge = (status) => {
  const map = {
    draft: 'bg-muted text-muted-foreground',
    published: 'bg-green-100 text-green-700',
    archived: 'bg-red-100 text-red-700',
  };
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${map[status] || 'bg-muted text-muted-foreground'} capitalize`}>
      {status}
    </span>
  );
};

export default function ContentManagement() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Preview Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-3 mb-8 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Admin Planning Preview — Backend Pending.</span> This page represents the future GCBA content management system. No content management functionality is active yet. All sections are planning placeholders. Local hardening and backend implementation required before activation.
          </p>
        </div>

        {/* Header */}
        <div className="mb-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-1">Internal Admin</p>
          <h1 className="font-heading text-3xl font-bold text-foreground">Content Management Preview</h1>
          <p className="text-muted-foreground mt-1">GCBA Internal · Admin Planning · Backend Pending</p>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Content Areas', value: contentAreas.length },
            { label: 'Published', value: 0 },
            { label: 'Draft', value: contentAreas.length },
            { label: 'Archived', value: 0 },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-2xl font-bold font-heading text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Content Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {contentAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{area.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Last updated: {area.lastUpdated}</p>
                    </div>
                  </div>
                  {statusBadge(area.status)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs gap-1.5" disabled>
                    <Edit3 className="w-3 h-3" />
                    Manage (Backend Pending)
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-muted/40 border border-border rounded-lg p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold">Local Hardening Required:</span> Content management features require backend implementation, database connections, authentication, and admin access control before activation. This preview page is for planning and information architecture purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}