import React from 'react';
import { CSRProposalForm } from '../components/Forms';
import { ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';

import { PARTNERS } from '../data/partners';

export default function PartnersPage({ onNotify }) {
  return (
    <>
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>Strategic Collaboration</span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Partnerships &amp; Corporate CSR Portal
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '760px' }}>
            Collaborating with leading philanthropic foundations, corporate CSR initiatives, and state government missions to scale grassroots transformation.
          </p>
        </div>
      </section>

      {/* Institutional Partner Portfolio */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Valued Partners</span>
            <h2>Our Institutional Funding Alliances</h2>
            <p className="section-subtitle">
              A heritage of trust, transparent financial reporting, and impactful delivery. Click any partner to visit their official website.
            </p>
          </div>

          <div className="partners-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
            {PARTNERS.map((p, i) => (
              <a 
                key={i} 
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card" 
                title={`Visit ${p.name} official website (${p.url})`}
                aria-label={`Visit ${p.name} official website`}
                style={{ filter: 'none', opacity: 1, textDecoration: 'none' }}
              >
                <img src={p.logo} alt={p.name} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Alignment Framework */}
      <section className="section bg-surface-subtle">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Section 135 &bull; Companies Act 2013</span>
            <h2>CSR Alignment Pillars (Schedule VII)</h2>
            <p className="section-subtitle">GMVS is fully compliant as an eligible CSR Implementing Agency with verified NGO Darpan credentials.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Schedule VII Item (iii)</h4>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Promoting Gender Equality &amp; Women Empowerment</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Setting up SHG federations, tailoring apparel clusters, and women leadership training across Rajasthan.</p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Schedule VII Item (ii)</h4>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Promoting Education &amp; Remedial Schools</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Remedial learning support, girl child schooling, bridge courses, and vocational livelihood skills.</p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Schedule VII Item (iv)</h4>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Environmental Sustainability &amp; Water Harvesting</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Constructing Taankas, Khadins, and soil bunding to ensure drinking water security and soil fertility.</p>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Schedule VII Item (i)</h4>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Healthcare &amp; Eradicating Hunger</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Free cataract surgeries, mobile healthcare clinics, maternal nutrition, and safe motherhood promotion.</p>
            </div>
          </div>

          {/* CSR Proposal Submission Form */}
          <div style={{ maxWidth: '860px', margin: '0 auto', background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: 'clamp(2rem, 5vw, 3rem)', border: '2px solid var(--primary-subtle)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="badge-tag">Corporate Engagement</span>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Submit a CSR Partnership Proposal</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                We invite corporate CSR foundations to collaborate with GMVS for high-impact social projects in Rajasthan.
              </p>
            </div>

            <CSRProposalForm onNotify={onNotify} />
          </div>
        </div>
      </section>
    </>
  );
}
