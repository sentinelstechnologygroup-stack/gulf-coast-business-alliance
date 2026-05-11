import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Hammer, Paintbrush, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';

const categories = [
  {
    icon: Home,
    title: 'Real Estate Services',
    description: 'Residential and commercial real estate professionals serving the Gulf Coast market.',
  },
  {
    icon: Hammer,
    title: 'Construction & Roofing',
    description: 'Licensed contractors, roofers, and construction specialists for projects of all sizes.',
  },
  {
    icon: Paintbrush,
    title: 'Painting & Surface Solutions',
    description: 'Professional painting, coatings, and surface preparation services for residential and commercial properties.',
  },
  {
    icon: Globe,
    title: 'Internet, IT & Website Solutions',
    description: 'Technology providers offering internet, IT support, web design, and digital solutions.',
  },
];

export default function CategorySection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Service Categories"
          title="Founding Service Categories"
          description="GCBA organizes members into structured service categories led by industry chairs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center shrink-0 group-hover:bg-gulf transition-colors">
                  <cat.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{cat.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/directory">
                      <Button variant="outline" size="sm" className="text-xs">View Category</Button>
                    </Link>
                    <Link to="/request-service">
                      <Button variant="outline" size="sm" className="text-xs">Request Service</Button>
                    </Link>
                    <Link to="/join">
                      <Button size="sm" className="bg-navy hover:bg-gulf text-white text-xs">
                        Join This Category
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}