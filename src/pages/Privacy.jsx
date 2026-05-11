import React from 'react';
import PageHero from '@/components/shared/PageHero';

export default function Privacy() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground leading-relaxed mb-8 text-sm">Last updated: May 2026 — Framework version. Subject to legal review before final publication.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Gulf Coast Business Alliance ("GCBA," "we," "us," "our") is a private, for-profit business network and marketing platform. This Privacy Policy explains how we collect, use, and handle information submitted through our website and inquiry forms.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We collect information you voluntarily provide through our website forms, including but not limited to:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4 ml-2 text-sm">
            <li>Membership application submissions (name, email, phone, business details)</li>
            <li>Service request submissions (name, contact, project information)</li>
            <li>Sponsorship and advertising inquiries</li>
            <li>Contact and general inquiry form submissions</li>
            <li>Event registration interest submissions</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">We may also collect non-personally-identifiable usage data through standard web analytics tools (such as page views and traffic sources) to understand how visitors use the site.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We use collected information to:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4 ml-2 text-sm">
            <li>Process and review membership applications</li>
            <li>Route service requests to appropriate participating member businesses</li>
            <li>Respond to sponsorship and advertising inquiries</li>
            <li>Send communications about GCBA programs, events, and updates</li>
            <li>Manage event registration interest</li>
            <li>Improve our website and service offerings</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Information Sharing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Service request and lead information submitted through GCBA platforms may be shared with participating GCBA member businesses for the purpose of connecting customers with appropriate service providers. By submitting a service request, you acknowledge that your contact information may be passed to one or more participating businesses in the relevant service category.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Membership applications and sponsorship inquiries are handled internally by GCBA staff. We do not sell personal information to unrelated third parties for their independent marketing purposes.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Analytics</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">GCBA may use standard web analytics services to understand site traffic, page performance, and visitor behavior. Analytics data is typically collected in aggregated, non-personally-identifiable form.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">We implement reasonable administrative and technical security measures to protect information submitted through our platform. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Your Choices</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">You may contact us at any time to request access to, correction of, or deletion of personal information you have submitted. We will respond to reasonable requests in accordance with applicable law.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">For privacy-related questions or requests, contact us at: <span className="font-medium text-foreground">info@gcbusinessalliance.com</span></p>

          <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold">Legal Notice:</span> This privacy policy is provided as a framework document and has not been finalized for legal compliance. It should be reviewed and approved by qualified legal counsel before final publication or use in any regulatory context.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}