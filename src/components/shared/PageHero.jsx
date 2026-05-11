import React from 'react';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4">{eyebrow}</p>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">{title}</h1>
        {description && (
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}