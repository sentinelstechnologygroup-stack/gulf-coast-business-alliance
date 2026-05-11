import React from 'react';
import { Info } from 'lucide-react';

export default function DisclosureBlock({ text }) {
  return (
    <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
      </div>
    </div>
  );
}