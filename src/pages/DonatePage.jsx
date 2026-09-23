import React from 'react';
import TaxCalculator from '../components/TaxCalculator';
import BankCards from '../components/BankCards';
import { ReceiptClaimForm } from '../components/Forms';
import { ShieldCheck, Heart, Sparkles, HelpCircle } from 'lucide-react';

export default function DonatePage({ onNotify }) {
  return (
    <>
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>Transform Lives &bull; Save Tax</span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Invest in Grassroots Transformation
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '760px' }}>
            Every rupee you contribute fuels self-reliance for rural women, school education for young girls, and clean drinking water structures in drought-hit Rajasthan.
          </p>
        </div>
      </section>

      {/* Tax Benefits Ribbon */}
      <div style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-light)', padding: '1.25rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#FEF3C7', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>80G</div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.925rem' }}>50% Tax Deduction</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Section 80-G of Income Tax Act</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--secondary-subtle)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>🌍</div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.925rem' }}>FCRA Approved</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MHA FCRA Reg # 125410040</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--primary-subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>🛡️</div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.925rem' }}>Form 10BE Issued</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official CBDT tax filing receipt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tax Calculator */}
      <section className="section bg-surface">
        <div className="container">
          <TaxCalculator />
        </div>
      </section>

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

      {/* Claim Form Section */}
      <section id="claim-form" className="section bg-surface">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="form-card">
              <span className="badge-tag" style={{ marginBottom: '0.5rem' }}>Tax Documentation</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', marginBottom: '0.5rem' }}>Claim Your 80-G Tax Exemption Certificate</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Furnish your 10-digit PAN and transfer reference number so our accounts team can upload your Form 10BD and issue your Form 10BE tax certificate.
              </p>
              <ReceiptClaimForm onNotify={onNotify} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
