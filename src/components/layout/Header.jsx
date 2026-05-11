import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Directory', path: '/directory' },
  { label: 'Sponsorships', path: '/sponsorships' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-navy'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">G</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-heading font-semibold text-lg leading-tight">Gulf Coast</p>
              <p className="text-sand/70 text-xs tracking-wider uppercase">Business Alliance</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-gold bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/request-service">
              <Button variant="outline" className="border-sand/30 text-sand hover:bg-sand/10 hover:text-white text-sm">
                Request a Service
              </Button>
            </Link>
            <Link to="/join">
              <Button className="bg-gold hover:bg-gold/90 text-white text-sm">
                Join the Alliance
              </Button>
            </Link>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-navy border-navy w-80">
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-gold bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-white/10 my-4 pt-4 flex flex-col gap-3">
                  <Link to="/request-service" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full border-sand/30 text-sand hover:bg-sand/10">
                      Request a Service
                    </Button>
                  </Link>
                  <Link to="/join" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-gold hover:bg-gold/90 text-white">
                      Join the Alliance
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}