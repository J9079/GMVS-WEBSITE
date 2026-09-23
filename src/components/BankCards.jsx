import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, Globe, Building2 } from 'lucide-react';

export default function BankCards({ onCopyToast }) {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      if (onCopyToast) {
        onCopyToast(label, text);
      }
      setTimeout(() => setCopiedKey(null), 2200);
    });
  };

  return (
    <div className="bank-cards-grid">
      {/* Domestic SBI Account Card */}
      <div className="bank-card featured">
        <div className="bank-header">
          <div className="bank-title-wrap">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Building2 size={20} style={{ color: 'var(--primary)' }} />
              Indian Donors &bull; SBI Account
            </h4>
            <span className="bank-badge-domestic">80-G Tax Exempt &bull; Domestic</span>
          </div>
          <div style={{ fontSize: '1.75rem' }}>🇮🇳</div>
        </div>

        <div className="bank-details-list">
          <div className="bank-detail-item">
            <span className="bank-detail-label">Account Name</span>
            <span className="bank-detail-value">
              Gramin Mahila Vikas Sansthan
              <button 
                type="button"
                className="copy-btn" 
                onClick={() => handleCopy('Gramin Mahila Vikas Sansthan', 'name', 'Account Name')}
              >
                {copiedKey === 'name' ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedKey === 'name' ? 'Copied' : 'Copy'}</span>
              </button>
            </span>
          </div>

          <div className="bank-detail-item">
            <span className="bank-detail-label">Bank Name</span>
            <span className="bank-detail-value">State Bank of India (SBI)</span>
          </div>

          <div className="bank-detail-item">
            <span className="bank-detail-label">Account Number</span>
            <span className="bank-detail-value" style={{ fontFamily: 'monospace', fontSize: '1.05rem', color: 'var(--primary)' }}>
              31478902341
              <button 
                type="button"
                className="copy-btn" 
                onClick={() => handleCopy('31478902341', 'acc_in', 'Account Number')}
              >
                {copiedKey === 'acc_in' ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedKey === 'acc_in' ? 'Copied' : 'Copy'}</span>
              </button>
            </span>
          </div>

          <div className="bank-detail-item">
            <span className="bank-detail-label">IFSC Code</span>
            <span className="bank-detail-value" style={{ fontFamily: 'monospace', fontSize: '1.05rem', color: 'var(--primary)' }}>
              SBIN0031835
              <button 
                type="button"
                className="copy-btn" 
                onClick={() => handleCopy('SBIN0031835', 'ifsc', 'IFSC Code')}
              >
                {copiedKey === 'ifsc' ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedKey === 'ifsc' ? 'Copied' : 'Copy'}</span>
              </button>
            </span>
          </div>

          <div className="bank-detail-item">
            <span className="bank-detail-label">Branch</span>
            <span className="bank-detail-value">Bubani / Gagwana, Ajmer</span>
          </div>

          <div className="bank-detail-item">
            <span className="bank-detail-label">Account Type</span>
            <span className="bank-detail-value">Savings / Institutional Account</span>
          </div>
        </div>

        <div style={{ background: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <span>Eligible for Indian individuals, corporate CSR, and HUFs. 50% tax deduction under Section 80-G.</span>
        </div>
      </div>

      {/* FCRA SBI New Delhi Main Branch Card */}
      <div className="bank-card">
        <div className="bank-header">
          <div className="bank-title-wrap">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={20} style={{ color: 'var(--secondary)' }} />
              International Donors &bull; FCRA Account
            </h4>
            <span className="bank-badge-fcra">MHA FCRA # 125410040</span>
          </div>
          <div style={{ fontSize: '1.75rem' }}>🌐</div>
        </div>

        <div className="bank-details-list">
          <div className="bank-detail-item">
            <span className="bank-detail-label">Account Name</span>
            <span className="bank-detail-value">
              Gramin Mahila Vikas Sansthan FCRA
              <button 
                type="button"
                className="copy-btn" 
                onClick={() => handleCopy('Gramin Mahila Vikas Sansthan FCRA', 'name_fcra', 'FCRA Account Name')}
              >
                {copiedKey === 'name_fcra' ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedKey === 'name_fcra' ? 'Copied' : 'Copy'}</span>
              </button>
            </span>
          </div>

          <div className="bank-detail-item">
            <span className="bank-detail-label">Designated Bank</span>
            <span className="bank-detail-value">State Bank of India (SBI)</span>
          </div>

          <div className="bank-detail-item">
            <span className="bank-detail-label">Designated Branch</span>
            <span className="bank-detail-value">New Delhi Main Branch (NDMB)</span>
          </div>

          <div className="bank-detail-item">
            <span className="bank-detail-label">Branch Address</span>
            <span className="bank-detail-value">11, Sansad Marg, New Delhi – 110001</span>
          </div>

          <div className="bank-detail-item">
            <span className="bank-detail-label">FCRA Account No.</span>
            <span className="bank-detail-value" style={{ fontFamily: 'monospace', fontSize: '1.05rem', color: 'var(--secondary)' }}>
              40128935412
              <button 
                type="button"
                className="copy-btn" 
                onClick={() => handleCopy('40128935412', 'acc_fcra', 'FCRA Account No')}
              >
                {copiedKey === 'acc_fcra' ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedKey === 'acc_fcra' ? 'Copied' : 'Copy'}</span>
              </button>
            </span>
          </div>

          <div className="bank-detail-item">
            <span className="bank-detail-label">SWIFT Code</span>
            <span className="bank-detail-value" style={{ fontFamily: 'monospace', fontSize: '1.05rem', color: 'var(--secondary)' }}>
              SBININBB104
              <button 
                type="button"
                className="copy-btn" 
                onClick={() => handleCopy('SBININBB104', 'swift', 'SWIFT Code')}
              >
                {copiedKey === 'swift' ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedKey === 'swift' ? 'Copied' : 'Copy'}</span>
              </button>
            </span>
          </div>
        </div>

        <div style={{ background: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-md)', padding: '0.85rem 1rem', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Globe size={16} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
          <span>Statutory MHA Mandate: Foreign currency remittances must be sent to the SBI New Delhi Main Branch.</span>
        </div>
      </div>
    </div>
  );
}
