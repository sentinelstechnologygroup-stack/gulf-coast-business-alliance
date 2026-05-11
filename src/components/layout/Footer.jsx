import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Join', path: '/join' },
  { label: 'Directory', path: '/directory' },
  { label: 'Sponsorships', path: '/sponsorships' },
  { label: 'Request a Service', path: '/request-service' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

const resourceLinks = [
  { label: 'Categories', path: '/categories' },
  { label: 'Member Dashboard Preview', path: '/member-dashboard' },
  { label: 'Lead Dashboard Preview', path: '/lead-dashboard' },
  { label: 'Content Management Preview', path: '/content-management' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Use', path: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">G</span>
              </div>
              <div>
                <p className="text-white font-heading font-semibold text-lg leading-tight">Gulf Coast</p>
                <p className="text-sand/60 text-xs tracking-wider uppercase">Business Alliance</p>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Private Business Network & Lead-Generation Platform
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 text-gold" />
                info@gcbusinessalliance.com
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-gold" />
                Gulf Coast Region
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-xs text-white/40 leading-relaxed max-w-4xl">
            Gulf Coast Business Alliance is a private, for-profit business network and marketing platform. Participating businesses may pay membership fees, sponsorship fees, advertising fees, setup fees, referral fees, or other compensation for inclusion, enhanced visibility, sponsored placement, or lead-routing priority. Customers are responsible for selecting, verifying, and contracting directly with any provider. GCBA does not guarantee provider licensing, insurance, quality, pricing, availability, workmanship, results, leads, revenue, or business outcomes.
          </p>
          <p className="text-xs text-white/30 mt-4">
            © {new Date().getFullYear()} Gulf Coast Business Alliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}