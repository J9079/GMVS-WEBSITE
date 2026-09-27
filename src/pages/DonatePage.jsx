import React from 'react';
import BankCards from '../components/BankCards';
import { ReceiptClaimForm } from '../components/Forms';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, Globe, Award } from 'lucide-react';

export default function DonatePage({ onNotify }) {
  return (
    <>
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>Transform Lives &bull; Empower Grassroots</span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Invest in Grassroots Transformation
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '760px' }}>
            Every contribution fuels self-reliance for rural women, school education for young girls, and clean drinking water structures in drought-hit Rajasthan.
          </p>
        </div>
      </section>

      {/* Trust & Transparency Ribbon */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-light)', padding: '1.25rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#E8F5E9', color: '#1B5E20', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart size={20} fill="currentColor" />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.925rem' }}>100% Direct Impact</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Transparent grassroots utilization</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--secondary-subtle)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Globe size={20} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.925rem' }}>FCRA Approved</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MHA FCRA Reg # 125410040</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#FEF3C7', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={20} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.925rem' }}>Audited Governance</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Annual Chartered Accountant audit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bank Account Transfer Details */}
      <section id="bank-transfer" className="section bg-surface-subtle">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Direct Bank Transfer</span>
            <h2>Official Bank Details for Donations</h2>
            <p className="section-subtitle">
              You can transfer directly via NEFT, RTGS, IMPS, or Net Banking. Use the one-click copy buttons below.
            </p>
          </div>

          <BankCards onCopyToast={(label, text) => onNotify('Copied to Clipboard!', `${label}: ${text}`, 'success')} />
        </div>
      </section>

      {/* Donation Confirmation Form Section */}
      <section id="claim-form" className="section bg-surface">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="form-card">
              <span className="badge-tag" style={{ marginBottom: '0.5rem' }}>Donation Confirmation</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', marginBottom: '0.5rem' }}>Confirm Your Contribution</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Please share your transfer reference number so the GMVS Secretariat can confirm your contribution and dispatch an official donation acknowledgment.
              </p>
              <ReceiptClaimForm onNotify={onNotify} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
