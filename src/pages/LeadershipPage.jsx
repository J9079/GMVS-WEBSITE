import React, { useState } from 'react';
import { LEADERS } from '../data/leaders';
import LeadershipModal from '../components/LeadershipModal';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <>
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>Institutional Governance</span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Governing Board &amp; Leadership
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '760px' }}>
            Guided by experienced grassroots visionaries, social entrepreneurs, and community leaders with three decades of ground service across Rajasthan.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Executive Board</span>
            <h2>Meet the Custodians of GMVS</h2>
            <p className="section-subtitle">Dedicated to transparency, participatory development, and social empowerment.</p>
          </div>

          <div className="leaders-grid">
            {LEADERS.map((leader) => (
              <div key={leader.id} className="leader-card">
                <div className="leader-photo-wrap">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <div className="leader-details">
                  <h3 className="leader-name">{leader.name}</h3>
                  <div className="leader-role">{leader.role}</div>
                  <p className="leader-bio-snip">
                    {leader.tenure}
                  </p>
                  <button 
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => setSelectedLeader(leader)}
                  >
                    Read Full Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Governance Standards Feature */}
          <div style={{ marginTop: '4rem', background: 'var(--bg-surface-subtle)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid var(--border-light)' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Governance Commitments &amp; Gender Parity</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>65%+ Female Representation</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Majority of community mobilisers and SHG leaders are rural women.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <ShieldCheck size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Annual External Audits</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Independent Chartered Accountant audits submitted to MHA and statutory regulatory authorities.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Award size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Social Accountability</strong>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Public village Gram Sabha social audits conducted for all infrastructure projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Modal */}
      <LeadershipModal leader={selectedLeader} onClose={() => setSelectedLeader(null)} />
    </>
  );
}
