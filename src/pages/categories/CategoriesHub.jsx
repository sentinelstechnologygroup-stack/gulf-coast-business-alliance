import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/shared/PageHero';
import DisclosureBlock from '@/components/shared/DisclosureBlock';
import { Home, Hammer, Paintbrush, Globe, Briefcase, Wrench, Heart, Car, Music, ArrowRight } from 'lucide-react';

const categories = [
  { icon: Home, name: 'Real Estate Services', slug: 'real-estate', desc: 'Home buying, selling, rentals, investment property, and real estate consulting.' },
  { icon: Hammer, name: 'Construction & Roofing', slug: 'construction-roofing', desc: 'New construction, roofing installation, repair, renovation, and contracting.' },
  { icon: Paintbrush, name: 'Painting & Surface Solutions', slug: 'painting-surface-solutions', desc: 'Interior/exterior painting, coatings, concrete, and surface restoration.' },
  { icon: Globe, name: 'Websites, IT & Connectivity', slug: 'websites-it-connectivity', desc: 'Web design, IT support, internet services, networks, and digital solutions.' },
  { icon: Briefcase, name: 'Professional Services', slug: 'professional-services', desc: 'Business consulting, legal referral, accounting, HR, and professional advisory.' },
  { icon: Wrench, name: 'Home Services', slug: 'home-services', desc: 'HVAC, plumbing, electrical, landscaping, cleaning, and home maintenance.' },
  { icon: Heart, name: 'Health & Wellness', slug: 'health-wellness', desc: 'Healthcare providers, wellness, fitness, and health-adjacent local services.' },
  { icon: Car, name: 'Automotive', slug: 'automotive', desc: 'Auto repair, detailing, dealerships, and vehicle-related services.' },
  { icon: Music, name: 'Events & Hospitality', slug: 'events-hospitality', desc: 'Event planning, catering, venues, hospitality, and entertainment services.' },
];

export default function CategoriesHub() {
  return (
    <div>
      <PageHero
        eyebrow="Service Categories"
        title="Browse Categories"
        description="GCBA organizes participating businesses by service category, making it easier for customers to find the right local professional and for businesses to be found."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link key={cat.slug} to={`/categories/${cat.slug}`} className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-gold/30">
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-4 group-hover:bg-gulf transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex items-center gap-1 text-gold text-sm font-medium">
                    View Category <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm mb-4">Don't see your category? Contact GCBA to discuss new category development.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/request-service"><Button className="bg-gold hover:bg-gold/90 text-white">Request a Service</Button></Link>
              <Link to="/contact"><Button variant="outline">Contact GCBA</Button></Link>
            </div>
          </div>

          <div className="mt-10">
            <DisclosureBlock text="GCBA is a private, for-profit business network and marketing platform. Sponsored placement, paid advertising, membership tier, and sponsorship status may affect visibility, directory order, featured placement, advertising position, or lead-routing priority. Customers are responsible for independently verifying any provider before contracting." />
          </div>
        </div>
      </section>
    </div>
  );
}