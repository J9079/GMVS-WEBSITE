import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

const PRESETS = [2500, 5000, 10000, 25000, 50000];

export default function TaxCalculator({ onSelectAmount }) {
  const [amount, setAmount] = useState(10000);
  const [taxSlab, setTaxSlab] = useState(0.30);

  const eligibleDeduction = amount * 0.5; // Sec 80-G allows 50% deduction
  const estimatedTaxSaved = eligibleDeduction * taxSlab;
  const netOutOfPocket = amount - estimatedTaxSaved;

  const getImpactNarrative = (val) => {
    if (val >= 50000) {
      return '🌟 Builds a traditional village rainwater harvesting Taanka or equips a 20-women SHG tailoring cluster with professional sewing machines.';
    }
    if (val >= 25000) {
      return '💧 Constructs an earthen contour bund or rainwater recharge structure for a drought-affected rural farming family.';
    }
    if (val >= 10000) {
      return '📚 Supports 3 girl children with school supplies, uniforms, remedial tutoring, and nutrition for an entire academic year.';
    }
    if (val >= 5000) {
      return '🩺 Funds 2 mother-and-child health screening camps and essential iron/folic maternal nutrition kits.';
    }
    if (val >= 2500) {
      return '🧵 Provides tailoring training kits and sewing materials for 1 rural woman entrepreneur.';
    }
    return '🌱 Supports sapling plantation and community soil conservation in village schools.';
  };

  return (
    <div className="calculator-card">
      <div className="calc-header">
        <span className="calc-badge">
          <Calculator size={15} />
          <span>Interactive 80-G Tax Benefit Calculator</span>
        </span>
        <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '0.5rem' }}>
          See Your True Tax Savings &amp; Net Cost of Giving
        </h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem' }}>
          Donations to GMVS are eligible for 50% deduction under Section 80-G of the Indian Income Tax Act.
        </p>
      </div>

      <div className="calc-grid">
        {/* Input Column */}
        <div className="calc-inputs-side">
          <div className="calc-input-group">
            <label htmlFor="calc-donation-amount">Select or Enter Contribution Amount (₹ INR)</label>
            
            <div className="donation-preset-pills">
              {PRESETS.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`preset-pill ${amount === preset ? 'active' : ''}`}
                  onClick={() => setAmount(preset)}
                >
                  ₹{preset.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            <div className="calc-custom-input">
              <span className="currency">₹</span>
              <input
                id="calc-donation-amount"
                type="number"
                min="500"
                step="500"
                className="calc-input-field"
                value={amount}
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
              />
            </div>
          </div>

          <div className="tax-slab-select">
            <label htmlFor="calc-tax-slab">Select Your Income Tax Bracket</label>
            <select
              id="calc-tax-slab"
              className="calc-select"
              value={taxSlab}
              onChange={(e) => setTaxSlab(Number(e.target.value))}
            >
              <option value={0.30}>30% Slab (Taxable Income above ₹15 Lakh / Old or New Regime)</option>
              <option value={0.20}>20% Slab (Taxable Income ₹10 – 15 Lakh)</option>
              <option value={0.10}>10% Slab (Taxable Income ₹7.5 – 10 Lakh)</option>
              <option value={0.05}>5% Slab (Taxable Income ₹3 – 7 Lakh)</option>
            </select>
          </div>

          {/* Contextual Impact Narrative */}
          <div className="calc-impact-box">
            <div className="calc-impact-title">
              <HeartHandshake size={16} />
              <span>Ground Impact of Your Contribution:</span>
            </div>
            <p className="calc-impact-text">{getImpactNarrative(amount)}</p>
          </div>
        </div>

        {/* Output Results Box */}
        <div className="calc-results-box">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
            <h4 style={{ color: '#FFFFFF', margin: 0, fontSize: '1.15rem' }}>Calculation Breakdown</h4>
            <span style={{ fontSize: '0.75rem', color: '#FDE68A', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <ShieldCheck size={13} /> 80-G Verified
            </span>
          </div>

          <div className="calc-result-row">
            <span className="calc-row-label">Your Donation:</span>
            <span className="calc-row-value">₹{Math.round(amount).toLocaleString('en-IN')}</span>
          </div>

          <div className="calc-result-row">
            <span className="calc-row-label">Sec 80-G Deductible (50%):</span>
            <span className="calc-row-value">₹{Math.round(eligibleDeduction).toLocaleString('en-IN')}</span>
          </div>

          <div className="calc-result-row">
            <span className="calc-row-label">Estimated Tax Saved:</span>
            <span className="calc-row-value savings-value">₹{Math.round(estimatedTaxSaved).toLocaleString('en-IN')}</span>
          </div>

          <div className="calc-result-row total-effective">
            <div>
              <span className="calc-row-label" style={{ fontWeight: 700, color: '#FFFFFF' }}>True Net Out-of-Pocket Cost:</span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', display: 'block' }}>Your actual financial commitment</span>
            </div>
            <span className="calc-row-value net-cost-value">₹{Math.round(netOutOfPocket).toLocaleString('en-IN')}</span>
          </div>

          <p className="calc-tax-note">
            * Official Form 10BE tax certificates will be generated and issued by the GMVS Secretariat to file your Income Tax Return (ITR).
          </p>

          <a href="#bank-transfer" className="btn btn-secondary btn-block" style={{ marginTop: '1.5rem' }}>
            <span>View Bank Details to Donate</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
