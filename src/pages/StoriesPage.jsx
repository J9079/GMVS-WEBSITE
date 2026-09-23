import React from 'react';
import FieldStories from '../components/FieldStories';
import { Sparkles } from 'lucide-react';

export default function StoriesPage() {
  return (
    <>
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>Voices of Change</span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Field Stories &amp; Beneficiary Voices
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '760px' }}>
            Every statistic represents a living human story. Read how women, children, and rural families across Rajasthan are rewriting their futures with GMVS.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <FieldStories />
        </div>
      </section>
    </>
  );
}
