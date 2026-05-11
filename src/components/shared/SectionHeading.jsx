import React from 'react';

export default function SectionHeading({ eyebrow, title, description, centered = true, light = false }) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${light ? 'text-gold' : 'text-gold'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-white/70' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </div>
  );
}