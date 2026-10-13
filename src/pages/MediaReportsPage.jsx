import React, { useState } from 'react';
import { MEDIA_REPORTS } from '../data/mediaReports';
import { Newspaper, ZoomIn, X, ExternalLink, Calendar, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MediaReportsPage({ onNotify }) {
  const [activeClip, setActiveClip] = useState(null);

  const handlePreview = (item) => {
    setActiveClip(item);
    if (onNotify) {
      onNotify('Media Clipping', `Viewing newspaper article: ${item.titleHindi}`, 'info');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-sm bg-dark" style={{ background: 'linear-gradient(135deg, #0A2610 0%, #133E1A 100%)' }}>
        <div className="container">
          <span className="badge-tag tag-white" style={{ marginBottom: '0.75rem' }}>
            <Newspaper size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Press &amp; Media Coverage
          </span>
          <h1 className="text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '0.75rem' }}>
            Media Reports &amp; Newspaper Clippings
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.15rem', maxWidth: '780px', lineHeight: 1.6 }}>
            Our grassroots initiatives documented by regional and national daily newspapers. Read real press coverage of our tree plantation campaigns, women sanitary production centres, cyber crime workshops, and health camps.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">Ground Visibility</span>
            <h2>Documented in Regional &amp; National Press</h2>
            <p className="section-subtitle">
              Click on any newspaper article clipping to open high-resolution reader view.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {MEDIA_REPORTS.map((report) => (
              <div
                key={report.id}
                className="media-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Press Clipping Image Wrap */}
                <div
                  style={{
                    position: 'relative',
                    height: '260px',
                    backgroundColor: '#F8FAFC',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    borderBottom: '1px solid #E2E8F0'
                  }}
                  onClick={() => handlePreview(report)}
                  title="Click to zoom clipping"
                >
                  <img
                    src={report.image}
                    alt={report.titleHindi}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      transition: 'transform 0.4s ease'
                    }}
                    onError={(e) => {
                      if (e.currentTarget.src !== report.thumb) {
                        e.currentTarget.src = report.thumb;
                      }
                    }}
                  />

                  {/* Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(15, 23, 42, 0.85)',
                      color: '#FEF3C7',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '20px',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    {report.tag}
                  </span>

                  {/* Zoom Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(0,0,0,0.65)',
                      color: '#FFFFFF',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <ZoomIn size={16} />
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.35rem' }}>
                    {report.source}
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.35rem 0', color: '#0F172A', fontFamily: 'inherit' }}>
                    {report.titleHindi}
                  </h3>

                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#475569', margin: '0 0 0.75rem 0', lineHeight: 1.4 }}>
                    {report.titleEnglish}
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6, margin: '0 0 1rem 0', flexGrow: 1 }}>
                    {report.summary}
                  </p>

                  <div style={{
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                      {report.highlights.split('•')[0]}
                    </span>
                    <button
                      type="button"
                      onClick={() => handlePreview(report)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--primary)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <ZoomIn size={14} />
                      <span>Read Clipping</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-linking to Stories & Annual Reports */}
      <section className="section-sm bg-surface-subtle" style={{ borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
            <div>
              <h3 style={{ margin: '0 0 0.4rem 0', fontSize: '1.3rem' }}>Looking for First-Hand Field Testimonials?</h3>
              <p style={{ margin: 0, color: '#64748B', fontSize: '0.95rem' }}>
                Read how rural families, SHG women, and schoolchildren narrate their personal transformations.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/stories" className="btn btn-primary btn-sm">
                <span>Field Stories &amp; Voices</span>
                <ArrowRight size={14} style={{ marginLeft: '4px' }} />
              </Link>
              <Link to="/annual-reports" className="btn btn-outline btn-sm">
                <span>Annual Reports</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full Clipping */}
      {activeClip && (
        <div
          className="modal-overlay active"
          onClick={() => setActiveClip(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.88)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(6px)'
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              maxWidth: '720px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid #E2E8F0',
              backgroundColor: '#F8FAFC'
            }}>
              <div>
                <span className="badge-tag" style={{ margin: 0, fontSize: '0.75rem' }}>{activeClip.source}</span>
                <h4 style={{ margin: '4px 0 0 0', fontSize: '1.15rem' }}>{activeClip.titleHindi}</h4>
                <div style={{ fontSize: '0.85rem', color: '#64748B' }}>{activeClip.titleEnglish}</div>
              </div>
              <button
                type="button"
                onClick={() => setActiveClip(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748B',
                  padding: '4px'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Clipping Image Box */}
            <div style={{ padding: '1rem', backgroundColor: '#0F172A', textAlign: 'center', maxHeight: '65vh', overflowY: 'auto' }}>
              <img
                src={activeClip.image}
                alt={activeClip.titleHindi}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '6px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                }}
                onError={(e) => {
                  if (e.currentTarget.src !== activeClip.thumb) {
                    e.currentTarget.src = activeClip.thumb;
                  }
                }}
              />
            </div>

            {/* Modal Footer Description */}
            <div style={{ padding: '1.25rem 1.5rem', backgroundColor: '#FFFFFF' }}>
              <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.925rem', lineHeight: 1.6, color: '#334155' }}>
                {activeClip.summary}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                  {activeClip.highlights}
                </span>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => setActiveClip(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
