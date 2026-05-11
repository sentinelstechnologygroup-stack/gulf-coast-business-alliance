import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import PageHero from '@/components/shared/PageHero';
import DisclosureBlock from '@/components/shared/DisclosureBlock';
import { Search, MapPin, Star, Shield, Award, Info } from 'lucide-react';

const members = [
  {
    name: 'Founding Real Estate Partner — Placeholder',
    category: 'Real Estate Services',
    area: 'Gulf Coast',
    level: 'sponsor',
    desc: 'Category placeholder. A founding sponsor for the Real Estate Services category. Approved member details will be published upon launch.',
    placeholder: true,
  },
  {
    name: 'Founding Construction & Roofing Partner — Placeholder',
    category: 'Construction & Roofing',
    area: 'Gulf Coast',
    level: 'featured',
    desc: 'Category placeholder. A founding member for the Construction & Roofing category. Approved member details will be published upon launch.',
    placeholder: true,
  },
  {
    name: 'Founding Surface Solutions Partner — Placeholder',
    category: 'Painting & Surface Solutions',
    area: 'Gulf Coast',
    level: 'verified',
    desc: 'Category placeholder. A founding member for the Painting & Surface Solutions category. Approved member details will be published upon launch.',
    placeholder: true,
  },
  {
    name: 'Founding Technology Partner — Placeholder',
    category: 'Internet, IT & Website Solutions',
    area: 'Gulf Coast',
    level: 'featured',
    desc: 'Category placeholder. A founding member for the Internet, IT & Website Solutions category. Approved member details will be published upon launch.',
    placeholder: true,
  },
  {
    name: 'Sample Member Listing — Real Estate',
    category: 'Real Estate Services',
    area: 'Gulf Coast',
    level: 'basic',
    desc: 'Sample listing placeholder. This entry will be replaced with an approved, verified member business upon launch.',
    placeholder: true,
  },
  {
    name: 'Sample Member Listing — Construction',
    category: 'Construction & Roofing',
    area: 'Gulf Coast',
    level: 'basic',
    desc: 'Sample listing placeholder. This entry will be replaced with an approved, verified member business upon launch.',
    placeholder: true,
  },
];

const categories = ['All Categories', 'Real Estate Services', 'Construction & Roofing', 'Painting & Surface Solutions', 'Internet, IT & Website Solutions'];
const levels = ['All Levels', 'basic', 'verified', 'featured', 'sponsor'];

const levelConfig = {
  basic: { label: 'Basic', color: 'bg-muted text-muted-foreground', icon: null },
  verified: { label: 'Verified*', color: 'bg-gulf/10 text-gulf', icon: Shield },
  featured: { label: 'Featured', color: 'bg-gold/10 text-gold', icon: Star },
  sponsor: { label: 'Sponsor', color: 'bg-navy text-white', icon: Award },
};

export default function Directory() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [level, setLevel] = useState('All Levels');
  const [selectedMember, setSelectedMember] = useState(null);

  const filtered = members.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.desc.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === 'All Categories' || m.category === category;
    const matchLevel = level === 'All Levels' || m.level === level;
    return matchSearch && matchCat && matchLevel;
  });

  return (
    <div>
      <PageHero
        eyebrow="Member Directory"
        title="Find Participating Gulf Coast Businesses"
        description="Browse our directory of participating local businesses organized by service category."
      />

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Launch notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 mb-6 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              Directory listings shown during launch may include sample or founding category placeholders until approved members are published. Placeholder entries do not represent confirmed active businesses.
            </p>
          </div>

          {/* Verified clarification */}
          <div className="bg-muted/40 border border-border rounded-lg px-5 py-3 mb-6 flex items-start gap-3">
            <Shield className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold">Verified*</span> means the member has submitted business information for GCBA review. It does not mean GCBA guarantees licensing, insurance, workmanship, results, or regulatory compliance. Customers must perform their own due diligence.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative lg:col-span-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  className="pl-10"
                  placeholder="Search by name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={level} onValueChange={setLevel}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {levels.map((l) => <SelectItem key={l} value={l}>{l === 'All Levels' ? l : levelConfig[l].label}</SelectItem>)}
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => { setSearch(''); setCategory('All Categories'); setLevel('All Levels'); }}>
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Results */}
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} listing{filtered.length !== 1 ? 's' : ''} found</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((member, i) => {
              const lc = levelConfig[member.level];
              const LevelIcon = lc.icon;
              return (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-heading text-lg font-semibold text-foreground pr-2 leading-snug">{member.name}</h3>
                    <Badge className={`${lc.color} shrink-0 flex items-center gap-1 text-xs`}>
                      {LevelIcon && <LevelIcon className="w-3 h-3" />}
                      {lc.label}
                    </Badge>
                  </div>
                  {member.placeholder && (
                    <span className="inline-block text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded px-2 py-0.5 mb-2 w-fit">Placeholder</span>
                  )}
                  <p className="text-sm text-gold font-medium mb-1">{member.category}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    {member.area}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{member.desc}</p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                      onClick={() => setSelectedMember(member)}
                    >
                      View Profile
                    </Button>
                    <Link to="/request-service" className="flex-1">
                      <Button size="sm" className="w-full bg-navy hover:bg-gulf text-white text-xs">
                        Request Service
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <DisclosureBlock text="GCBA is a private, for-profit business network and marketing platform. Participating businesses may pay membership fees, sponsorship fees, advertising fees, setup fees, referral fees, or other compensation for inclusion, enhanced visibility, sponsored placement, or lead-routing priority. Directory order, featured placement, and visibility may reflect paid tier or sponsorship level. Customers are responsible for selecting, verifying, and contracting directly with any provider. GCBA does not guarantee provider licensing, insurance, quality, pricing, availability, workmanship, results, leads, revenue, or business outcomes." />
        </div>
      </section>

      {/* Profile Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl pr-6">{selectedMember?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            {selectedMember?.placeholder && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-amber-800 leading-relaxed">
                  This is a placeholder listing. Full member profile details will be available after the member is approved and published.
                </p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Category</p>
                <p className="font-medium text-foreground">{selectedMember?.category}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Service Area</p>
                <p className="font-medium text-foreground">{selectedMember?.area}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Membership Level</p>
                <p className="font-medium text-foreground capitalize">{selectedMember?.level}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{selectedMember?.desc}</p>
            <div className="bg-muted/40 border border-border rounded-lg p-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Membership level may reflect paid tier or sponsorship. Customers must independently verify licensing, insurance, and qualifications before contracting with any provider.
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <Link to="/request-service" className="flex-1">
                <Button className="w-full bg-gold hover:bg-gold/90 text-white text-sm" onClick={() => setSelectedMember(null)}>
                  Request This Service
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={() => setSelectedMember(null)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}