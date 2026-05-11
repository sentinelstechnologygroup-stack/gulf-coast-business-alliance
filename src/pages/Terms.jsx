import React from 'react';
import PageHero from '@/components/shared/PageHero';

export default function Terms() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted-foreground leading-relaxed mb-8 text-sm">Last updated: May 2026 — Framework version. Subject to legal review before final publication.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">By accessing or using the Gulf Coast Business Alliance ("GCBA") website, you agree to these Terms of Use. If you do not agree, please do not use this website. GCBA is a private, for-profit business network and marketing platform — not a government-affiliated chamber of commerce, nonprofit organization, or public service.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Nature of Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">GCBA provides a private business network, member directory, lead-generation platform, referral coordination, sponsorship opportunities, and member marketing services. GCBA does not provide professional services, legal services, contracting services, or regulated services of any kind.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">GCBA does not guarantee leads, revenue, business results, service provider quality, licensing, insurance, workmanship, pricing, availability, or any specific business outcome for members or customers.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Paid Membership and Fee Model</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">GCBA operates on a paid membership and sponsorship model. Participating businesses may pay membership dues, sponsorship fees, advertising fees, setup fees, referral fees, directory placement fees, or other compensation in exchange for inclusion in the network, enhanced visibility, featured placement, sponsored placement, or lead-routing priority.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">Fee schedules are subject to change with reasonable notice to affected members.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Paid Placement and Ranking Disclosure</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Sponsored placement, paid advertising, membership tier level, and sponsorship status may affect visibility, directory order, featured placement, advertising position, or lead-routing priority within GCBA platforms and communications. Such arrangements will be disclosed where shown.</p>
          <p className="text-muted-foreground leading-relaxed mb-4">GCBA will not claim that a paid or sponsored member is "best," "#1," "top-rated," "most trusted," or use similar superlative claims unless that claim is supported by a recognized, verifiable third-party award or independently verifiable source.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Member Responsibilities</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Members are responsible for:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4 ml-2 text-sm">
            <li>Maintaining accurate, current business information in their GCBA listing</li>
            <li>Holding all required licenses, permits, bonds, and insurance required by applicable law for their industry</li>
            <li>Complying with all applicable local, state, and federal laws and regulations governing their business and services</li>
            <li>Accurately representing their services, qualifications, and credentials</li>
            <li>Honoring any commitments made to customers they connect with through GCBA platforms</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">GCBA does not verify, audit, or monitor member regulatory compliance. Members are solely responsible for their own legal and professional obligations.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Customer Responsibilities</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Customers who use GCBA to find service providers are responsible for:</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4 ml-2 text-sm">
            <li>Independently verifying the licensing, insurance, bonding, credentials, and qualifications of any provider before contracting</li>
            <li>Negotiating and entering into contracts directly with the provider of their choice</li>
            <li>Performing their own due diligence on any provider</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">GCBA is not a party to any contract between a member and a customer. Any dispute arising between a member and a customer is between those parties directly.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">No Endorsement</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Inclusion in the GCBA network, directory, or any GCBA marketing material does not constitute an endorsement, certification, guarantee, or recommendation by GCBA of any member's qualifications, services, workmanship, licensing, insurance, or regulatory compliance.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">To the fullest extent permitted by applicable law, GCBA shall not be liable for any disputes between members and customers, loss of business, loss of revenue, consequential damages, indirect damages, or any other claims arising from use of the GCBA platform, membership, directory, sponsorship programs, events, or any referral.</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">GCBA reserves the right to modify these Terms of Use at any time. Changes will be effective upon posting to this page. Continued use of the website after changes are posted constitutes acceptance of the updated terms.</p>

          <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold">Legal Notice:</span> These Terms of Use are provided as a framework document and have not been finalized for legal compliance. They should be reviewed and approved by qualified legal counsel before final publication, use in member agreements, or any regulatory context.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}