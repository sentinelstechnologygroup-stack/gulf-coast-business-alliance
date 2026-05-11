import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import { motion } from 'framer-motion';
import {
  BookOpen, Star, FileText, ClipboardList, Users, Award,
  Calendar, Search, Mail, Handshake, BarChart3, Database, ArrowRight
} from 'lucide-react';

const services = [
  { icon: BookOpen, title: 'Member Directory Listings', desc: 'Get your business listed in the GCBA directory with your service area, category, and contact details visible to potential customers.' },
  { icon: Star, title: 'Featured Member Profiles', desc: 'Upgrade to a featured profile with expanded content, media, enhanced visibility, and priority placement in search results.' },
  { icon: FileText, title: 'Category Landing Pages', desc: 'GCBA builds and manages category-specific landing pages that drive local traffic and generate service inquiries.' },
  { icon: ClipboardList, title: 'Lead Capture Forms', desc: 'Benefit from GCBA-managed lead capture forms embedded across platforms that collect qualified customer inquiries.' },
  { icon: Users, title: 'Referral Coordination', desc: 'GCBA coordinates referrals between members, categories, and customer requests to match the right provider with each opportunity.' },
  { icon: Award, title: 'Sponsorship Placement', desc: 'Sponsor a category or the network for premium visibility across the website, events, newsletters, and campaigns.' },
  { icon: Calendar, title: 'Event Promotion', desc: 'Access networking events, workshops, and business mixers designed to foster relationships and generate referrals.' },
  { icon: Search, title: 'Local SEO Support', desc: 'Improve your local search presence through directory backlinks, structured listings, and optimized member profiles.' },
  { icon: Mail, title: 'Email and SMS Follow-Up Systems', desc: 'Stay connected with prospects through GCBA-managed email and SMS campaigns that keep your business top of mind.' },
  { icon: Handshake, title: 'Business Networking Events', desc: 'Attend structured networking events that facilitate real introductions, referral exchanges, and collaborative opportunities.' },
  { icon: BarChart3, title: 'Paid Advertising Campaign Support', desc: 'Access GCBA-managed advertising campaigns that promote categories and member businesses to local consumers.' },
  { icon: Database, title: 'CRM and Lead Tracking', desc: 'Track your leads, referrals, and follow-ups through GCBA-integrated tools and reporting dashboards.' },
];

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Member Services"
        title="Business Growth Services for Local Members"
        description="GCBA provides a comprehensive suite of marketing, networking, and lead-generation services designed to help local businesses grow."
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-gold/20 transition-all duration-300 group flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <service.icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                <Link to="/join" className="mt-4">
                  <Button variant="ghost" size="sm" className="text-gold hover:text-gold/80 p-0 h-auto text-xs">
                    Learn More <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Access These Services?"
        description="Membership starts at just $10/month. Join GCBA and start growing your business today."
      />
    </div>
  );
}